import styled from "@emotion/styled";
import { Box } from "@mui/system";

interface ContainerProps {
  justify?: string;
  fitContent?: boolean;
}

export const ColumnContainer = styled(Box)<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: center;
  padding: 1em;
`;

export const RowContainer = styled(Box)<ContainerProps>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: center;
  width: ${({ fitContent }) => (fitContent ? "fit-content" : "100%")};
`;

export const Image = styled.img`
  width: 40px;
  margin: 10px;
`;

export const Background = styled(Box)`
  width: 100%;
  height: 100vh;
  background-color: #263a5f;
`;
