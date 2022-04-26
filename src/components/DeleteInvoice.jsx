import React from 'react';
import { connect } from "react-redux";
import { openingDeleteConfirmation } from "../redux/actions";

function DeleteInvoice(props) {
  return (
    <div className="delete-wrapper" style={style.container}
        onClick={() => props.handleDelete(true)}
    >
        <div className="delete-icon" style={style.icon}>

        </div>

        <div className="delete-title">
            Delete
        </div>
    </div>
  )
}

const style = {
    container: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "6rem,",
        height: "2rem",
        borderRadius: "1.1rem",
        backgroundColor: "red",  
        paddingVertical: "0.1rem",
        paddingHorizontal: "0.3rem"        
    },
    icon: {
        width: "2rem",
        height: "2rem",
        backgroundImage: 'url("../assets/plus-white.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain" 
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        handleDelete: (isOpen) => {
            dispatch(openingDeleteConfirmation(isOpen));
        }
    }
}
export default connect(null, mapDispatchToProps)(DeleteInvoice);