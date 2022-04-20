import { connect } from 'react-redux';
import { editorToggled, editedAtIndex } from '../redux/actions';
import "../css/NewInvoice.scss";

function NewInvoice(props) {
	return (
		<div className="new-invoice"
			onClick={() => {
				props.toggleEditor(! props.editorOpen);
				props.editNoteWithIndex(props.noteIndex);
			}}
		>
			<div className="add-icon">

			</div>
			<div className="new-invoice-label">
				<b className="new-invoice-label-first-word">
					Add
				</b>
				<b className="new-invoice-label-second-word">
					Invoice
				</b>
			</div>
		</div>
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