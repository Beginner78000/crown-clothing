import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom';
import './style.scss';

function CategoryPreview({ title, products }) {
    return (
        <div className="category-preview-container">
            <h2>
                <Link className='title' to={title} >{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
                {/* Temps que l'indice est inférieur à quatre on garde les produits */}
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) => <ProductCard key={product.id} product={product} />)

                }
            </div>
        </div>
    );
}

export default CategoryPreview;
