import { IRoute } from "@types";
import HomePage from "@pages/Auths/Home";
import UsersManage from "@pages/Auths/Users";
import Login from "@pages/UnAuths/Login";
import Register from "@pages/UnAuths/Register";

export const RoutesConfig: IRoutesConfig = {
  private: [
    {
      path: "/",
      name: "Home Page",
      element: HomePage,
    },
    {
      path: "users",
      name: "Users Page",
      element: UsersManage,
    },
  ],
  public: [
    {
      path: "/",
      name: "Login Page",
      element: Login,
    },
    {
      path: "/login",
      name: "Login Page",
      element: Login,
    },
    {
      path: "/register",
      name: "Register Page",
      element: Register,
    },
  ],
};

interface IRoutesConfig {
  private: IRoute[];
  public: IRoute[];
}

export const privateRoutes = ["/"];
