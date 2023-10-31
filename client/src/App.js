import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AuctionRoom from './components/Auctionroom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auctionroom/:auctionId" element={<AuctionRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
