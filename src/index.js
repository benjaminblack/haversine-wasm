import Module from "./haversine.js";

const module = await Module();

const haversine = module.cwrap("haversine", "double", [
  "double",
  "double",
  "double",
  "double",
]);

export { haversine };
