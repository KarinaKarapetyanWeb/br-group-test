import useAppDispatch from "./use-app-dispatch";
import { bindActionCreators } from "redux";
import allActionCreators from "../store/action-creators";

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
