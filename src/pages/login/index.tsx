import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useLogin } from "../../utils/hooks/queries/Auth";

import { CustomContainer, CustomPaper, CustomTextBox } from "./index.styled";
import { LoginFormValues } from "./types";
import useAuthStore from "../../context/auth-store";
import { Form } from "../../components/styledComponents/Form";
import TextField from "../../components/styledComponents/Input/TextField/TextField";
import Typography from "../../components/styledComponents/Typography/Typography";
import PasswordInput from "../../components/styledComponents/Input/PasswordInput/PasswordInput";
import Button from "../../components/styledComponents/Buttons/Button/Button";

const LoginPage: React.FunctionComponent = () => {
  const { mutate, data, isSuccess, isError } = useLogin();
  const { setAccessToken, accessToken, setUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data.data.token.accessToken) {
      setAccessToken(data?.data.data.token.accessToken);
      setUser(data.data.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, data?.data.data.token.accessToken]);

  useEffect(() => {
    if (accessToken && isSuccess) {
      setTimeout(() => {
        navigate("/activities");
      }, 300);
    }
  }, [accessToken, isSuccess, navigate]);

  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email("E-mail formatında olmalıdır!")
        .required("E-mail alanı zorunludur!")
        .max(256, "E-mail max 256 karakter olmalıdır!"),
      password: yup
        .string()
        .min(4, "Şifre min 4 karakter olmalıdır!")
        .required("Şifre alanı zorunludur!"),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleLogin = async (e: LoginFormValues) => {
    mutate({ data: e });
  };

  return (
    <CustomContainer>
      <CustomPaper>
        <CustomTextBox>
          <Typography color="rgba(76, 78, 100, 0.87)" variant="h5-semibold">
            Hoş Geldin 👋🏻
          </Typography>
          <Typography
            color="rgba(76, 78, 100, 0.6)"
            variant="body-small-default"
          >
            Kayıtlı e-mail adresin ve şifren ile giriş yapabilirsin.
          </Typography>
        </CustomTextBox>
        <form style={{ width: "100%" }} onSubmit={handleSubmit(handleLogin)}>
          <Form gap="large">
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
                maxLength: 256,
              }}
              render={({ field }) => (
                <TextField
                  expand
                  label="E-mail"
                  onError={errors.email}
                  {...field}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <PasswordInput
                  expand
                  onError={errors.password}
                  inputProps={{ ...field }}
                />
              )}
            />
            <Button
              type="submit"
              disabled={!isValid || isSubmitting || (!isError && isSubmitted)}
              width={"100%"}
              variant="contained"
            >
              GİRİŞ YAP
            </Button>
          </Form>
        </form>
      </CustomPaper>
    </CustomContainer>
  );
};

export default LoginPage;
