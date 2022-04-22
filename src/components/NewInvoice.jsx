import { connect } from 'react-redux';
import CallToAction from './CallToAction';
import { editorToggled, editedAtIndex } from '../redux/actions';
import "../css/NewInvoice.scss";

function NewInvoice(props) {
	return (
		<button //className="new-invoice"
			onClick={() => {
				props.toggleEditor(! props.editorOpen);
				props.editNoteWithIndex(props.noteIndex);
			}}
		>

			<CallToAction 
				icon="add"
				firstWord="Add" 
				secondWord="Invoice" 
			/>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewInvoice)