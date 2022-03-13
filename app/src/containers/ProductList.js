import { useEffect, useState } from 'react';
import { useParams, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
// Styles
import "./ProductList.css";
// Icons
import dish1 from "../img/dish1.jpg";
import dish2 from "../img/dish2.jpg";
import dish3 from "../img/dish3.jpg";
import PlusButton from '../components/buttons/PlusButton';

function Product() {

    return (
        <div className='product heavy-shadow'>
            <img className='product-img' src={dish2} height="50%" width="100%" />
            <h3 className='product-title normal'>Almond Breaded Chicken</h3>
            <p className='product-description'>Description: Short desc</p>
            <div className='product-lower'>
                <div>$9.99</div>
                <PlusButton />
            </div>
        </div>
    );
}

export default function ProductList(props) {

    return (
        <div className='product-list-container shadow'>

            <div className='product-list custom-scroll'>
                <h3 className='product-list-title normal'>Products</h3>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}
ProductList.defaultProps = {
}
ProductList.propTypes = {
}