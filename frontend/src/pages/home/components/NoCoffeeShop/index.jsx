import React from "react";
import { FormDialog } from "../../../../common/components/FormDialog";
import { RowContainer } from "../../../../common/styles";

export const NoCoffeeShop = () => {
  return (
    <RowContainer marginTop="10px">
      <FormDialog type="coffeeShop" />
    </RowContainer>
  );
};
