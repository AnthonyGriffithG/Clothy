import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircle } from 'react-icons/md';
import '../styles/ClothList.css';

export default function ClothListWrapper({ children }) {
  const [page, setPage] = useState(0);
  const [fixed, setFixed] = useState(false);
  const changeAddBtn = () => {
    if (window.innerWidth < 600 && window.scrollY >= 70) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeAddBtn);
    return () => {
      window.removeEventListener('scroll', changeAddBtn);
    };
  }, []);
  return (
    <div>
      <div className="items-options">
        <div></div>
        <Link
          className={`add-item-link ${fixed ? 'fixed' : ''}`}
          to={'/items/new'}
        >
          <MdAddCircle size={fixed ? '3em' : '2em'} />
        </Link>
      </div>
      {children}
      <div className="pagination">
        <button>{page - 1}</button>
        {page}
        <button>{page + 1}</button>
      </div>
    </div>
  );
}
