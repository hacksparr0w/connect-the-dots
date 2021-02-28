import createRandomGilbertGraph from "./createRandomGilbertGraph";

const createRandomConnectedHilbertGraph = (n, p) => {
  const [nodes, links] = createRandomGilbertGraph(n, p);

  const filtered = nodes
    .filter(({ id }) => (
      links.some(({ source, target }) => source === id || target === id)
    ));

  return [filtered, links];
};

export default createRandomConnectedHilbertGraph;
