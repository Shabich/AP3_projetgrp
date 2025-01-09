import { Produit } from '../types'; // Importez le type Produit

type CardProps = {
  produits: Produit[]; // Un tableau de Produit
  addToPanier: (produit: Produit) => void; // Une fonction pour ajouter au panier
};



const Card = ({ produits, addToPanier }: CardProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px',
        justifyContent: 'center',
      }}
    >
      {produits.map((produit) => (
        <div
          key={produit.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            width: '300px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {produit.image_url && (
            <img
              src={produit.image_url}
              alt={produit.nom_produit}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '15px',
              }}
            />
          )}

          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
            {produit.nom_produit}
          </h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
            {produit.description}
          </p>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
            <strong>Restrictions:</strong> {produit.restrictions}
          </p>

          <div style={{ marginBottom: '10px' }}>
            <strong>Prix:</strong> <span>{produit.prix}€</span>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <strong>Forme:</strong> <span>{produit.forme}</span>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <strong>Dosage:</strong> <span>{produit.dosage}</span>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <strong>Laboratoire:</strong> <span>{produit.laboratoire_fabriquant}</span>
          </div>

          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
            onClick={() => addToPanier(produit)} // Ajouter le produit au panier
          >
            Acheter
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;