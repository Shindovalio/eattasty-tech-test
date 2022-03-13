// Renders an X button.
import PropTypes from 'prop-types';
// Styles
import "./CloseButton.css";

export default function CloseButton(props) {

	var btnStyle = {
		position: props.position,
		borderRadius: props.borderRadius,
		height: `var(--spacing-${props.size})`,
		width: `var(--spacing-${props.size})`,
		margin: props.margin
	};

	return (
		<button
			className={`close-btn close-${props.color}`}
			onClick={props.clickEvent}
			style={btnStyle}
			type="button"
		></button>
	);

}
CloseButton.defaultProps = {
	position: "relative",
	borderRadius: "50%",
	size: "l",
	margin: "0",
	color: "black",
	clickEvent: null
}
CloseButton.propTypes = {
	position: PropTypes.string,
	borderRadius: PropTypes.string,
	size: PropTypes.string,
	margin: PropTypes.string,
	color: PropTypes.string,
	clickEvent: PropTypes.func
}