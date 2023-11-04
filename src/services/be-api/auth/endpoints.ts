import { Request } from "../../_base/";
import { Service } from "../../types";

import { LOGIN_URL } from "./constants";
import { LoginServiceVariables } from "./types";

export const login: Service<LoginServiceVariables> = ({ data }) => {
  return Request.post(LOGIN_URL, data, {});
};
