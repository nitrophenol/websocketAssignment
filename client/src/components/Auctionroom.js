import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import { useParams } from 'react-router-dom';

const socket = socketIOClient('http://localhost:5000'); // Replace with your server URL

function AuctionRoom() {
  const { auctionId } = useParams();
  const [room, setRoom] = useState(auctionId); // Room name
  const [bidAmount, setBidAmount] = useState('');

  const joinRoom = () => {
    socket.emit('joinRoom', room);
  };

  const placeBid = () => {
    socket.emit('bid', room, bidAmount);
  };

  // Listen for new bids
  useEffect(() => {
    socket.on('newBid', (bid) => {
      // Handle the new bid in your UI
      console.log('New bid:', bid);
    });
  }, []);

  return (
    <div>
      <h1>Auction Room: {room}</h1>
      <button onClick={joinRoom}>Join Room</button>
      <input
        type="number"
        placeholder="Enter bid amount"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
      />
      <button onClick={placeBid}>Place Bid</button>
    </div>
  );
}

export default AuctionRoom;
