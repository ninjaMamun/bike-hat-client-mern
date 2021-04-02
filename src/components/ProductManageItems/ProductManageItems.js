import React from 'react';
import { Redirect } from 'react-router';

const ProductManageItems = ({ product }) => {
    function deleteProduct() {
        fetch(`https://pure-castle-93567.herokuapp.com/delete/${product._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    <Redirect to="/dashboard/manage-products" />

                }
            })
    }

    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td><button className="btn btn-primary mr-1">Edit</button><button className="btn btn-danger" onClick={() => deleteProduct()}>Delete</button></td>
        </tr>
    );
};

export default ProductManageItems;