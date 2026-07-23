import { createContext } from "node:vm";
import { useContext } from "react";

export const TransitionContextProvider = createContext();
export const useTransitionContext = () => useContext(TransitionContextProvider);
