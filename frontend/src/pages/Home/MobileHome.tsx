import { Box, Typography } from "@mui/material";
import { AuthDialog } from "../../components/Dialog/AuthDialog";
import { CenterContainer } from "../../style/global";
import { MobileHomeContainer } from "./style";

export const MobileHome = () => {
  return (
    <MobileHomeContainer>
      <CenterContainer height="100vh" justifyContent="space-between">
        <Box>
          <Box component="img" src="/assets/logo/icon.png" width="20%" margin="2em 0 0 0" />
          <Box margin="2em 0">
            <Typography variant="h3" component="div" color="white">
              {"Wanna grab "}
              <Box color="secondary.main" component="span">
                some coffee?
              </Box>
            </Typography>
          </Box>
          <Typography variant="h2" component="h2" color="white" fontWeight="600">
            {"Create a nice "}
            <Box color="secondary.main" component="span">
              menu
            </Box>
            {" for your coffeeshop"}
          </Typography>
        </Box>

        <AuthDialog />
      </CenterContainer>
    </MobileHomeContainer>
  );
};
