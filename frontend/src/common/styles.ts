import styled from "@emotion/styled";
import { Box } from "@mui/system";

interface ContainerProps {
  justify?: string;
  align?: string;
  fitcontent?: boolean;
}

interface ImageProps {
  width?: string;
}

export const ColumnContainer = styled(Box)<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
`;

export const RowContainer = styled(Box)<ContainerProps>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  width: 100%;
`;

export const Image = styled.img<ImageProps>`
  width: ${({ width }) => (width ? width : "40px")};
  margin: 0 10px;
  border-radius: 5px;
`;

export const Background = styled(Box)`
  width: 100%;
  height: 100vh;
  background-color: #263a5f;
`;
