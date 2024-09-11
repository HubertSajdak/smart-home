import IIconProps from './icon';

const Wifi = ({ width = 24, height = 24, color = 'black' }: IIconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21C11.3 21 10.7083 20.7583 10.225 20.275C9.74167 19.7917 9.5 19.2 9.5 18.5C9.5 17.8 9.74167 17.2083 10.225 16.725C10.7083 16.2417 11.3 16 12 16C12.7 16 13.2917 16.2417 13.775 16.725C14.2583 17.2083 14.5 17.8 14.5 18.5C14.5 19.2 14.2583 19.7917 13.775 20.275C13.2917 20.7583 12.7 21 12 21ZM6.35 15.35L4.25 13.2C5.23333 12.2167 6.3875 11.4375 7.7125 10.8625C9.0375 10.2875 10.4667 10 12 10C13.5333 10 14.9625 10.2917 16.2875 10.875C17.6125 11.4583 18.7667 12.25 19.75 13.25L17.65 15.35C16.9167 14.6167 16.0667 14.0417 15.1 13.625C14.1333 13.2083 13.1 13 12 13C10.9 13 9.86667 13.2083 8.9 13.625C7.93333 14.0417 7.08333 14.6167 6.35 15.35ZM2.1 11.1L0 9C1.53333 7.43333 3.325 6.20833 5.375 5.325C7.425 4.44167 9.63333 4 12 4C14.3667 4 16.575 4.44167 18.625 5.325C20.675 6.20833 22.4667 7.43333 24 9L21.9 11.1C20.6167 9.81667 19.1292 8.8125 17.4375 8.0875C15.7458 7.3625 13.9333 7 12 7C10.0667 7 8.25417 7.3625 6.5625 8.0875C4.87083 8.8125 3.38333 9.81667 2.1 11.1Z"
      fill={color}
    />
  </svg>
);

export default Wifi;