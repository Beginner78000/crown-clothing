import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { fetchCategoriesAsync } from '../../../actions/category.action.js';
import CategoriesPreview from '../../pages/CategoriesPreview';
import Category from '../../Category';

function Shop() {

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('call useEffect');
    dispatch(fetchCategoriesAsync());
  }, []);

    return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
      );
}

export default Shop;