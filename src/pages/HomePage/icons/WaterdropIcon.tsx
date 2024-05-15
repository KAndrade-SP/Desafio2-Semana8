import * as React from "react"
import { SVGProps } from "react"
const WaterdropIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    fill="none"
    {...props}
  >
    <rect width={72} height={72} fill="#354733" rx={36} />
    <path
      stroke="#FCFCFC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m35.995 26.34 5.66 5.66a8 8 0 1 1-11.31 0l5.65-5.66Z"
    />
  </svg>
)
export default WaterdropIcon;
