import * as React from "react"
import { SVGProps } from "react"
const SunIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    fill="none"
    {...props}
  >
    <rect width={72} height={72} fill="#354733" rx={36} />
    <g
      stroke="#FCFCFC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M36 41a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM36 25v2M36 45v2M28.22 28.22l1.42 1.42M42.36 42.36l1.42 1.42M25 36h2M45 36h2M28.22 43.78l1.42-1.42M42.36 29.64l1.42-1.42" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M24 24h24v24H24z" />
      </clipPath>
    </defs>
  </svg>
)
export default SunIcon
