import { RootState } from "@redux/reducers";
import { setLoading as setLoadingRedux } from "@redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from "@redux/slices/loading";

export const useLoading = () => {
  const dispatch = useDispatch();
  const loading = useSelector<RootState, Loading>((state) => state.loading);
  const setLoading = (_loading: boolean) => {
    dispatch(setLoadingRedux(_loading));
  };
  return { loading, setLoading };
};
