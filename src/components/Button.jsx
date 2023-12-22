/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStylesBase = css`
  padding: 0px 16px;
  border-radius: 4px;
  color: white;
  width: 171.19px;
  height: 50px;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  cursor: pointer;
`;

const primaryButtonStyles = css`
  ${buttonStylesBase}
  background-color: #074ee8;
  margin-right: 15px;
`;

const secondaryButtonStyles = css`
  ${buttonStylesBase}
  background-color: #07a4e8;
`;

function Button({ type }) {
  const buttonStyles =
    type === "Primary" ? primaryButtonStyles : secondaryButtonStyles;
  return <button css={buttonStyles}>Button</button>;
}

export default Button;
