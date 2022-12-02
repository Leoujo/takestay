import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { CenterContainer } from "../../style/global";

export const DesktopHome = () => {
  const [currentYear, setCurrentYear] = useState<Number>(0);

  useEffect(() => {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    setCurrentYear(todayYear);
  }, []);

  return (
    <Box bgcolor="primary.main">
      <CenterContainer height="100vh">
        <Box component="img" src="/assets/logo/main.png" width="25%" />
        <Typography variant="h1" component="div" color="secondary" fontWeight="600" textAlign="center">
          For now
          <Box color="white" component="span">
            , our site can
          </Box>
          {" only "}
          <Box color="white" component="span">
            be accessed
          </Box>
          {" by smartphones."}
        </Typography>
        <Typography color="white" variant="overline" component="span">
          {` test aplication @${currentYear}`}
        </Typography>
      </CenterContainer>
    </Box>
  );
};
