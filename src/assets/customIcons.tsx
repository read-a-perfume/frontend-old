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

const CustomIcons = {
  CommentIcon,
  SearchIcon,
  DefaultCheckIcon,
  YellowCheckIcon,
  ArrowLeftIcon,
}

export default CustomIcons
