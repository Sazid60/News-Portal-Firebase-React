import { useEffect, useState } from "react";
import {NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    
    return (
        <div className="space-y-7 p-4">
            <h2 className="text-3xl font-bold">All Categories</h2>
            {
                categories.map(category => <NavLink
                    to={`/category/${category.id}`}
                    key={category.id}
                    className="block ml-4 text-xl font-medium text-[#9F9F9F]">
                    {category.name}
                </NavLink>)
            }

        </div>
    );
};

export default LeftSideNav;