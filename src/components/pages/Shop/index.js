import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../../pages/CategoriesPreview';
import Category from '../../Category';

import './style.scss';

function Shop() {
    return (
        <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
      );
}

export default Shop;