/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  if (props.buttonStyle === "primary") {
    return (
      <button
        css={css`
          hight: 50px;
          width: 171.19px;
          padding: 16px px;
          background-color: ${"#074EE8"};
          color: white;
          border: none;
          border-radius: 4px;
        `}
      >
        {`${props.buttonStyle}`}
      </button>
    );
  } else if (props.buttonStyle === "secondary") {
    return (
      <button
        css={css`
          hight: 50px;
          width: 171.19px;
          padding: 16px px;
          background-color: ${"#07A4E8"};
          color: white;
          border: none;
          border-radius: 4px;
        `}
      >
        {`${props.buttonStyle}`}
      </button>
    );
  }
}
