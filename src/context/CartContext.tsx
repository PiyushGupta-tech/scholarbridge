import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { CartItem, Course, Order } from '../types';

const CART_KEY = 'scholarship_local_cart';
const ORDERS_KEY = 'scholarship_local_orders';

interface CartContextValue {
  items: CartItem[];
  addToCart: (course: Course, qty?: number) => void;
  removeFromCart: (courseId: string) => void;
  updateQuantity: (courseId: string, quantity: number) => void;
  clearCart: () => void;
  buyNow: (course: Course) => CartItem[];
  placeOrder: (payload: {
    customer: Order['customer'];
    paymentMethod: string;
    items?: CartItem[];
  }) => Order;
  totalItems: number;
  totalAmount: number;
  orders: Order[];
}

const CartContext = createContext<CartContextValue | null>(null);

function readCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function readOrders(): Order[] {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? (JSON.parse(raw) as Order[]) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() =>
    typeof window === 'undefined' ? [] : readCart(),
  );
  const [orders, setOrders] = useState<Order[]>(() =>
    typeof window === 'undefined' ? [] : readOrders(),
  );

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }, [orders]);

  const addToCart = useCallback((course: Course, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.course._id === course._id);
      if (existing) {
        return prev.map((i) =>
          i.course._id === course._id
            ? { ...i, quantity: i.quantity + qty }
            : i,
        );
      }
      return [...prev, { course, quantity: qty }];
    });
  }, []);

  const removeFromCart = useCallback((courseId: string) => {
    setItems((prev) => prev.filter((i) => i.course._id !== courseId));
  }, []);

  const updateQuantity = useCallback((courseId: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.course._id === courseId
            ? { ...i, quantity: Math.max(1, quantity) }
            : i,
        )
        .filter((i) => i.quantity > 0),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const buyNow = useCallback((course: Course) => {
    const checkoutItems = [{ course, quantity: 1 }];
    setItems((prev) => {
      const existing = prev.find((i) => i.course._id === course._id);
      if (existing) return prev;
      return [...prev, { course, quantity: 1 }];
    });
    return checkoutItems;
  }, []);

  const placeOrder = useCallback(
    ({
      customer,
      paymentMethod,
      items: orderItems,
    }: {
      customer: Order['customer'];
      paymentMethod: string;
      items?: CartItem[];
    }) => {
      const lineItems = orderItems ?? items;
      if (!lineItems.length) {
        throw new Error('Cart is empty');
      }
      const totalAmount = lineItems.reduce(
        (sum, i) => sum + i.course.price * i.quantity,
        0,
      );
      const order: Order = {
        _id: `order_${Date.now()}`,
        items: lineItems,
        totalAmount,
        customer,
        paymentMethod,
        createdAt: new Date().toISOString(),
        status: 'placed',
      };
      const orderedIds = new Set(lineItems.map((i) => i.course._id));
      setOrders((prev) => [order, ...prev]);
      setItems((prev) => prev.filter((i) => !orderedIds.has(i.course._id)));
      return order;
    },
    [items],
  );

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  );

  const totalAmount = useMemo(
    () => items.reduce((sum, i) => sum + i.course.price * i.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      buyNow,
      placeOrder,
      totalItems,
      totalAmount,
      orders,
    }),
    [
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      buyNow,
      placeOrder,
      totalItems,
      totalAmount,
      orders,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export function formatINR(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
