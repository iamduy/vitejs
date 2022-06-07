import loading from "@redux/slices/loading";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ loading });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
