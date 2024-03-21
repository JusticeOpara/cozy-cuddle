import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { authSlice } from "../auth/auth.slice";
import { cartSlice } from "../cart/cart.slice";
import { productSlice } from "../products/product.slice";

const AllActions = {
  ...authSlice.actions,
  ...productSlice.actions,
  ...cartSlice.actions,
 
};
const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(AllActions, dispatch);
};
export default useAction;
