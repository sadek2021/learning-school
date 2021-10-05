import { useEffect, useState } from 'react';

const useCategories = () => {
    // useState apply
    const [categories, setCategories] = useState([]);

    // useEffect apply
    useEffect(() => {
        fetch('./categories.JSON')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);
    return [categories];
};

export default useCategories;