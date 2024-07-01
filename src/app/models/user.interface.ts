export interface IUser {
  id: number;
  avatar_url: string;
  login: string;
  type: string;
  html_url: string;
}

export interface IUserResponse {
  items: IUser[]
}
