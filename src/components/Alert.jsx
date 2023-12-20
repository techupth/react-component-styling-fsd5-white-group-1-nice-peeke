// Start coding here
/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import errorImage from "../assets/error.png";
import warningImage from "../assets/warning.png";
import infoImage from "../assets/info.png";
import successImage from "../assets/success.png";

export function Alert(props) {
  return (
    <div
      className={`${props.type}-alert`}
      css={css`
        font-family: "Kanit", sans-serif;
        font-family: "Outfit", sans-serif;
        font-size: 20px;
        font-weight: 700;
        display: flex;
        align-items: center;
        width: 650px;
        height: 76px;
        flex-shrink: 0;
        padding: 5px;
        margin: 5px;
        border-radius: 10px;
        border: 1px solid;
        background-color: ${props.type === "error"
          ? "#F9C8C8"
          : props.type === "warning"
          ? "#F9D9C8"
          : props.type === "info"
          ? "#F9EBC8"
          : props.type === "success"
          ? "#CEF7CD"
          : "red"};
      `}
    >
      <img
        src={`${
          props.type === "error"
            ? errorImage
            : props.type === "warning"
            ? warningImage
            : props.type === "info"
            ? infoImage
            : props.type === "success"
            ? successImage
            : undefined
        }`}
        css={css`
          margin: 10px;
        `}
      ></img>
      <p>This is {`${props.type}`} alert box</p>
    </div>
  );
}
