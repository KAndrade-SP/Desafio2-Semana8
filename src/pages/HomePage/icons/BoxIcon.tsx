import * as React from "react"
import { SVGProps } from "react"
const BoxIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m30 26-3 4v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V30l-3-4H30ZM27 30h18"
    />
    <path
      stroke="#FCFCFC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M40 34a4 4 0 1 1-8 0"
    />
  </svg>
)
export default BoxIcon
