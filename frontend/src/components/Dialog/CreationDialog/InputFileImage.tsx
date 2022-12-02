import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent } from "react";
import ApplyButton from "../../assets/apply-button.png";
import { Container } from "../../../style/global";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface Props {
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  file?: FileList | null;
}

export const InputFileImage: React.FC<Props> = ({ handleChange, file }) => {
  const clickHandler = () => {
    document.getElementById("input-file")?.click();
  };

  return (
    <>
      <Box component="input" type="file" accept="image/*" id="input-file" sx={{ display: "none" }} onChange={handleChange} />

      <Box border={file ? "2px solid #263A5F" : "2px solid #00000017"} width="100%" marginBottom="20px" onClick={clickHandler}>
        <Container flexDirection="column">
          {file ? (
            <Box display="flex" justifyContent="space-evenly" width="100%">
              <CheckCircleIcon color="primary" />
              <Typography color="primary">Arquivo selecionado</Typography>
            </Box>
          ) : (
            <>
              <Box component="img" src={ApplyButton} margin="15px 0px" />
              <Typography sx={{ color: "#00000017" }}>Logo</Typography>
            </>
          )}
        </Container>
      </Box>
    </>
  );
};
