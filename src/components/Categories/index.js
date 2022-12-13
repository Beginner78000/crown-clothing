import DirectoryItem from '../DirectoryItem';

import './style.scss';

function Categories({ categories }) {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Categories;
