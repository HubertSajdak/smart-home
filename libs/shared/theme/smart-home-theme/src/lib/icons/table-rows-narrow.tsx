import IIconProps from './icon';

const TableRowsNarrow = ({ width = 24, height = 24, color = 'white' }: IIconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19 15V13H5V15H19ZM19 11V9H5V11H19ZM19 7V5H5V7H19ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM19 19V17H5V19H19Z"
      fill={color}
    />
  </svg>
);

export default TableRowsNarrow;
