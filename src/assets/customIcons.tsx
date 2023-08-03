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

const CommentIcon2 = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M2 2H18V14H3.17L2 15.17V2ZM2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0H2ZM4 10H12V12H4V10ZM4 7H16V9H4V7ZM4 4H16V6H4V4Z"
      fill="#DBDBDB"
    />
  </svg>,
  'CommentIcon2',
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

const HamburgerIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
    />
  </svg>,
  'HamburgerIcon',
)

const ImageUploadIcon = createSvgIcon(
  <svg width="61" height="55" viewBox="0 0 61 55" fill="none">
    <path
      d="M61 33.1117V51.0713C61 52.1133 60.591 53.1125 59.863 53.8493C59.1351 54.5861 58.1477 55 57.1182 55H3.88182C2.8523 55 1.86494 54.5861 1.13696 53.8493C0.408976 53.1125 0 52.1133 0 51.0713V33.1117C0 32.0697 0.408976 31.0704 1.13696 30.3337C1.86494 29.5969 2.8523 29.183 3.88182 29.183H17.1909C17.6321 29.183 18.0553 29.3604 18.3673 29.6761C18.6793 29.9919 18.8545 30.4201 18.8545 30.8667C18.8545 31.3132 18.6793 31.7415 18.3673 32.0573C18.0553 32.373 17.6321 32.5504 17.1909 32.5504H3.88182C3.73474 32.5504 3.59369 32.6095 3.4897 32.7148C3.3857 32.82 3.32727 32.9628 3.32727 33.1117V51.0713C3.32727 51.2202 3.3857 51.3629 3.4897 51.4682C3.59369 51.5734 3.73474 51.6326 3.88182 51.6326H57.1182C57.2653 51.6326 57.4063 51.5734 57.5103 51.4682C57.6143 51.3629 57.6727 51.2202 57.6727 51.0713V33.1117C57.6727 32.9628 57.6143 32.82 57.5103 32.7148C57.4063 32.6095 57.2653 32.5504 57.1182 32.5504H43.8091C43.3679 32.5504 42.9447 32.373 42.6327 32.0573C42.3207 31.7415 42.1455 31.3132 42.1455 30.8667C42.1455 30.4201 42.3207 29.9919 42.6327 29.6761C42.9447 29.3604 43.3679 29.183 43.8091 29.183H57.1182C58.1477 29.183 59.1351 29.5969 59.863 30.3337C60.591 31.0704 61 32.0697 61 33.1117ZM18.3665 16.3418L28.8364 5.74842V30.8667C28.8364 31.3132 29.0116 31.7415 29.3236 32.0573C29.6356 32.373 30.0588 32.5504 30.5 32.5504C30.9412 32.5504 31.3644 32.373 31.6764 32.0573C31.9884 31.7415 32.1636 31.3132 32.1636 30.8667V5.74842L42.6335 16.3418C42.9488 16.6392 43.3659 16.8011 43.7969 16.7934C44.2279 16.7857 44.6392 16.609 44.944 16.3006C45.2488 15.9921 45.4234 15.5759 45.431 15.1397C45.4386 14.7035 45.2786 14.2813 44.9847 13.9622L31.6756 0.492409C31.3637 0.177104 30.9409 0 30.5 0C30.0591 0 29.6363 0.177104 29.3244 0.492409L16.0153 13.9622C15.7214 14.2813 15.5614 14.7035 15.569 15.1397C15.5766 15.5759 15.7512 15.9921 16.056 16.3006C16.3608 16.609 16.7721 16.7857 17.2031 16.7934C17.6341 16.8011 18.0512 16.6392 18.3665 16.3418ZM49.9091 42.0915C49.9091 41.5365 49.7465 40.9939 49.4418 40.5324C49.1371 40.071 48.7041 39.7113 48.1974 39.4989C47.6908 39.2865 47.1333 39.2309 46.5954 39.3392C46.0576 39.4475 45.5635 39.7148 45.1757 40.1072C44.788 40.4997 44.5239 40.9997 44.4169 41.544C44.3099 42.0884 44.3648 42.6526 44.5747 43.1654C44.7846 43.6781 45.1399 44.1164 45.5959 44.4248C46.0519 44.7331 46.588 44.8977 47.1364 44.8977C47.8717 44.8977 48.577 44.602 49.097 44.0758C49.617 43.5495 49.9091 42.8357 49.9091 42.0915Z"
      fill="#B4B4B4"
    />
  </svg>,
  'ImageUploadIcon',
)

const TitleIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M5 5V8H10.5V20H13.5V8H19V5H5Z" fill="black" />
  </svg>,
  'TitleIcon',
)

const ImageIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19ZM8.5 13.5L11 16.51L14.5 12L19 18H5L8.5 13.5Z"
      fill="#191919"
    />
  </svg>,
  'ImageIcon',
)

const TagIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M20 10V8H16V4H14V8H10V4H8V8H4V10H8V14H4V16H8V20H10V16H14V20H16V16H20V14H16V10H20ZM14 14H10V10H14V14Z"
      fill="black"
    />
  </svg>,
  'TagIcon',
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

const CustomIcons = {
  CommentIcon,
  CommentIcon2,
  SearchIcon,
  DefaultCheckIcon,
  YellowCheckIcon,
  ArrowLeftIcon,
  HamburgerIcon,
  ImageUploadIcon,
  TitleIcon,
  ImageIcon,
  TagIcon,
  BeforeIcon,
  AfterIcon,
  FilterIcon,
  HeartIcon
}

export default CustomIcons
