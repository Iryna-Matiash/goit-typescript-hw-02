
import React from 'react';
import styles from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.button}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;

