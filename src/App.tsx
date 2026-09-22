import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { RefundPage } from './pages/RefundPage';
import { CookiesPage } from './pages/CookiesPage';
import { ContactPage } from './pages/ContactPage';
import { CoursesPage } from './pages/CoursesPage';
import { WhyUsPage } from './pages/WhyUsPage';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success/:orderId" element={<OrderSuccessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
