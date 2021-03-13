import React, { Component } from "react";
import "../Static/Postoperation.scss";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export class Postoperation extends Component {
  render() {
    return (
      <div className="container">
        <div className="sub_Container">
          <div className="operation_Header">
            <div className="operation-Get-All">
              <Button className="get-All" variant="contained">
                All Data
              </Button>
            </div>
            <div className="operation_Byattribute_Button">
              <div className="operation_Byid_Button">
                <div className="Text-Header">Enter Id:</div>
                <TextField id="outlined-basic" variant="outlined" />
                <Button className="get-ById" variant="contained">
                  Search
                </Button>
              </div>
              <div className="operation_Byname">
                <div className="Text-Header">Enter Name:</div>
                <TextField id="outlined-basic" variant="outlined" />
                <Button className="get-ByName" variant="contained">
                  Search
                </Button>
              </div>
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
