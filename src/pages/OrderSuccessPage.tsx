import { Link, useLocation, useParams } from 'react-router-dom';
import { formatINR, useCart } from '../context/CartContext';
import type { Order } from '../types';
import { ContactChips } from '../components/ContactChips';
import { Footer } from '../components/Testimonials';

export function OrderSuccessPage() {
  const { orderId } = useParams();
  const location = useLocation();
  const { orders } = useCart();
  const fromState = (location.state as { order?: Order } | null)?.order;
  const order =
    fromState ?? orders.find((o) => o._id === orderId) ?? orders[0];

  return (
    <>
      <div className="page">
        <div className="container">
          <div className="success-page">
            <div className="check" aria-hidden="true">
              ✓
            </div>
            <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Order placed!
            </h1>
            <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
              Thanks{order?.customer.name ? `, ${order.customer.name}` : ''}.
              Your enrollment request is confirmed on this site.
            </p>
            {order && (
              <div
                style={{
                  textAlign: 'left',
                  background: 'var(--mint)',
                  borderRadius: 16,
                  padding: '1rem 1.15rem',
                  marginBottom: '1.5rem',
                }}
              >
                <p>
                  <strong>Order ID:</strong> {order._id}
                </p>
                <p>
                  <strong>Total:</strong> {formatINR(order.totalAmount)}
                </p>
                <p>
                  <strong>Payment:</strong> {order.paymentMethod}
                </p>
                <p>
                  <strong>Items:</strong>{' '}
                  {order.items.map((i) => i.course.title).join(', ')}
                </p>
              </div>
            )}
            <div className="success-help">
              <p>Questions about your order? Share your Order ID with us.</p>
              <ContactChips variant="light" />
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-lime">
                Back to Home
              </Link>
              <Link to="/#courses" className="btn btn-outline">
                Browse More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
