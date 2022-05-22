import Module from "./haversine.js";

const wasmModule = Module().then((module) => {
  const wasmHaversine = module.cwrap("haversine", "double", [
    "double",
    "double",
    "double",
    "double",
  ]);

  return { wasmHaversine };
});

async function haversine(th1, ph1, th2, ph2) {
  const { wasmHaversine } = await wasmModule;
  return wasmHaversine(th1, ph1, th2, ph2);
}

export { haversine };
