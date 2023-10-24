import React from 'react';
import './Product.css';

function Product(props) {
    return (
        <>
            <div className="col-lg-4 py-3">
                <div className="card">
                    <div className="card-body text-center">
                        <h5 className="title card-title">{props.title}</h5>
                        <p className="text card-text">{props.description}</p>
                        <p className="text card-text">{props.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product