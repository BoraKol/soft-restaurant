import { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_ENDPOINT}/products`)
            .then((res) => res.json())
            .then(data => {
                setFoods(data.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); 

    return foods;
};

export default useFetch