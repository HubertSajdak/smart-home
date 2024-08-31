import IIconProps from './icon';

const BurgerMenu = ({ width = 24, height = 24 }: IIconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 16V14H20V16H4ZM4 10V8H20V10H4Z" fill="#1C1B1F" />
  </svg>
);

export default BurgerMenu;
