import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import qs from "qs";
type QueryParams = Record<string, string>;
type SetQueryParams = (param: Record<string, string>) => void;
export const useQueryParams = (): [QueryParams, SetQueryParams] => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = Object.fromEntries(searchParams);
  const setQueryParams = (param: Record<string, string>) => {
    const queryString = qs.stringify(param, {
      addQueryPrefix: true,
    });
    navigate(location.pathname + queryString);
  };
  return [queryParams, setQueryParams];
};
