import IIconProps from './icon';

const Done = ({ width = 24, height = 24, color = 'white' }: IIconProps) => (
  <svg width={width} height={height} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.54993 11.6538L0.215332 6.31924L1.28456 5.25004L5.54993 9.51541L14.7153 0.350037L15.7845 1.41924L5.54993 11.6538Z"
      fill={color}
    />
  </svg>
);

export default Done;
