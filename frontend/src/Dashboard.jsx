import React, { useState } from 'react';

const cropsData = [
  {
    id: 1,
    name: 'Wheat',
    price: 'Rs. 2,500 / 40kg',
    quantity: '200 bags available',
    image: 'wheat.jpg',
  },
  {
    id: 2,
    name: 'Rice',
    price: 'Rs. 3,200 / 40kg',
    quantity: '150 bags available',
    image: 'rice_2.jpg',
  },
  {
    id: 3,
    name: 'Corn',
    price: 'Rs. 2,100 / 40kg',
    quantity: '180 bags available',
    image: 'Ears-corn.webp',
  },
  {
    id: 4,
    name: 'Sugarcane',
    price: 'Rs. 4,000 / 100kg',
    quantity: '90 bundles available',
    image: 'images.jpeg'
  }
];

const styles = {
  container: {
    minHeight: '100vh',
    padding: '40px 20px',
    backgroundImage: 'linear-gradient(135deg, #0f9b0f, #00b4db)',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#ffffff',
  },
  heading: {
    textAlign: 'center',
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
    letterSpacing: '1px',
    textShadow: '2px 2px 5px rgba(0,0,0,0.3)',
  },
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '12px 25px',
    borderRadius: '30px',
    border: 'none',
    width: '90%',
    maxWidth: '500px',
    fontSize: '18px',
    outline: 'none',
    backgroundColor: '#ffffff',
    color: '#1f2937',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
    gap: '30px',
    padding: '0 20px',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    backdropFilter: 'blur(8px)',
    cursor: 'pointer',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.35)',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#ffffff',
  },
  price: {
    fontSize: '18px',
    marginBottom: '8px',
    color: '#f0fdf4',
  },
  quantity: {
    fontSize: '16px',
    color: '#d1fae5',
  },
  cartButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#34d399',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#000',
    transition: 'background-color 0.3s',
  },
  cart: {
    marginTop: '30px',
    padding: '20px',
    borderRadius: '15px',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
  },
};

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hovered, setHovered] = useState(null);
  const [cart, setCart] = useState([]);

  const filteredCrops = cropsData.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (crop) => {
    const alreadyInCart = cart.find((item) => item.id === crop.id);
    if (!alreadyInCart) {
      setCart([...cart, crop]);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌾 Farm Connect Dashboard</h1>

      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search crops..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.grid}>
        {filteredCrops.map((crop) => (
          <div
            key={crop.id}
            style={{
              ...styles.card,
              ...(hovered === crop.id ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHovered(crop.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={crop.image} alt={crop.name} style={styles.image} />
            <div style={styles.cardBody}>
              <h2 style={styles.title}>{crop.name}</h2>
              <p style={styles.price}>{crop.price}</p>
              <p style={styles.quantity}>{crop.quantity}</p>
              <button style={styles.cartButton} onClick={() => addToCart(crop)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div style={styles.cart}>
          <h2>🛒 Cart Items:</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> - {item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
