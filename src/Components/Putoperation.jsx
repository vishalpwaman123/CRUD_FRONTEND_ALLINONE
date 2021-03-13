import React, { Component } from "react";
import "../Static/Putoperation.scss";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export class Putoperation extends Component {
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
            <div className="update-Operation-Field">
              <div className="update-Name">
                <div className="update-Title">Update Name :</div>
                <div className="update-Input">
                  <TextField id="outlined-basic" variant="outlined" />
                </div>
              </div>
              <div className="update-Designation">
                <div className="update-Title">Update Designation :</div>
                <div className="update-Input">
                  <TextField id="outlined-basic" variant="outlined" />
                </div>
              </div>
              <div className="update-Address">
                <div className="update-Title">Update Address :</div>
                <div className="update-Input">
                  <TextField id="outlined-basic" variant="outlined" />
                </div>
              </div>
              <div className="update-Mobile">
                <div className="update-Title">Update Mobile :</div>
                <div className="update-Input">
                  <TextField id="outlined-basic" variant="outlined" />
                </div>
              </div>
              <div className="update-Button">
                <Button className="put-button" variant="contained">
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Putoperation;
