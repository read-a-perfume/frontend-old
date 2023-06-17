import React from 'react'
import {createSvgIcon} from '@mui/material/utils'

const CommentIcon = createSvgIcon(
  <svg
    width="21"
    height="19"
    viewBox="0 0 21 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5716 16.2675C15.6207 16.2675 19.7144 12.6355 19.7144 8.50681C19.7144 4.37815 15.6207 1.31787 10.5716 1.31787C5.52243 1.31787 1.42871 4.6646 1.42871 8.79326C1.42871 10.4047 2.05271 11.8978 3.11443 13.1177L2.00014 18.1842L6.47557 15.4779C7.77243 16.0041 9.16535 16.2726 10.5716 16.2675Z"
      fill="#E7E7E7"
      stroke="#E7E7E7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  'CommentIcon',
)

const SearchIcon = createSvgIcon(
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.71429 12.4286C9.8702 12.4286 12.4286 9.8702 12.4286 6.71429C12.4286 3.55837 9.8702 1 6.71429 1C3.55837 1 1 3.55837 1 6.71429C1 9.8702 3.55837 12.4286 6.71429 12.4286Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.0812 17.0001L10.7144 10.7144"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  'SearchIcon',
)

const CustomIcons = {
  CommentIcon,
  SearchIcon,
}

export default CustomIcons
