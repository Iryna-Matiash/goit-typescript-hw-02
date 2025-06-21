import React, { useState, ChangeEvent, FormEvent } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter a search term.');
      return;
    }
    onSubmit(query);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
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
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
