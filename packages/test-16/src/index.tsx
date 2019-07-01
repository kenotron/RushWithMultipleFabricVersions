import * as React from "react";
import ReactDOM from "react-dom";

import { PrimaryButton } from "office-ui-fabric-react";

const MyComponent = (): JSX.Element => (
  <div>
    <PrimaryButton text="Hello world!" />
  </div>
);

ReactDOM.render(<MyComponent />, document.firstElementChild);
