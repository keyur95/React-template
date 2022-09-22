import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, ListItemAvatar } from "@mui/material";

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();

  // OR
  // const logo = <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />

  const mainLogo = {
    logo: "/static/mock-images/avatars/logo.png",
  };

  const logo = (
    <ListItemAvatar>
      <img
        alt="logo"
        src={mainLogo.logo}
        style={{
          height: 70,
          width: 200,
        }}
      />
    </ListItemAvatar>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
