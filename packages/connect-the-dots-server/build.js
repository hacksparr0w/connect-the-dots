const ESBuild = require("esbuild");

const environment = process.env.NODE_ENV || "development";
const production = environment === "production";
const config = require(`./config.${environment}.json`);

const buildOptions = {
  entryPoints: ["src/index.js"],
  outfile: "build/index.js",
  platform: "node",
  bundle: true,
  sourcemap: !production,
  define: {
    "process.env.CONFIG": JSON.stringify(config),
    "process.env.NODE_ENV": `"${environment}"`
  }
};

ESBuild.build(buildOptions);
