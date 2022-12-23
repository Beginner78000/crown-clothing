import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { getCategoriesAndDocuments } from "../../../utils/firebase";

import { setCategories } from '../../../actions/category.action.js';
import CategoriesPreview from '../../pages/CategoriesPreview';
import Category from '../../Category';

import './style.scss';

function Shop() {

  const dispatch = useDispatch();

  const getCategoriesMap = async () => {
    const categoriesArray = await getCategoriesAndDocuments('categories');
    // console.log("categories data ====>>>>", categoriesArray)
    dispatch(setCategories(categoriesArray));
  };

  useEffect(() => {
    // console.log('call useEffect');
    getCategoriesMap();
  }, []);

    return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
      );
}

export default Shop;