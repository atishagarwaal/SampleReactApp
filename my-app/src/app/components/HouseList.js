import "./HouseList.css";

const HouseList = () => {
  const houses = [
    {
      id: 1,
      address: "123 Main Street",
      city: "New York"
    },
    {
      id: 2,
      address: "456 Oak Avenue",
      city: "Los Angeles"
    },
    {
      id: 3,
      address: "789 Pine Road",
      city: "Chicago"
    },
    {
        id: 4,
        address: "12th Grand Street",
        city: "London"
      }
  ];

  return (
    <div className="house-list-container">
      <h2>Available Houses</h2>
      <div className="house-list">
        {houses.map((house) => (
          <div key={house.id} className="house-card">
            <h3>{house.address}</h3>
            <p>{house.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseList;
