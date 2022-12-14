import ProductCard from '../ProductCard';

import {
    CategoryPreviewContainer,
    Title,
    Preview,
  } from './categoryPreview.styles';

function CategoryPreview({ title, products }) {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products
                .filter((_, idx) => idx < 4)
                .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Preview>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;
