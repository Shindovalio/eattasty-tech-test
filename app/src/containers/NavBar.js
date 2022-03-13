import PropTypes from 'prop-types';
// Styles
import './NavBar.css';
//Icons
import logo from '../img/logo.png';
import Cart from '../components/Cart';

export default function NavBar(props) {

    return (
        <div className='navbar shadow'>
            <div className='logo-container'>
                <img className='noselect' src={logo} alt='EatTasty' height='100%' />
                <span className='logo-2 noselect'>So simple and<br /> so good.</span>
            </div>

            <Cart />

        </div>
    );

}
NavBar.defaultProps = {
}
NavBar.propTypes = {
}