const pages = {
  "/about": require("./pages/about").default,
  "": require("./pages/index").default,
  "/": require("./pages/index").default,
  "/index": require("./pages/index").default,
  "/profile": require("./pages/profile/index").default,
  "/profile/": require("./pages/profile/index").default,
  "/profile/index": require("./pages/profile/index").default,
  "/profile/nested": require("./pages/profile/nested").default,
  "/profile/settings": require("./pages/profile/settings").default,
  "/profile/level/level/nested": require("./pages/profile/level/level/nested")
    .default,
}
export default pages
