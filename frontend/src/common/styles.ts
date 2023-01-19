import styled from "@emotion/styled";
import { Box } from "@mui/system";

interface ContainerProps {
  alignTop?: boolean;
}

export const Container = styled(Box)<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ alignTop }) => (alignTop ? "flex-start" : "center")};
  align-items: center;
  padding: 1em;
`;

export const CenterContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Background = styled(Box)`
  width: 100%;
  height: 100vh;
  background-color: #263a5f;
`;
