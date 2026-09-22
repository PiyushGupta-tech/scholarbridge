export interface Course {
  _id: string;
  title: string;
  category: string;
  duration: string;
  students: string;
  price: number;
  description: string;
  image: string;
}

export interface CartItem {
  course: Course;
  quantity: number;
}

export interface Order {
  _id: string;
  items: CartItem[];
  totalAmount: number;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  paymentMethod: string;
  createdAt: string;
  status: 'placed' | 'confirmed';
}
