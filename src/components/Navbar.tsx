import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { SocialLinks } from './SocialLinks';

const MENU_LINKS = [
  { to: '/', label: 'Home', end: true, hint: 'Start exploring' },
  { to: '/courses', label: 'Courses', hint: '83+ programs' },
  { to: '/why-us', label: 'Why Us', hint: 'The Scholarship edge' },
  { to: '/about', label: 'About', hint: 'Our story' },
  { to: '/contact', label: 'Contact', hint: 'Talk to us' },
  { to: '/cart', label: 'Cart', hint: 'Your enrollments' },
] as const;

export function Navbar() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const syncNavHeight = () => {
      document.documentElement.style.setProperty(
        '--nav-h',
        `${el.getBoundingClientRect().height}px`,
      );
    };

    syncNavHeight();
    const ro = new ResizeObserver(syncNavHeight);
    ro.observe(el);
    window.addEventListener('resize', syncNavHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', syncNavHeight);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  return (
    <>
      <header
        ref={navRef}
        className={`navbar${open ? ' is-menu-open' : ''}`}
      >
        <div className="container nav-inner">
          <Link to="/" className="logo" onClick={close}>
            Scholar<span>ship</span>
          </Link>

          <ul className="nav-links nav-links-desktop">
            {MENU_LINKS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={'end' in item ? item.end : undefined}>
                  {item.label}
                  {item.to === '/cart' && totalItems > 0 ? ` (${totalItems})` : ''}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <div className="nav-social">
              <SocialLinks variant="compact" />
            </div>
            <button
              type="button"
              className="cart-btn"
              onClick={() => {
                close();
                navigate('/cart');
              }}
              aria-label="Open cart"
            >
              Cart
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </button>
            <button
              type="button"
              className={`hamburger${open ? ' is-open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={toggle}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="mobile-menu-backdrop"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={close}
        />

        <div className="mobile-menu-bg" aria-hidden="true">
          <span className="mobile-orb mobile-orb-a" />
          <span className="mobile-orb mobile-orb-b" />
          <div className="mobile-menu-grid" />
        </div>

        <div
          className="mobile-menu-panel"
          role="dialog"
          aria-modal={open}
          aria-label="Menu"
        >
          <div className="mobile-menu-head">
            <div>
              <p className="mobile-menu-kicker">Scholarship Menu</p>
              <strong>Where to next?</strong>
            </div>
          </div>

          <nav className="mobile-menu-nav" aria-label="Mobile">
            {MENU_LINKS.map((item, i) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={'end' in item ? item.end : undefined}
                className="mobile-menu-link"
                style={{ transitionDelay: open ? `${80 + i * 55}ms` : '0ms' }}
                tabIndex={open ? 0 : -1}
                onClick={close}
              >
                <span className="mobile-menu-index">0{i + 1}</span>
                <span className="mobile-menu-label">
                  {item.label}
                  {item.to === '/cart' && totalItems > 0 && (
                    <em className="mobile-cart-pill">{totalItems}</em>
                  )}
                </span>
                <span className="mobile-menu-hint">{item.hint}</span>
                <span className="mobile-menu-arrow" aria-hidden="true">
                  →
                </span>
              </NavLink>
            ))}
          </nav>

          <div className="mobile-menu-foot">
            <SocialLinks variant="compact" label="Follow Scholarship" />
            <button
              type="button"
              className="btn btn-lime"
              tabIndex={open ? 0 : -1}
              onClick={() => {
                close();
                navigate('/#courses');
              }}
            >
              Browse Programs
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
