
## Hello

> a test

This uses the `window.location.pathname` string to get the correct page

Pages should be inside `src/pages` and have a default export. This works with nested pages too.

- This is a test

- There's still no params so there are no dynamic routes.


When you create a page, you need to run the `mapPages.js` file so it gets added. It will generate a `$pages.js` file inside `src/`

```
node mapPages.js
```

It will look something like this (like in this project):

```js
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

```

Routing is similar to the one in Next.js (but this is not very powerful)