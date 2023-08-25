import React, { useEffect, useState } from 'react';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';

import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesAsync } from '../../redux/slices/categoriesSlice';

const Foods = () => {
    const [menuTab, setMenuTab] = useState('');
    const [categoryState, setCategoryState] = useState(null);
    const [loading, setLoading] = useState(false);

    const categories = useSelector(state => state.categories.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        setMenuTab(null);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        dispatch(getCategoriesAsync());
    }, [dispatch]);

    const handleMenuTabs = (id) => {
        setMenuTab(id);
        setCategoryState(id)
    };

    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            <div className="flex items-center justify-center space-x-6  ">
            <p key={0} className={menuTab === null ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs(null)}>Hepsi</p>  
                    {categories.map((category) => (
                        // <li key={category.id}>{category.name}</li>
                         <p key={category.id} className={menuTab === category.id ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs(category.id)}>{category.name} </p>
                    ))}
          
            </div>
            
            <div>
                <FoodItem categoryId={categoryState}/>
            </div>
        </section>
    )
}

export default Foods;