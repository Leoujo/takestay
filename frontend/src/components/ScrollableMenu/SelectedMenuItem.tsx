import React from "react";
import { MenuTypography, UnderlinedContainer } from "./style";

interface SelectedMenuItemProps {
  text: string;
}

export const SelectedMenuItem: React.FC<SelectedMenuItemProps> = ({ text }) => {
  return (
    <UnderlinedContainer>
      <MenuTypography selected>{text}</MenuTypography>
    </UnderlinedContainer>
  );
};
