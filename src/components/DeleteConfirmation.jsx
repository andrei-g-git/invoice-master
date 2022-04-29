import React from 'react';
import { connect } from 'react-redux';
import { openingDeleteConfirmation } from '../redux/actions';
import "../css/DeleteConfirmation.scss";

export const DeleteConfirmation = (props) => {
  return (
    <div className="delete-confirmation-container">
        <div className="delete-confirmation">
            <div className="delete-question">
                Are you sure you want to delete this invoice?
            </div>
            <button className="delete-yes"
                onClick={() => {
                    props.notifyDelete(); 
                    props.handleClose();
                }}
            >
                Yes
            </button>
            <button className="delete-no"
                onClick={() => props.handleClose(false)}
            >
                Cancel
            </button>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
    return{
        handleClose: (isOpen) => {
            dispatch(openingDeleteConfirmation(isOpen));
        }
    }
}

export default connect(null, mapDispatchToProps)(DeleteConfirmation)