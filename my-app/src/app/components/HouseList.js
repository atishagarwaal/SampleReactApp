import { useState } from "react";
import "./HouseList.css";

// Initial houses data - refactored outside component for reusability
const initialHouses = [
  { id: 1, address: "123 Main Street", city: "New York" },
  { id: 2, address: "456 Oak Avenue", city: "Los Angeles" },
  { id: 3, address: "789 Pine Road", city: "Chicago" },
  { id: 4, address: "12th Grand Street", city: "London" }
];

/**
 * HouseList Component
 * Displays a list of houses with ability to add and delete houses dynamically
 * Uses React state to manage the houses list and form inputs
 */
const HouseList = () => {
  // State for managing the houses list
  const [houses, setHouses] = useState(initialHouses);
  
  // State for form inputs when adding a new house
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  /**
   * Handles adding a new house to the list
   * @param {Event} e - Form submit event
   */
  const handleAdd = (e) => {
    e.preventDefault();
    
    // Validate that both fields have non-empty values
    if (address.trim() && city.trim()) {
      // Add new house to the list using spread operator
      // Date.now() generates a unique ID for the new house
      setHouses([...houses, { id: Date.now(), address: address.trim(), city: city.trim() }]);
      
      /**
       * Reconciliation Process (triggered by setHouses):
       * 1. React detects houses state changed
       * 2. React creates a new virtual DOM tree
       * 3. React compares new tree with previous tree
       * 4. React identifies the new item was added
       * 5. React updates only the new house card in the real DOM
       */
      
      // Clear form inputs after adding
      setAddress("");
      setCity("");
    }
  };

  /**
   * Handles deleting a house from the list
   * @param {number} id - The ID of the house to delete
   */
  const handleDelete = (id) => {
    // Filter out the house with the matching ID
    // Keeps only houses where house.id !== id (strict not equal comparison)
    setHouses(houses.filter(house => house.id !== id));
    
    /**
     * Reconciliation Process (triggered by setHouses):
     * 1. React detects houses state changed
     * 2. React creates a new virtual DOM tree
     * 3. React compares new tree with previous tree
     * 4. React identifies which item was removed (using key prop)
     * 5. React removes only that house card from the real DOM
     */
  };

  return (
    <div className="house-list-container">
      <h2>Available Houses</h2>
      
      {/* Form to add new houses */}
      <form onSubmit={handleAdd} className="house-form">
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)} // <--- This also triggers reconciliation (but only updates the input)
          required
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)} // <--- This also triggers reconciliation (but only updates the input)
          required
        />
        <button type="submit">Add</button>
      </form>

      {/* Display list of houses */}
      <div className="house-list">
        {houses.map((house) => (
          <div key={house.id} className="house-card">
            {/**
              * Key Prop Importance:
              * 
              * Without key prop, React might:
              * - Re-render all items even if only one changed
              * - Mix up which item is which
              * - Cause performance issues
              * 
              * With key prop (house.id), React can:
              * - Identify: "House with id=1 is still here"
              * - Identify: "House with id=2 was deleted"
              * - Identify: "House with id=5 is new"
              * - Update only what changed (efficient reconciliation)
              */}
            <h3>{house.address}</h3>
            <p>{house.city}</p>
            <button onClick={() => handleDelete(house.id)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseList;
