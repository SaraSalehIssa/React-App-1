import React from 'react';
import Product from '../Product/Product';

function Products() {
    const products = [
        { id: 1, title: 'Product one', description: 'This is product one', price: 2000 },
        { id: 2, title: 'Product two', description: 'This is product two',  price: 1000 },
        { id: 3, title: 'Product three', description: 'This is product three',  price: 7000 },
        { id: 4, title: 'Product four', description: 'This is product four',  price: 1300 },
        { id: 5, title: 'Product five', description: 'This is product five',  price: 6000 },
        { id: 6, title: 'Product six', description: 'This is product six',  price: 2500 },
    ];
    

    return (
        <div className="products container p-3">
            <div className="row">
                {products.map(product => {
                    // return <Product title={product.title} description={product.description} key={product.id} />
                    return <Product {...product} key={product.id} />
                })}
            </div>
        </div>

    )
}

export default Products