import './index.css'
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/frontpages/Dashboard';
import ProductDetail from './pages/frontpages/ProductDetail';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/adminpages/AdminDashboard';
import AboutPage from './pages/adminpages/AboutPage';
import Cart from './pages/frontpages/Cart';
import Checkout from './pages/frontpages/Checkout';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App
