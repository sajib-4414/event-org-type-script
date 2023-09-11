import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from "./components/FirstComponent";
import UserComponent from "./components/UserComponent";
UserComponent
ReactDOM.render(
<div>
<FirstComponent/>
<UserComponent name="Jon" age={26} address="87 summer st" dob={new Date()}/>
</div>,
  document.getElementById("root")
);