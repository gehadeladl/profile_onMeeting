"use client";
import React from "react";
import styles from "./style.module.css";

const ReviewsSection = ({ reviews }) => {
  const renderStars = (rating) => {
    return "★".repeat(rating);
  };

  return (
    <div className={styles.reviewsSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionIcon}>⭐</div>
        <h3 className={styles.sectionTitle}>آراء الطلاب</h3>
      </div>

      <div className={styles.reviewsList}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewItem}>
            <div className={styles.reviewHeader}>
              <span className={styles.reviewerName}>{review.name}</span>
              <span className={styles.reviewRating}>
                {renderStars(review.rating)}
              </span>
            </div>
            <div className={styles.reviewText}>{review.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
