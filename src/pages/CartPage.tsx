import { Link, useNavigate } from 'react-router-dom';
import { formatINR, useCart } from '../context/CartContext';
import { Footer } from '../components/Testimonials';

export function CartPage() {
  const { items, updateQuantity, removeFromCart, totalAmount, clearCart } =
    useCart();
  const navigate = useNavigate();

  return (
    <>
      <div className="page">
        <div className="container">
          <h1>Your Cart</h1>

          {items.length === 0 ? (
            <div className="empty-state">
              <h2 style={{ marginBottom: '0.75rem' }}>Cart is empty</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
                Browse programs and add them to your cart.
              </p>
              <Link to="/" className="btn btn-lime">
                Browse Courses
              </Link>
            </div>
          ) : (
            <div className="cart-layout">
              <div>
                {items.map((item) => (
                  <div className="cart-line" key={item.course._id}>
                    <img src={item.course.image} alt={item.course.title} />
                    <div>
                      <strong>{item.course.title}</strong>
                      <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                        {formatINR(item.course.price)} each
                      </div>
                      <div className="qty-controls">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.course._id, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.course._id, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="link-btn"
                          style={{ marginLeft: '0.5rem' }}
                          onClick={() => removeFromCart(item.course._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="line-price" style={{ fontWeight: 800 }}>
                      {formatINR(item.course.price * item.quantity)}
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-ghost-dark btn-sm"
                  onClick={clearCart}
                >
                  Clear cart
                </button>
              </div>

              <aside className="summary-card">
                <h2>Order Summary</h2>
                <div className="summary-row">
                  <span>Items</span>
                  <span>{items.reduce((s, i) => s + i.quantity, 0)}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>{formatINR(totalAmount)}</span>
                </div>
                <button
                  type="button"
                  className="btn btn-lime"
                  style={{ width: '100%', marginTop: '1rem' }}
                  onClick={() => navigate('/checkout')}
                >
                  Proceed to Checkout
                </button>
                <Link
                  to="/"
                  className="btn btn-outline"
                  style={{ width: '100%', marginTop: '0.65rem' }}
                >
                  Continue Shopping
                </Link>
              </aside>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
