import React from 'react';
import { connect } from 'react-redux';
import { openingDeleteConfirmation } from '../redux/actions';

export const DeleteConfirmation = (props) => {
  return (
    <div style={{backgroundColor: "red", height: 300, zIndex: 9999, position: "fixed", top: "50%", left: "50%"}}>
        <div style={{color: "white"}}>Are you sure you want to delete this invoice?</div>
        <button
            onClick={() => {
                props.notifyDelete(); 
                props.handleClose()
            }}
        >
            Yes
        </button>
        <button style={{color: "white"}}
            onClick={() => props.handleClose(false)}
        >
            Cancel
        </button>
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