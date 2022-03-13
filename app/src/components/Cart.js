import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Styles
import './Cart.css';
// Icons
import dish1 from "../img/dish1.jpg";
import dish2 from "../img/dish2.jpg";
import dish3 from "../img/dish3.jpg";
// Other Components
import PlusButton from './buttons/PlusButton';
import MinusButton from './buttons/MinusButton';
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// Cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const cart = <FontAwesomeIcon icon={faShoppingCart} />;


export default function Cart(props) {

    const [cartToggled, setCartToggled] = useState(false);

    useEffect(() => {
        if (cookies.get("cartToggled") && cookies.get("cartToggled") === "1") {
            setCartToggled(true);
        } else {
            cookies.set("cartToggled", "0", { sameSite: "None", secure: true });
        }
    }, []);

    function setCookie(type) {
        if (type) {
            setCartToggled(true);
            cookies.set("cartToggled", "1", { sameSite: "None", secure: true });
        } else {
            setCartToggled(false);
            cookies.set("cartToggled", "0", { sameSite: "None", secure: true });
        }
    }

    return (
        <div className='cart-container'>
            <div className={`cart-btn noselect ${cartToggled ? "cart-toggled" : "cart-hidden"}`}
                onClick={e => setCookie(cartToggled ? false : true)}>
                <div className='cart-img'>{cart}</div>
                <span className='cart-text'>Your Cart</span>
            </div>
            {
                cartToggled ? (
                    <div className='cart shadow'>
                        <div className='cart-content custom-scroll'>
                            <h3 className='cart-title normal'>Items <span className='item-count noselect'>8</span></h3>
                            <div className='cart-item'>
                                <img className='cart-item-img' src={dish1} />
                                <div className='cart-item-content'>
                                    <div className='cart-item-col-1'>
                                        <span className='cart-item-amount'>1x</span>
                                        <div className='cart-item-prod-info'>
                                            <span className='prod-name'>Almond Breaded Chicken</span><br />
                                            <span className='prod-info'>White meat</span>
                                        </div>
                                        <span className='cart-item-total-price'>$9.99</span>
                                    </div>
                                    <div className='cart-item-col-2'>
                                        <MinusButton />
                                        <PlusButton />
                                    </div>
                                </div>
                            </div>
                            <div className='cart-item'>
                                <img className='cart-item-img' src={dish1} />
                                <div className='cart-item-content'>
                                    <div className='cart-item-col-1'>
                                        <span className='cart-item-amount'>1x</span>
                                        <div className='cart-item-prod-info'>
                                            <span className='prod-name'>Almond Breaded Chicken</span><br />
                                            <span className='prod-info'>White meat</span>
                                        </div>
                                        <span className='cart-item-total-price'>$9.99</span>
                                    </div>
                                    <div className='cart-item-col-2'>
                                        <MinusButton />
                                        <PlusButton />
                                    </div>
                                </div>
                            </div>
                            <div className='cart-item'>
                                <img className='cart-item-img' src={dish1} />
                                <div className='cart-item-content'>
                                    <div className='cart-item-col-1'>
                                        <span className='cart-item-amount'>1x</span>
                                        <div className='cart-item-prod-info'>
                                            <span className='prod-name'>Almond Breaded Chicken</span><br />
                                            <span className='prod-info'>White meat</span>
                                        </div>
                                        <span className='cart-item-total-price'>$9.99</span>
                                    </div>
                                    <div className='cart-item-col-2'>
                                        <MinusButton />
                                        <PlusButton />
                                    </div>
                                </div>
                            </div>
                            <div className='cart-item'>
                                <img className='cart-item-img' src={dish1} />
                                <div className='cart-item-content'>
                                    <div className='cart-item-col-1'>
                                        <span className='cart-item-amount'>1x</span>
                                        <div className='cart-item-prod-info'>
                                            <span className='prod-name'>Almond Breaded Chicken</span><br />
                                            <span className='prod-info'>White meat</span>
                                        </div>
                                        <span className='cart-item-total-price'>$9.99</span>
                                    </div>
                                    <div className='cart-item-col-2'>
                                        <MinusButton />
                                        <PlusButton />
                                    </div>
                                </div>
                            </div>
                            <div className='cart-item'>
                                <img className='cart-item-img' src={dish1} />
                                <div className='cart-item-content'>
                                    <div className='cart-item-col-1'>
                                        <span className='cart-item-amount'>1x</span>
                                        <div className='cart-item-prod-info'>
                                            <span className='prod-name'>Almond Breaded Chicken</span><br />
                                            <span className='prod-info'>White meat</span>
                                        </div>
                                        <span className='cart-item-total-price'>$9.99</span>
                                    </div>
                                    <div className='cart-item-col-2'>
                                        <MinusButton />
                                        <PlusButton />
                                    </div>
                                </div>
                            </div>
                            <div className='cart-item'>
                                <img className='cart-item-img' src={dish1} />
                                <div className='cart-item-content'>
                                    <div className='cart-item-col-1'>
                                        <span className='cart-item-amount'>1x</span>
                                        <div className='cart-item-prod-info'>
                                            <span className='prod-name'>Almond Breaded Chicken</span><br />
                                            <span className='prod-info'>White meat</span>
                                        </div>
                                        <span className='cart-item-total-price'>$9.99</span>
                                    </div>
                                    <div className='cart-item-col-2'>
                                        <MinusButton />
                                        <PlusButton />
                                    </div>
                                </div>
                            </div>
                            <div className='cart-item'>
                                <img className='cart-item-img' src={dish1} />
                                <div className='cart-item-content'>
                                    <div className='cart-item-col-1'>
                                        <span className='cart-item-amount'>1x</span>
                                        <div className='cart-item-prod-info'>
                                            <span className='prod-name'>Almond Breaded Chicken</span><br />
                                            <span className='prod-info'>White meat</span>
                                        </div>
                                        <span className='cart-item-total-price'>$9.99</span>
                                    </div>
                                    <div className='cart-item-col-2'>
                                        <MinusButton />
                                        <PlusButton />
                                    </div>
                                </div>
                            </div>
                            <div className='cart-item'>
                                <img className='cart-item-img' src={dish1} />
                                <div className='cart-item-content'>
                                    <div className='cart-item-col-1'>
                                        <span className='cart-item-amount'>1x</span>
                                        <div className='cart-item-prod-info'>
                                            <span className='prod-name'>Almond Breaded Chicken</span><br />
                                            <span className='prod-info'>White meat</span>
                                        </div>
                                        <span className='cart-item-total-price'>$9.99</span>
                                    </div>
                                    <div className='cart-item-col-2'>
                                        <MinusButton />
                                        <PlusButton />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                ) : null
            }

        </div>
    );

}
Cart.defaultProps = {
}
Cart.propTypes = {
}