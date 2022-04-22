import React from 'react';
import CallToAction from './CallToAction';
import "../css/SubmitForm.scss";

function SubmitForm() { //I don't actually need this and can't use it either, the form doesn't see the type=submit of the div and I can't use an input tag, it doesn't take children
  return (
    <button className="submit-button"
        type="submit"
    >
			<CallToAction 
				icon="ok"
				firstWord="File" 
				secondWord="Form" 
			/>
    </button>
  )
}

export default SubmitForm;