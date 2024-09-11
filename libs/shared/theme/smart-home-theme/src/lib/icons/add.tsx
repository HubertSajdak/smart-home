import IIconProps from './icon';

const Add = ({ width = 24, height = 24, color = 'black' }: IIconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.25 12.75H5.5V11.25H11.25V5.5H12.7499V11.25H18.5V12.75H12.7499V18.5H11.25V12.75Z" fill={color} />
  </svg>
);

export default Add;
