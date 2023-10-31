import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    fetch(`http://localhost:5000/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <img src={user.profilePicture} alt="Profile" />
      <p>Email: {user.email}</p>
      <Link to="/items">All Items</Link>
      <Link to="/auctions">All Auctions</Link>
      <Link to="/your-items">Your Items</Link>
      <Link to="/your-auctions">Your Auctions</Link>
      <Link to="/create-auction">Create Auction</Link>
      <Link to="/create-item">Create Item</Link>
    </div>
  );
};

export default Home;
