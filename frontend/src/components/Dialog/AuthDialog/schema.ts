import * as yup from "yup";
import { LOGINACCOUNT } from "../../../constants";

export const schema = (type: string) => {
    switch (type) {
      case LOGINACCOUNT:
        return yup.object({
          email: yup.string().required("Campo obrigatório"),
          password: yup.string().min(6, "Mínimo de 6 caractéres"),
        });
      default:
        return yup.object({
          name: yup.string().min(3, "Mínimo de 3 caractéres"),
          surname: yup.string().min(3, "Mínimo de 3 caractéres"),
          email: yup.string().required("Campo obrigatório"),
          password: yup.string().min(6, "Mínimo de 6 caractéres"),
          confirmpassword: yup.string().min(6, "Mínimo de 6 caractéres"),
        });
    }
  };