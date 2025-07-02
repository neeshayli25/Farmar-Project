import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaTrash, FaUserCircle, FaSearch, FaPlus } from 'react-icons/fa';

const Farmer = () => {
  const [crops, setCrops] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [newCrop, setNewCrop] = useState({
    name: '',
    image: '',
    price: '',
    quantity: ''
  });

  useEffect(() => {
    fetchCrops();
  }, []);

  // Fetch crops from backend
  const fetchCrops = async () => {
    try {
      const res = await axios.get('/api/crops');
      setCrops(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete crop by ID, update state immediately
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/crops/${id}`);
      setCrops(prev => prev.filter(crop => crop.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Add new crop and update state immediately
  const handleAddCrop = (e) => {
    e.preventDefault();
  
    if (!newCrop.name || !newCrop.image || !newCrop.price || !newCrop.quantity) {
      alert("Please fill all fields");
      return;
    }
  
    // Create a temporary crop with a unique id (using timestamp)
    const tempCrop = {
      id: Date.now(), // temporary unique id
      ...newCrop
    };
  
    // Update crops state immediately
    setCrops(prev => [...prev, tempCrop]);
  
    // Reset form and hide modal
    setNewCrop({ name: '', image: '', price: '', quantity: '' });
    setShowForm(false);
  };

  // Filter crops by search query (case-insensitive)
  const filteredCrops = crops.filter(crop =>
    crop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.wrapper}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.logo}>🌾 FARmer Dashboard</div>
        <div style={styles.searchContainer}>
          <FaSearch />
          <input
            type="text"
            placeholder="Search crops..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        <div style={styles.profile}>
          <FaUserCircle size={30} />
        </div>
      </div>

      {/* Add Crop Button */}
      <div style={styles.addButtonContainer}>
        <button style={styles.addButton} onClick={() => setShowForm(true)}>
          <FaPlus style={{ marginRight: '6px' }} />
          Add New Crop
        </button>
      </div>

      {/* Crops Grid */}
      <motion.div
        className="crop-grid"
        style={styles.grid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {filteredCrops.length === 0 ? (
          <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#555' }}>
            No crops found.
          </p>
        ) : (
          filteredCrops.map((crop) => (
            <motion.div
              key={crop.id}
              style={styles.card}
              whileHover={{ scale: 1.05 }}
              layout
            >
              <img src={crop.image} alt={crop.name} style={styles.image} />
              <h3>{crop.name}</h3>
              <p><strong>Price:</strong> {crop.price}</p>
              <p><strong>Quantity:</strong> {crop.quantity}</p>
              <button
                style={styles.deleteButton}
                onClick={() => handleDelete(crop.id)}
              >
                <FaTrash /> Delete
              </button>
            </motion.div>
          ))
        )}
      </motion.div>

      {/* Add Crop Modal */}
      {showForm && (
        <div style={styles.modalOverlay}>
          <motion.div
            style={styles.modal}
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <h2>Add New Crop</h2>
            <form onSubmit={handleAddCrop} style={styles.form}>
              <input
                type="text"
                placeholder="Crop Name"
                value={newCrop.name}
                onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newCrop.image}
                onChange={(e) => setNewCrop({ ...newCrop, image: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Price"
                value={newCrop.price}
                onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Quantity"
                value={newCrop.quantity}
                onChange={(e) => setNewCrop({ ...newCrop, quantity: e.target.value })}
                required
              />
              <div style={styles.formButtons}>
                <button type="submit" style={styles.saveButton}>Save</button>
                {/* Cancel button should NOT submit form */}
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={styles.cancelButton}
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(to bottom right, #e0ffe0, #d0f0ff)'
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    borderRadius: '20px',
    padding: '5px 10px',
    width: '40%',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    marginLeft: '8px',
    width: '100%',
  },
  profile: {
    cursor: 'pointer',
    color: '#333',
  },
  addButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px'
  },
  addButton: {
    backgroundColor: '#27ae60',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: '20px',
  },
  card: {
    background: '#ffffff',
    padding: '15px',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    transition: '0.3s'
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px'
  },
  deleteButton: {
    marginTop: '10px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 12px',
    cursor: 'pointer'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    background: '#fff',
    padding: '30px',
    borderRadius: '15px',
    width: '90%',
    maxWidth: '500px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  formButtons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  saveButton: {
    backgroundColor: '#2ecc71',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer'
  },
  cancelButton: {
    backgroundColor: '#bdc3c7',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer'
  }
};

export default Farmer;
