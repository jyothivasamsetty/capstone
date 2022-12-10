function _1(md){return(
md`# Example Components

This notebook contains shared utilities for [D3 charts](/collection/@d3/charts).`
)}

function _name(Inputs){return(
Inputs.text({label: "Name", value: "ExampleChart"})
)}

function _3(howto,name){return(
howto(name, {open: true})
)}

function _4(howto,name){return(
howto(name, {open: true, specifier: "@d3/example", imports: {d3: "d3", d3Sankey: "d3-sankey"}})
)}

function _currentSpecifier()
{
  const {pathname} = new URL(document.baseURI);
  return pathname.slice(pathname.startsWith("/d/") ? 3 : 1);
}


function _howto(currentSpecifier,htl,md,Inputs){return(
function howto(name, options = {}) {
  if (typeof options === "string") options = {specifier: options};
  const {open, imports = {d3: "d3"}, specifier = currentSpecifier} = options;
  if (!name) throw new Error("missing name");
  return htl.html``;
}
)}

function _7(altplot){return(
altplot(`Plot.barY(alphabet, {x: "letter", y: "frequency"}).plot()`, {open: true})
)}

function _altplot(htl,md,Inputs){return(
function altplot(code = "", {open} = {}) {
  return htl.html``;
}
)}

function _linkplot(htl,md){return(
function linkplot(link = "", {open, title} = {}) {
  return htl.html``;
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof name")).define("viewof name", ["Inputs"], _name);
  main.variable(observer("name")).define("name", ["Generators", "viewof name"], (G, _) => G.input(_));
  main.variable(observer()).define(["howto","name"], _3);
  main.variable(observer()).define(["howto","name"], _4);
  main.variable(observer("currentSpecifier")).define("currentSpecifier", _currentSpecifier);
  main.variable(observer("howto")).define("howto", ["currentSpecifier","htl","md","Inputs"], _howto);
  main.variable(observer()).define(["altplot"], _7);
  main.variable(observer("altplot")).define("altplot", ["htl","md","Inputs"], _altplot);
  main.variable(observer("linkplot")).define("linkplot", ["htl","md"], _linkplot);
  return main;
}
