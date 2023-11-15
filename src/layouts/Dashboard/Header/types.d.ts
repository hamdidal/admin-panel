export type HeaderProps = {
  user: UserModel;
  logOut: React.MouseEventHandler<HTMLDivElement> | undefined;
};

export interface ChangePasswordValue {
  oldPassword: string;
  newPassword: string;
}
