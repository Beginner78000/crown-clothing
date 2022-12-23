import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../../selectors/category.selector';
import CategoryPreview from '../../CategoryPreview';

function CategoriesPreview() {
    const categoriesMap  = useSelector(selectCategoriesMap);
    console.log('categories ===>>>', categoriesMap)
    return (
      <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
      );
}

export default CategoriesPreview;
