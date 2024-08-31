import IIconProps from './icon';

const GridView = ({ width = 24, height = 24 }: IIconProps) => (
  <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.5 7.99998V0.5H7.99998V7.99998H0.5ZM0.5 17.5V9.99998H7.99998V17.5H0.5ZM9.99998 7.99998V0.5H17.5V7.99998H9.99998ZM9.99998 17.5V9.99998H17.5V17.5H9.99998ZM1.99997 6.5H6.5V1.99998H1.99997V6.5ZM11.5 6.5H16V1.99998H11.5V6.5ZM11.5 16H16V11.5H11.5V16ZM1.99997 16H6.5V11.5H1.99997V16Z"
      fill="white"
    />
  </svg>
);

export default GridView;
