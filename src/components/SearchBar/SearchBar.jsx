
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search term.');
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <button type="submit" className={styles.iconButton} aria-label="Search">
            <FiSearch className={styles.icon} />
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.input}
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
