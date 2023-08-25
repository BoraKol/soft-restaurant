import React,{ useEffect, useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getProductsAsync,getProductsByCategoryIdAsync } from '../redux/slices/productsSlice';

const Product = ({categoryId}) => {

    const dispatch= useDispatch();

    const { products }= useSelector((state)=> state.products);
    console.log("aaaa");

    useEffect(({categories})=> {
        console.log("aaaa");
        if (!categories) {
            dispatch(getProductsAsync())
        }
        else {
            dispatch(getProductsByCategoryIdAsync(categoryId))
        }

    },[dispatch,categoryId]);

  return (

      <div>
          <h2>Products</h2>
          <ul>
              {products && products.map((product) => (
                <li key={product.id}>
                
                {product.name}
                
                </li>
              ))}
          </ul>
      </div>

  );
}

export default Product;