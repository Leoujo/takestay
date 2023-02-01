import { Box } from "@mui/system";
import ProfileIcon from "../../../../assets/images/profile.png";
import { Container, Divider, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Image, RowContainer } from "../../../../common/styles";

export const Profile = () => {
  return (
    <>
      <Container>
        <RowContainer justify="space-between" margin="10px 0 ">
          <RowContainer width="fit-content">
            <Image src={ProfileIcon} />
            <Box>
              <Typography color="primary">Santo Cantim</Typography>
              <Typography variant="body2" color="grey">
                By: Leozin
              </Typography>
            </Box>
          </RowContainer>
          <VisibilityIcon color="primary" />
        </RowContainer>
      </Container>
      <Divider />
    </>
  );
};
