import { createContext } from "react";

export type UserState = typeof initialState;

const initialState = {
  firstName: "David",
  lastName: "Kecskemeti",
};

const context = createContext<typeof initialState>(initialState);

export default context;
