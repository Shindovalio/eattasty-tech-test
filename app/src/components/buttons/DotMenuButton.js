import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
// Styles
import "./DotMenuButton.css";
export default function DotMenuButton(props) {

    let options = props.options;
    const [menuToggled, setMenuToggled] = useState(false);

    function changeMenu(e) {
        if (!e.target.classList.contains("triple-dot-btn") &&
            !e.target.classList.contains("triple-dot-menu") &&
            !e.target.classList.contains("dot-menu-option")) {
            setMenuToggled(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", changeMenu);
        return () => {
            document.removeEventListener("click", changeMenu);
        }
    }, [])

    return (
        <div className={`triple-dot-container ${menuToggled ? "" : props.contClass}`}>
            <div className={`triple-dot-btn ${menuToggled ? "dot-btn-toggled" : ""} shadow`} tabIndex={0}
                onClick={e => setMenuToggled(menuToggled ? false : true)}>
                <span className="middle-dot"></span>
            </div>
            {menuToggled ? (
                <div className="triple-dot-menu shadow">
                    {
                        options.map((option, i) => (
                            <div key={i.toString()} className="dot-menu-option" onClick={option.clickEvent}>
                                {option.name}
                            </div>
                        ))
                    }
                </div>
            ) : null}
        </div >
    );
}
DotMenuButton.propTypes = {
    options: PropTypes.array.isRequired,
    contClass: PropTypes.string.isRequired
}