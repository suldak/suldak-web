const deviceSizes = {
  mobile: "580px",
  tablet: "768px",
  desktop: "1284px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  desktop: `screen and (max-width: ${deviceSizes.desktop})`,
};

const theme = {
  device
};

export default theme;