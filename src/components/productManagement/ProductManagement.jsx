import React from 'react';
import ProductForm from '../productForm/ProductForm';
import ProductTable from '../productTable/ProductTable';

const ProductManagement = () => {
    return (
        <div>
            <ProductForm></ProductForm>
            <ProductTable></ProductTable>
        </div>
    );
};

export default ProductManagement;