import * as React from "react";
import { SVGProps } from "react";
const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={9}
    fill="none"
    {...props}
  >
    <path
      fill="#808276"
      d="M12.354 4.854a.5.5 0 0 0 0-.708L9.172.964a.5.5 0 1 0-.708.708L11.293 4.5 8.464 7.328a.5.5 0 1 0 .708.708l3.182-3.182ZM0 5h12V4H0v1Z"
    />
  </svg>
);
export default ArrowIcon;
