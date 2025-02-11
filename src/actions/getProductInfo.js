import axios from "axios";
import { baseUrl } from "../../api/config";

let getProductInfo = productID => {
  //assuming that the url has products/:productID

  return dispatch => {
    return axios
      .get(baseUrl + `products/${productID}`)
      .then(({ data }) => {
        dispatch({
          type: "UPDATE_CURRENT_PRODUCT",
          data
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

export default getProductInfo;
