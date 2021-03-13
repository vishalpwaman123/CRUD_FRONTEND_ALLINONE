import React, { Component } from "react";
import "../Static/Deletepage.scss";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export class Deleteoperation extends Component {
  render() {
    return (
      <div className="container">
        <div className="sub-Container_put">
          <div className="container-Header">
            <div className="header-Text">Enter Id :</div>
            <TextField id="outlined-basic" variant="outlined" />
            <Button className="put-ById" variant="contained">
              Search
            </Button>
          </div>
          <div className="container-Body">
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

export default Deleteoperation;
