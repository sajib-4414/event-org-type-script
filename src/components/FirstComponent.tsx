import * as React from "react";
let Logo ="https://loremflickr.com/640/360";
export default class FirstComponent extends React.Component <{}> {
  render() {
    return (
      <div>
        <h3>A Simple React 2 Component Example with Typescript</h3>
        <div>
          <img height="250" src={Logo} /> 
        </div>
        <p>This component shows the Logrocket logo.</p>
        <p>For more info on Logrocket, please visit https://logrocket.com </p>
      </div>
    );
  }
}