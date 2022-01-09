import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdAddCircle,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import '../styles/ClothList.css';
import ClothList from './ClothList';
import { PAGE_SIZE } from '../config';

export default function ClothListWrapper({ clothes }) {
  const [page, setPage] = useState(1);
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
    <div className="clothlist-wrapper">
      <div className="items-options">
        <div></div>
        <Link
          className={`add-item-link ${fixed ? 'fixed' : ''}`}
          to={'/items/new'}
        >
          <MdAddCircle size={fixed ? '3em' : '2em'} />
        </Link>
      </div>
      <ClothList
        clothes={clothes.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)}
      />
      <div className="pagination">
        <button
          className="btn-pagination pagination-el"
          onClick={() => setPage(page > 1 ? page - 1 : page)}
        >
          <MdKeyboardArrowLeft size="1.5em" />
        </button>
        <input
          type="number"
          className="number-pagination pagination-el"
          value={page}
          onChange={(e) => {
            setPage(e.target.value);
          }}
          min={1}
        />
        <button
          className="btn-pagination pagination-el"
          onClick={() => setPage(page + 1)}
        >
          <MdKeyboardArrowRight size="1.5em" />
        </button>
      </div>
    </div>
  );
}
