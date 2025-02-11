import React, { useEffect, useState } from 'react'
import UserRow from '../component/UserRow'
import FormUser from '../component/FormUser'

export interface User {
  id_t_user: number
  name_t_user: string
  adminAproved: boolean
}

const UsersPanel: React.FC = () => {
  const [users, setProduits] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [idEdit, setId] = useState<number | null>(null)

  // Récupérer le token
  const token = localStorage.getItem('authToken')

  // Fonction pour récupérer les produits
  const getUsers = async () => {
    if (!token) {
      setError("Aucun token trouvé, vous n'êtes pas authentifié.")
      setIsLoading(false)
      return
    }

    setIsLoading(true) // Démarrage du chargement
    try {
      const response = await fetch('http://localhost:3000/api/produits', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Réponse complète du serveur :', errorText)
        throw new Error('Problème avec la requête')
      }

      const data = await response.json()
      console.log('Produits récupérés :', data) // Ajout de log pour inspection
      setProduits(data)
    } catch (err) {
      console.error('Erreur de requête :', err)
      setError('Erreur lors du chargement des produits')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUsers()
  }, [token])

  const handleClickOpen = (id: number | null) => {
    setId(id)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    getUsers() // Rafraîchir les produits après fermeture
  }

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      `Êtes-vous sûr de vouloir supprimer le produit avec l'ID: ${id}?`,
    )
    if (!confirmDelete) return

    if (!token) {
      alert("Token introuvable, vous n'êtes pas authentifié.")
      return
    }

    try {
      const response = await fetch(`http://localhost:3000/api/produits/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Réponse complète du serveur :', errorText)
        throw new Error('Erreur lors de la suppression')
      }

      setProduits(prev => prev.filter(user => user.id_t_user !== id))
      alert('Produit supprimé')
    } catch (err) {
      console.error('Erreur lors de la suppression :', err)
      alert('Erreur lors de la suppression du produit')
    }
  }

  const handleCreate = () => {
    handleClickOpen(null) // Aucun ID pour indiquer une création
  }

  return (
    // <div>
    //   <h2>Utilisateurs</h2>
    //   {isLoading && <p>Chargement...</p>}
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    //   {!isLoading && !error && (
    //     <table border={1} style={{ width: '100%', textAlign: 'left' }}>
    //       <thead>
    //         <tr>
    //           <th>ID</th>
    //           <th>Admin</th>
    //           <th>Actions</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {users.map(user => (
    //           <UserRow
    //             key={user.id_t_user}
    //             user={user}
    //             onEdit={() => handleClickOpen(user.id_t_user)}
    //             onDelete={() => handleDelete(user.id_t_user)}
    //           />
    //         ))}
    //       </tbody>
    //     </table>
    //   )}
    // </div>
    <div>
      <h1>Utilisateurs</h1>
      <button
        onClick={handleCreate}
        style={{ marginBottom: '10px', background: '#367ff5', color: 'white', padding: '3px' }}
      >
        Créer
      </button>
      {isLoading && <p>Chargement des produits...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!isLoading && !error && (
        <table border={1} style={{ width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <UserRow
                key={user.id_t_user}
                user={user}
                onEdit={() => handleClickOpen(user.id_t_user)}
                onDelete={() => handleDelete(user.id_t_user)}
              />
            ))}
          </tbody>
        </table>
      )}
      <FormUser
        id={idEdit}
        open={open}
        handleClose={handleClose}
        reloadProduits={getUsers} // Ajout de la propriété `reloadProduits`
      />
    </div>
  )
}

// const UsersPanel: React.FC<{ users: User[]; isLoading: boolean; error: string | null }> = ({
//   users,
//   isLoading,
//   error,
// }) => (
//   <div>
//     <h2>Utilisateurs</h2>
//     {isLoading && <p>Chargement...</p>}
//     {error && <p style={{ color: 'red' }}>{error}</p>}
//     {!isLoading && !error && (
//       <table border={1} style={{ width: '100%', textAlign: 'left' }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Admin</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <UserRow
//               key={user.id_t_user}
//               user={user}
//               onEdit={() => handleClickOpen(user.id_t_user)}
//               onDelete={() => handleDelete(user.id_t_user)}
//             />
//           ))}
//         </tbody>
//       </table>
//     )}
//   </div>
// )

export default UsersPanel
