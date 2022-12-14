import DirectoryItem from '../DirectoryItem';

import { CategoriesContainer } from './categories.styles';

function Categories({ categories }) {
    return (
        <CategoriesContainer>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </CategoriesContainer>
    );
}

export default Categories;
