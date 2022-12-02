import { Typography } from "@mui/material";
import styled from "styled-components";

interface MenuTypographyContainer {
  selected?: boolean;
}

export const MenuTypography = styled(Typography)<MenuTypographyContainer>`
  padding: 5px 15px;
  font-weight: ${(props) => (props.selected ? "bold" : "500")};
  color: ${(props) => (props.selected ? "#263A5F" : "#c8c8c8")};
`;

export const UnderlinedContainer = styled.div`
  border-bottom: 2px solid #263A5F;
  position: relative;
  top: 2px;
`;
