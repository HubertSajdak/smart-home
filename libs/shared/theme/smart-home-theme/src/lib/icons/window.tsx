import IIconProps from './icon';

const Window = ({ width = 24, height = 24, color = 'white' }: IIconProps) => (
  <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM10 10V16H16V10H10ZM10 8H16V2H10V8ZM8 8V2H2V8H8ZM8 10H2V16H8V10Z"
      fill={color}
    />
  </svg>
);

export default Window;
