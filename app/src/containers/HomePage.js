import { useEffect, useState } from 'react';
import { useParams, NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
// Styles
import "./HomePage.css";
import NavBar from './NavBar';
import ProductList from './ProductList';

export default function HomePage(props) {

    document.title = props.title;

    return (
        <>
            <NavBar />
            <ProductList />
        </>

    );
}
HomePage.propTypes = {
    title: PropTypes.string.isRequired
}