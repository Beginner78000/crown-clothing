import { useContext } from 'react';

import { CategoriesContext } from '../../../contexts/categories';
import CategoryPreview from '../../CategoryPreview';

import './style.scss';

function CategoriesPreview() {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className="categories-preview-container">
          {Object.keys(categoriesMap).map((key) => {
            const products = categoriesMap[key];
            return <CategoryPreview key={key} title={key} products={products} />;
          })}
        </div>
      );
}

export default CategoriesPreview;
