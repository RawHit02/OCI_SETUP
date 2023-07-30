//import axios from "../lib/axios";
import axios from "axios";

function getProducts(payload: any) : any
{
    axios
    .get("https://dummyjson.com/products", payload)
    .then((response) => {
      //console.log(response);
      return response;
    })
    .catch((error) => {
      //console.log(error);
      return error;
    });
}

export const testService = {
  getProducts,
};
