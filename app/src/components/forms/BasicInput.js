import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
// Styles
import "./BasicInput.css";
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function BasicInput(props) {
	const name = props.name;
	const width = props.width;
	const label = props.label;
	const permaType = props.type;
	let type = props.type;
	const [triggeredError, errorMsgText] = props.errorMsg;
	const [inputValue, setInput] = [props.value, props.setter];
	let requiredClass = "";
	if (props.required === "special") {
		requiredClass = "special-input";
	}
	// For password input
	const [opacity, setOpacityShown] = useState("transparent");
	const [passwordShown, setPasswordShown] = useState(false);
	const togglePasswordVisibility = () => {
		setPasswordShown(!passwordShown);
		if (opacity === "transparent") {
			setOpacityShown("opaque");
		} else {
			setOpacityShown("transparent");
		}
	};
	if (type === "password") {
		type = passwordShown ? "text" : "password";
	}
	const [inputState, setInputState] = useState("");
	function detectChange(e) {
		setInput(e.target.value);
		if (e.target.value.length > 0) {
			setInputState("filled-input");
		}
	}

	useEffect(() => {
		if (inputValue !== "") {
			setInputState("filled-input");
		}
	}, [inputValue])

	return (
		<div className={`input-container`} style={{ width: width }}>

			<div className={`input-field`}>

				{permaType === "password" ? (
					<i className={opacity} onClick={togglePasswordVisibility}>
						{eye}
					</i>
				) : null}
				<input
					className={inputValue.length > 0 ? `${inputState} ${requiredClass}` : `${requiredClass}`}
					value={inputValue}
					type={type}
					name={name}
					onBlur={e => detectChange(e)}
					onChange={e => detectChange(e)}
				/>

				<label className={`noselect`}>{label}</label>

				<span className={`bottom-line`} />

			</div>

			{
				triggeredError ? (
					<div className={`error-message noselect`}>⚠ {errorMsgText}</div>
				) : null
			}

		</div>
	);
}
BasicInput.defaultProps = {
	width: "100%",
	type: "text",
	errorMsg: [false, ""]
}
BasicInput.propTypes = {
	name: PropTypes.string.isRequired,
	width: PropTypes.string,
	label: PropTypes.string.isRequired,
	type: PropTypes.string,
	errorMsg: PropTypes.array,
	value: PropTypes.any.isRequired,
	setter: PropTypes.func.isRequired
}