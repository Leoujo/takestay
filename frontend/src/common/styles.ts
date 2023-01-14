import styled from "@emotion/styled";
import { Box } from "@mui/system";

interface ContainerProps {
  justifyContent?: "space-between"  ;
}

export const Container = styled(Box)<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : "center")};
  align-items: center;
  height: 100%;
  padding: 2em;
`;
