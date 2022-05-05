import { Auth } from "interfaces/User";
import { createContext } from "react";

export const UserContext = createContext<Auth>({
  fName: "",
  lName: "",
});
