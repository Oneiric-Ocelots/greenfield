import axios from "axios";
import { baseUrl } from "../../api/config";

const getFilteredReviewsList = ([rating, actionType, productID]) => {
  return dispatch => {
    return axios
      .get(baseUrl + `reviews/${productID}/list?count=10000`)
      .then(({ data }) => {
        let filteredList = [];
        if (Array.isArray(rating)) {
          rating.map(ratingNum => {
            data.results.forEach(review => {
              if (Number(review.rating) === Number(ratingNum)) {
                filteredList.push(review);
              }
            });
          });
        } else {
          data.results.forEach(review => {
            if (Number(review.rating) === Number(rating)) {
              filteredList.push(review);
            }
          });
        }
        data.results = filteredList;
        return data;
      })
      .then(data => {
        dispatch({
          type: actionType,
          payload: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export default getFilteredReviewsList;
