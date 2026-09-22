import { useEffect } from 'react';
import type { Course } from '../types';
import { formatINR } from '../context/CartContext';
import { CATEGORIES } from '../data/courses';

export function ProductModal({
  course,
  onClose,
  onAdd,
  onBuy,
}: {
  course: Course;
  onClose: () => void;
  onAdd: () => void;
  onBuy: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const cat =
    CATEGORIES.find((c) => c.id === course.category)?.label ?? course.category;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <img src={course.image} alt={course.title} />
        <div className="modal-body">
          <h2 id="course-modal-title">{course.title}</h2>
          <p>{course.description}</p>
          <div className="modal-facts">
            <p>
              <strong>Category:</strong> {cat}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Students Enrolled:</strong> {course.students}
            </p>
            <p>
              <strong>Price:</strong> {formatINR(course.price)}
            </p>
          </div>
          <div className="modal-actions">
            <button type="button" className="btn btn-outline" onClick={onAdd}>
              Add to Cart
            </button>
            <button type="button" className="btn btn-lime" onClick={onBuy}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
