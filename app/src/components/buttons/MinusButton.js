// Renders a + button.
import React from "react";
import PropTypes from 'prop-types';
// Styles
import "./MinusButton.css";

export default function MinusButton(props) {

	var btnStyle = {
		position: props.position,
		top: props.top,
		bottom: props.bottom,
		left: props.left,
		right: props.right,
		borderRadius: props.borderRadius,
		transition: props.transition
	};

	return (
		<button className={`minus-btn`} onClick={props.clickEvent} style={btnStyle} type="button">
			{props.children}
		</button>
	);

}
MinusButton.defaultProps = {
	position: "relative",
	top: "unset",
	bottom: "unset",
	left: "unset",
	right: "unset",
	borderRadius: "50%",
	transition: "0.1s",
	clickEvent: null
}
MinusButton.propTypes = {
	position: PropTypes.string,
	top: PropTypes.string,
	bottom: PropTypes.string,
	left: PropTypes.string,
	right: PropTypes.string,
	borderRadius: PropTypes.string,
	transition: PropTypes.string,
	clickEvent: PropTypes.func
}