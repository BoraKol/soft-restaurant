import {useState,React,useEffect} from 'react';
import pot from '../../assets/burgermenu.png'
import { Link  } from 'react-router-dom';
import { getProductsAsync ,getProductsByCategoryIdAsync } from '../../redux/slices/productsSlice';
import { useSelector,useDispatch } from 'react-redux';

const FoodItem = ({categoryId}) => {
    const [loading, setLoading] = useState(false);

    let {products}= useSelector((state)=> state.products);
    const dispatch=useDispatch();

    useEffect(() => {
        setLoading(true);

        console.log("aaaa", products);
        
        if (!categoryId) {
            dispatch(getProductsAsync())
        }
        else {
            dispatch(getProductsByCategoryIdAsync(categoryId))
        }
        setLoading(false);

        console.log("bbb", products)
    }, [dispatch, categoryId]);
    
    
    return (
    <div className='flex justify-center col'>
       
            {/* <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">Burger</span> */}
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id} className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-103 p-4 rounded-lg relative">
                    <p className='mb-5'>{product.name}</p>
                    <p className='mb-5'>{product.description}</p>
                <Link to="/cart">
                <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full  transform transition duration-300 hover:scale-105" >Add to Cart</button>
                </Link>
                </div>
            ))}
        </div>

            {/* <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={pot} alt="" />
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg">ikili burger</h1>
                <p className="text-gray-500 poppins text-sm text-center">HFJ HDU DHHSU  DHYSB DHHSYU DSD</p>
                <h2 className="text-gray-900 poppins text-2xl font-bold">120tl</h2> */}
        
        </div>
          
    )

    // return (
    //     <div className='bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-103 p-4 rounded-lg relative '>
    //         <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">Burger</span>
    //         <ul>
    //             <li key={product.id}>{product.name}</li>
    //         </ul>

    //         {/* Diğer ürün bilgileri ve düğme */}
    //         {/* <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={product.image} alt="" />
    //         <div className="flex flex-col items-center my-3 space-y-2">
    //             <h1 className="text-gray-900 poppins text-lg">{product.name}</h1>
    //             <p className="text-gray-500 poppins text-sm text-center">{product.description}</p>
    //             <h2 className="text-gray-900 poppins text-2xl font-bold">{product.price}tl</h2> */}
    //             <Link to="/order">
    //                 <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full  transform transition duration-300 hover:scale-105">Order Now</button>
    //             </Link>
    //         </div>
 
    // );
    
}

export default FoodItem