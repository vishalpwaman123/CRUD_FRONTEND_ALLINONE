import React, { Component } from "react";
import "../Static/Homepage.scss";

import Button from "@material-ui/core/Button";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="sub-Container">
          <div className="sub-Container-Text">Operations</div>
          <div className="sub-Container-OperationBox">
            <Button
              className="post-Operation"
              variant="contained"
              href="/postoperation"
            >
              POST
            </Button>

            <Button
              className="get-Operation"
              variant="contained"
              href="/getoperation"
            >
              GET
            </Button>

            <Button
              className="put-Operation"
              variant="contained"
              href="/putoperation"
            >
              PUT
            </Button>

            <Button
              className="delete-Operation"
              variant="contained"
              href="/deleteoperation"
            >
              DELETE
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
