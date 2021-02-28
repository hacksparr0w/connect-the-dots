const createRandomGilbertGraph = (n, p) => {
  const nodes = [];
  const links = [];

  for (let i = 0; i < n; i += 1) {
    nodes.push({ id: i });

    for (let j = 0; j < i; j += 1) {
      if (Math.random() < p) {
        links.push({ source: i, target: j });
      }
    }
  }

  return [nodes, links];
};

export default createRandomGilbertGraph;
