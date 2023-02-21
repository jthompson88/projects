import { mocks } from "./mock";
import { camelize } from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return 1;
  });
  console.log(mappedResults);

  return results;
};
restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(restaurantsTransform);
  })
  .catch((err) => {
    console.log("error");
  });
