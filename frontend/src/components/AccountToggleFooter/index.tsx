import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CREATEACCOUNT, DOESNOTHAVEACCOUNT, FORGOTPASSWORD, GOBACK, HAVEACCOUNT, LOGINACCOUNT } from "../../constants";
import { Container } from "../../style/global";

interface AccountToggleFooterProps {
  textColor?: string;
  calledInType: string;
  onClick: (type: string) => void;
}

const displayText = (type: string) => {
  switch (type) {
    case CREATEACCOUNT:
      return DOESNOTHAVEACCOUNT;
    case LOGINACCOUNT:
      return HAVEACCOUNT;
    case FORGOTPASSWORD:
      return GOBACK;
    default:
      return null;
  }
};

const displayLink = (type: string) => {
  switch (type) {
    case CREATEACCOUNT:
      return "Create";
    case LOGINACCOUNT:
      return "Login";
    default:
      return null;
  }
};

export const AccountToggleFooter: React.FC<AccountToggleFooterProps> = ({ textColor, calledInType, onClick }) => {
  const [type, setType] = useState<string>(LOGINACCOUNT);

  useEffect(() => {
    if (calledInType === CREATEACCOUNT) {
      setType(LOGINACCOUNT);
    } else if (calledInType === LOGINACCOUNT) {
      setType(CREATEACCOUNT);
    } else {
      setType(FORGOTPASSWORD);
    }
  }, [calledInType]);
  return (
    <Container>
      <Typography variant="subtitle2" color={textColor ? textColor : "secondary"}>
        {displayText(type)}
      </Typography>
      <Button color="primary" style={{ textTransform: "none" }} onClick={() => onClick(type)}>
        {displayLink(type)}
      </Button>
    </Container>
  );
};
