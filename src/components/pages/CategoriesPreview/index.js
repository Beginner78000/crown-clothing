import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../../selectors/category.selector';
import CategoryPreview from '../../CategoryPreview';
import Spinner from '../../Spinner';

function CategoriesPreview() {
    const categoriesMap  = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    // console.log('categories ===>>>', categoriesMap)
    return (
      <Fragment>
        {
            isLoading ? 
              (<Spinner />
              ) : (
                Object.keys(categoriesMap).map((title) => {
                  const products = categoriesMap[title];
                  return (
                    <CategoryPreview key={title} title={title} products={products} />
                  );
              }))
        }
      </Fragment>
    );
}

export default CategoriesPreview;
