import { Mutation } from "../types";
import auth from "../../../../services/be-api/auth";
import {
  LoginServiceResponse,
  LoginServiceVariables,
} from "../../../../services/be-api/auth/types";
import { useBaseMutation } from "../_Base";

export const useLogin: Mutation<
  LoginServiceVariables,
  LoginServiceResponse
> = () =>
  useBaseMutation({
    service: auth.login,
    onSuccess: {
      messageDisplay: true,
      message: "Başarılı bir şekilde giriş yapıldı.",
    },
    onLoading: {
      messageDisplay: true,
      message: "Bilgileriniz kontrol ediliyor...",
    },
    onError: {
      messageDisplay: true,
    },
  });
