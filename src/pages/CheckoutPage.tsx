import { useMemo, useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { formatINR, useCart } from '../context/CartContext';
import type { CartItem } from '../types';
import { Footer } from '../components/Testimonials';

export function CheckoutPage() {
  const { items, placeOrder, totalAmount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const buyNowId = (location.state as { buyNowId?: string } | null)?.buyNowId;

  const checkoutItems: CartItem[] = useMemo(() => {
    if (buyNowId) {
      const hit = items.find((i) => i.course._id === buyNowId);
      if (hit) return [hit];
    }
    return items;
  }, [items, buyNowId]);

  const amount = useMemo(
    () =>
      checkoutItems.reduce((s, i) => s + i.course.price * i.quantity, 0) ||
      totalAmount,
    [checkoutItems, totalAmount],
  );

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'upi',
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    if (!checkoutItems.length) {
      setError('Your cart is empty.');
      return;
    }
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError('Please fill name, email, and phone.');
      return;
    }
    setSubmitting(true);
    try {
      const order = placeOrder({
        customer: {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          address: form.address.trim(),
        },
        paymentMethod: form.paymentMethod,
        items: checkoutItems,
      });
      navigate(`/order-success/${order._id}`, { state: { order } });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not place order');
      setSubmitting(false);
    }
  };

  if (!checkoutItems.length) {
    return (
      <>
        <div className="page">
          <div className="container">
            <div className="empty-state">
              <h2 style={{ marginBottom: '0.75rem' }}>Nothing to checkout</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '1.25rem' }}>
                Add a course first — everything stays on this site.
              </p>
              <Link to="/" className="btn btn-lime">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="page">
        <div className="container">
          <h1>Checkout</h1>
          <div className="checkout-layout">
            <form className="summary-card" onSubmit={onSubmit} style={{ position: 'static' }}>
              <h2>Billing details</h2>
              <div className="form-grid" style={{ marginTop: '1rem' }}>
                <label>
                  Full name
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  Phone
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 ..."
                  />
                </label>
                <label>
                  Address (optional)
                  <textarea
                    rows={3}
                    value={form.address}
                    onChange={(e) =>
                      setForm({ ...form, address: e.target.value })
                    }
                    placeholder="City, state"
                  />
                </label>
                <label>
                  Payment method
                  <select
                    value={form.paymentMethod}
                    onChange={(e) =>
                      setForm({ ...form, paymentMethod: e.target.value })
                    }
                  >
                    <option value="upi">UPI</option>
                    <option value="card">Card</option>
                    <option value="netbanking">Net Banking</option>
                    <option value="cod">Pay on confirmation</option>
                  </select>
                </label>
              </div>
              {error && (
                <p style={{ color: '#b91c1c', marginTop: '0.85rem', fontWeight: 600 }}>
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="btn btn-lime"
                style={{ width: '100%', marginTop: '1.25rem' }}
                disabled={submitting}
              >
                {submitting ? 'Placing order…' : 'Place Order'}
              </button>
              <p
                style={{
                  marginTop: '0.75rem',
                  fontSize: '0.85rem',
                  color: 'var(--muted)',
                }}
              >
                Order is saved locally on this site — you will not be redirected
                elsewhere.
              </p>
            </form>

            <aside className="summary-card">
              <h2>Your items</h2>
              {checkoutItems.map((item) => (
                <div
                  key={item.course._id}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    marginBottom: '0.85rem',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={item.course.image}
                    alt=""
                    style={{
                      width: 64,
                      height: 48,
                      objectFit: 'cover',
                      borderRadius: 10,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>
                      {item.course.title}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                      Qty {item.quantity}
                    </div>
                  </div>
                  <strong>{formatINR(item.course.price * item.quantity)}</strong>
                </div>
              ))}
              <div className="summary-row total">
                <span>Total</span>
                <span>{formatINR(amount)}</span>
              </div>
              <Link to="/cart" className="btn btn-outline" style={{ width: '100%', marginTop: '0.75rem' }}>
                Back to Cart
              </Link>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
