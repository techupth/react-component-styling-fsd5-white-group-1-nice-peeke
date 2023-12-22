/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const Alert = ({ type, message, icon }) => {
  const alertStyles = css`
    display: flex;
    align-items: center;
    width: 650px;
    height: 76px;
    flex-shrink: 0;
    border-radius: 10px;
    color: #444;
    font-family: Kanit;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;

    background-color: ${type === "error"
      ? "#F9C8C8"
      : type === "warning"
      ? "#F9D9C8"
      : type === "info"
      ? "#F9EBC8"
      : type === "success"
      ? "#CEF7CD"
      : "#fff"};
  `;

  const iconStyles = css`
    margin-right: 20px;
    margin-left: 20px;
  `;

  return (
    <div css={alertStyles}>
      <img src={`/icons/${icon}`} alt="Icon" css={iconStyles} />
      <p>{message}</p>
    </div>
  );
};

export default Alert;
