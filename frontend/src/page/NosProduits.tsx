import { useEffect, useState } from 'react';
import Card from '../component/Card';

function App() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const getProduits = async () => {
      try {
        const token = localStorage.getItem("authToken");

        const response = await fetch('http://localhost:3000/api/produits', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Problème avec la requête');
        }

        const data = await response.json();
        setProduits(data);
      } catch (error) {
        console.error('Erreur de requête:', error);
      }
    };

    getProduits();
  }, []);

  return (
    <>
      {produits.length === 0 ? (
        <p>Requête produit...</p>
      ) : (
        <Card produits={produits} />
      )}
    </>
  );
}

export default App;
