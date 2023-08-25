import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesAsync } from "../redux/slices/categoriesSlice";
import Product from "./Product";

const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoriesAsync())
  }, [dispatch]);

  return (
    <div>
     
        <div>
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                {category.name}
                
                </li>
            ))}
          </ul>
        </div>

    </div>
  );
};

export default Category;
