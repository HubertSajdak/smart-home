import IIconProps from './icon';

const ArrowDropDown = ({ width = 24, height = 24, color = 'black' }: IIconProps) => (
  <svg width={width} height={height} viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 5L0 0H10L5 5Z" fill={color} />
  </svg>
);

export default ArrowDropDown;
