import { connect } from 'react-redux';
//import CallToAction from './CallToAction';
import { editorToggled, editedAtIndex } from '../redux/actions';
//import "../css/NewInvoice.scss";

function ToggleEditor(props) {
	return (
		<button className={props.className} //if I just pass the class as a prop and style it in the parent component it still receives the style just fine
			//style={props.style}
			onClick={() => {
				props.toggleEditor(! props.editorOpen);
				props.editNoteWithIndex(props.noteIndex);
			}}
		>

			{/* <CallToAction 
				icon="add"
				firstWord="Add" 
				secondWord="Invoice" 
			/> */}
			{
				props.children
			}
		</button>
	)
}

const mapStateToProps = (state) => {
	return {
		editorOpen: state.ui.editorOpen,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleEditor: (isOpen) => {
			dispatch(editorToggled(isOpen));
		},
		editNoteWithIndex: (index) => {
			dispatch(editedAtIndex(index));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleEditor)