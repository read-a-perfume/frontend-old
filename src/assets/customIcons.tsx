import React from 'react'
import {createSvgIcon} from '@mui/material/utils'
import {theme} from '@theme/theme'

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
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.7495 20.937L16.0855 15.273C17.4466 13.639 18.1253 11.5431 17.9805 9.42145C17.8356 7.29975 16.8784 5.31557 15.3079 3.88166C13.7374 2.44775 11.6745 1.67453 9.54844 1.72284C7.42236 1.77115 5.39674 2.63727 3.89298 4.14103C2.38922 5.64479 1.5231 7.6704 1.47479 9.79649C1.42648 11.9226 2.19971 13.9854 3.63361 15.556C5.06752 17.1265 7.0517 18.0837 9.1734 18.2285C11.2951 18.3733 13.391 17.6946 15.025 16.3335L20.689 21.9975L21.7495 20.937ZM2.99948 9.99752C2.99948 8.6625 3.39536 7.35746 4.13706 6.24742C4.87876 5.13739 5.93296 4.27223 7.16636 3.76134C8.39976 3.25044 9.75696 3.11677 11.0663 3.37722C12.3757 3.63767 13.5784 4.28055 14.5224 5.22455C15.4665 6.16856 16.1093 7.37129 16.3698 8.68066C16.6302 9.99004 16.4966 11.3472 15.9857 12.5806C15.4748 13.814 14.6096 14.8682 13.4996 15.6099C12.3895 16.3516 11.0845 16.7475 9.74948 16.7475C7.95987 16.7455 6.24414 16.0337 4.9787 14.7683C3.71326 13.5029 3.00146 11.7871 2.99948 9.99752Z"
      fill="#202020"
    />
  </svg>,
  'SearchIcon',
)

const DefaultCheckIcon = createSvgIcon(
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
      stroke={theme.palette.grey[500]}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.625 11.125L8.875 13.375L14.5 7.75"
      stroke={theme.palette.grey[500]}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  'DefaultCheckIcon',
)

const YellowCheckIcon = createSvgIcon(
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill={theme.palette.primary.main}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
      stroke={theme.palette.primary.main}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.625 11.125L8.875 13.375L14.5 7.75"
      stroke={theme.palette.grey[800]}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  'YellowCheckIcon',
)

const ArrowLeftIcon = createSvgIcon(
  <svg
    width="14"
    height="10"
    viewBox="0 0 14 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.499 1.49707L0.5 5.49907L4.5 9.50007M13.5 5.50007H0.5"
      stroke="#131313"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  'ArrowLeftIcon',
)

const BeforeIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M13.9806 6L15.3906 7.41L10.8106 12L15.3906 16.59L13.9806 18L7.98062 12L13.9806 6Z"
      fill="#DBDBDB"
    />
  </svg>,
  'BeforeIcon',
)

const AfterIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M10.0194 6L8.60938 7.41L13.1894 12L8.60938 16.59L10.0194 18L16.0194 12L10.0194 6Z"
      fill="#B4B4B4"
    />
  </svg>,
  'AfterIcon',
)

const FilterIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <line x1="2" y1="4.5" x2="22" y2="4.5" stroke="black" />
    <line x1="2" y1="18.5" x2="22" y2="18.5" stroke="black" />
    <line x1="2" y1="11.5" x2="22" y2="11.5" stroke="black" />
    <circle cx="16.5" cy="11.5" r="2" fill="white" stroke="black" />
    <circle cx="6.5" cy="4.5" r="2" fill="white" stroke="black" />
    <circle cx="6.5" cy="18.5" r="2" fill="white" stroke="black" />
  </svg>,
  'FilterIcon',
)

const HeartIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
      fill="#FB196A"
    />
  </svg>,
  'HeartIcon',
)

const CommentIcon2 = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M4 4H20V16H5.17L4 17.17V4ZM4 2C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2H4ZM6 12H14V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z"
      fill="#DBDBDB"
    />
  </svg>,
  'CommentIcon2',
)

const CustomIcons = {
  CommentIcon,
  SearchIcon,
  DefaultCheckIcon,
  YellowCheckIcon,
  ArrowLeftIcon,
  BeforeIcon,
  AfterIcon,
  FilterIcon,
  HeartIcon,
  CommentIcon2
}

export default CustomIcons
