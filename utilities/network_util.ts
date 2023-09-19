import { APIBASEURL } from "../consts/const";
import { Products } from "../models/productModel";

export async function fetchAllProducts() {
  const path = "/products";
  const result = await fetch(APIBASEURL + path);
  const res:Products[] = await result.json();
  return res;
}
