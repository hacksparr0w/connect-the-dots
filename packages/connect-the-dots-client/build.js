const ESBuild = require("esbuild");

const environment = process.env.NODE_ENV || "development";
const production = environment === "production";
const config = require(`./config.${environment}.json`);

const buildOptions = {
  entryPoints: ["src/index.jsx"],
  outfile: "build/index.js",
  bundle: true,
  minify: production,
  sourcemap: production,
  define: {
    "process.env.CONFIG": JSON.stringify(config),
    "process.env.NODE_ENV": `"${environment}"`
  }
};

const serveOptions = {
  servedir: "./build",
  port: 8080
};

if (production) {
  ESBuild.build(buildOptions);
} else {
  ESBuild.serve(serveOptions, buildOptions);
}
