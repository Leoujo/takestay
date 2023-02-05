import React from "react";
import { FormDialog } from "../../../../common/components/FormDialog";
import { RowContainer } from "../../../../common/styles";

interface Props {
  refetch: () => void;
}
export const NoCoffeeShop: React.FC<Props> = ({ refetch }) => {
  return (
    <RowContainer marginTop="10px">
      <FormDialog type="coffeeShop" refetch={refetch} />
    </RowContainer>
  );
};
