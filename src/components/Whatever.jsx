import React from 'react'
import { useEffect } from "react";

let $ = require("jquery");

function Whatever() {

    useEffect(() => {
        $.ajax({
          url: "http://localhost:5003/api/invoices", //the package.json proxy setting doesn't seem to work anymore
          type: "GET",
          success: (response) => {
            console.log(JSON.stringify(response) + "\n\n\n\n wawawawawawawawawawawaw");
          }
        })
    
        console.log("done requesting")
      }, []);



  return (
    <div>Whatever</div>
  )
}

export default Whatever