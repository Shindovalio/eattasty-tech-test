import { useEffect } from "react";
import PropTypes from 'prop-types';
// Other components
import CloseButton from "../buttons/CloseButton";
// Styles
import "./PopupForm.css";

export default function PopupForm(props) {

	const clickEvent = props.clickEvent;
	const onSubmit = props.onSubmit;

	useEffect(() => {
		document.getElementsByTagName("HTML")[0].classList.add("y-scroll");
		document.body.classList.add("noscroll");
		return () => {
			document.getElementsByTagName("HTML")[0].classList.remove("y-scroll");
			document.body.classList.remove("noscroll");
		}
	}, [])

	return (
		<>
			<div className={`overlay overlay-10k`} onClick={clickEvent} />

			<aside className={`popup-form-container shadow`}>
				<form className={`popup-form custom-scroll`} onSubmit={onSubmit}>
					<CloseButton position="absolute" margin="var(--spacing-xs)" clickEvent={clickEvent} />
					{props.title ? (<h1 className="normal">{props.title}</h1>) : null}
					{props.children}
					<button className="basic-btn popup-save-btn">Save</button>
				</form>
			</aside>
		</>
	);
}
PopupForm.defaultProps = {
	clickEvent: null,
	onSubmit: null
}
PopupForm.propTypes = {
	title: PropTypes.string,
	clickEvent: PropTypes.func,
	onSubmit: PropTypes.func
}