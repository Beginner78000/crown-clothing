import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../selectors/category.selector';
import ProductCard from '../ProductCard';

import { CategoryContainer, Title } from './category.styles';

function Category() {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
  
    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
          <Title>{category.toUpperCase()}</Title>
          <CategoryContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryContainer>
        </Fragment>
      );
}

export default Category;