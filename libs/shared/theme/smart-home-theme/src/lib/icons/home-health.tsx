import IIconProps from './icon';

const HomeHealth = ({ width = 24, height = 24, color = 'black' }: IIconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M4 21V9L12 3L20 9V21H4ZM6 19H18V10L12 5.5L6 10V19Z" fill={color} />
  </svg>
);

export default HomeHealth;
