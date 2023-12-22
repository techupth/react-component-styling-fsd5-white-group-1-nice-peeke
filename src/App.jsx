/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="Primary" />
        <Button type="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert
          type="error"
          message="This is error alert box"
          icon="error-icon.png"
        />
        <Alert
          type="warning"
          message="This is warning alert box"
          icon="warning-icon.png"
        />
        <Alert
          type="info"
          message="This is info alert box"
          icon="info-icon.png"
        />
        <Alert
          type="success"
          message="This is success alert box"
          icon="success-icon.png"
        />
      </div>
    </div>
  );
}

export default App;
