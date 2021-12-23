const pages = {
  "/about": require("./pages/about").default,
  "": require("./pages/index").default,
  "/": require("./pages/index").default,
  "/index": require("./pages/index").default,
  "/user/profile": require("./pages/user/profile").default,
  "/user/:id": require("./pages/user/[id]").default,
}
export default pages
