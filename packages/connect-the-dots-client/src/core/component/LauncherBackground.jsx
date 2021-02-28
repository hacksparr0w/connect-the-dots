import { makeStyles } from "@material-ui/core";
import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation
} from "d3-force";

import { select } from "d3-selection";
import React, { useCallback, useEffect, useState } from "react";

import { createRandomConnectedGilbertGraph } from "../../graph";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    zIndex: -1
  },
  svg: {
    width: "100%",
    height: "100%"
  }
}));

const LauncherBackground = () => {
  const classes = useStyles();

  const [svg, setSvg] = useState();
  const ref = useCallback(node => setSvg(node), []);

  useEffect(() => {
    if (!svg) {
      return;
    }

    const { width, height } = svg.getBoundingClientRect();

    const [nodes, links] = createRandomConnectedGilbertGraph(100, 0.01);

    const link = select(svg)
      .append("g")
        .attr("stroke", "#2196f3")
        .attr("stroke-opacity", 0.4)
      .selectAll("line")
      .data(links)
      .join("line")
        .attr("stroke-width", 1);

  const node = select(svg)
    .append("g")
    .selectAll("circle")
    .data(nodes)
    .join("circle")
      .attr("r", 3)
      .attr("fill", "#2196f3")
      .attr("fill-opacity", 0.6);

  const simulation = forceSimulation()
    .nodes(nodes)
    .alphaDecay(0)
    .force("link", forceLink(links).id(({ id }) => id).distance(() => 500))
    .force("charge", forceManyBody().strength(-10))
    .force("center", forceCenter(width / 2, height / 2).strength(1))
    .force("collide", forceCollide())
    .on("tick", () => {
      link
        .attr("x1", ({ source: { x } }) => x)
        .attr("y1", ({ source: { y } }) => y)
        .attr("x2", ({ target: { x } }) => x)
        .attr("y2", ({ target: { y } }) => y);

      node
        .attr("cx", ({ x }) => x)
        .attr("cy", ({ y }) => y);
    });

    return () => simulation.stop();
  }, [svg]);

  return (
    <div className={classes.root}>
      <svg ref={ref} className={classes.svg} />
    </div>
  );
};

export default LauncherBackground;
