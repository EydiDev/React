import React, { Component } from "react";

import ReactDOM from "react-dom";
class Port extends Component {
  constructor(props) {
    super(props);
    this.Div = React.createRef();
    this.state = {
      display: "none",
    };
  }

  ok = () => {
    this.setState({
      display: "none",
    });
  };
  leave = () => {
    // this.setState({
    //     display : "none"
    // })
    console.log("ee");
  };

  render() {
    return ReactDOM.createPortal(
      <div id="dd" ref={this.Div} style={{backgroundColor: "rgba(0, 0, 0, 0.81)",width: "100%",height: "-webkit-fill-available",position: "fixed",top: "0px",display: this.state.display,alignItems: "center",justifyContent: "center",
        }}>
        <div style={{display: "flex",flexDirection: "column",alignItems: "center",backgroundColor: "cornflowerblue",width: "400px",height: "200px",justifyContent: "space-evenly",borderRadius: "20px",
          }}>
          <input type="text"></input>
          <button onClick={this.ok}> ok</button>
        </div>
      </div>,
      document.getElementById("portalChild")
    );
  }
}

export default Port;
