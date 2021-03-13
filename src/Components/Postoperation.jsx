import React, { Component } from "react";
import "../Static/Postoperation.scss";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export class Postoperation extends Component {
  render() {
    return (
      <div className="container">
        <div className="sub_Container">
          <div className="Input-data">
            <div className="post-Name">
              <div className="Text-Header">Enter Name:</div>
              <div className="Input-Header">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="eg. Vishal"
                />
              </div>
            </div>

            <div className="post-Designation">
              <div className="Text-Header">Enter Designation:</div>
              <div className="Input-Header">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="eg. Software Engineer"
                />
              </div>
            </div>

            <div className="post-Address">
              <div className="Text-Header">Enter Address:</div>
              <div className="Input-Header">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="eg. Kondhwa"
                />
              </div>
            </div>

            <div className="post-Mobile">
              <div className="Text-Header">Enter Mobile:</div>
              <div className="Input-Header">
                <TextField
                  
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="eg. 9881563158"
                />
              </div>
            </div>

            <div className="post-Button">
              <Button className="post-operation-button" variant="contained">
                ADD
              </Button>
            </div>
          </div>
          <div className="operation_Data">
            <table className="operation_Data_Table">
              <tr className="operation_Data_Header">
                <th class="Header_Id">Id</th>
                <th class="Header_Name">Name</th>
                <th class="Header_Designation">Designation</th>
                <th class="Header_Address">Address</th>
                <th class="Header_Mobile">Mobile</th>
              </tr>
              <tr className="operation_Data_data"></tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Postoperation;
