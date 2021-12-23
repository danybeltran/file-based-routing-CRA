const path = require("path")
const fs = require("fs")
//joining path of directory
const directoryPath = path.resolve(path.join(__dirname, "src/pages"))

function resolvePath(...segments) {
  return path.resolve(path.join(...segments))
}

function getPages() {
  let pagesString = []
  function readFolderPages(dir) {
    fs.readdir(dir, (err, folderFiles) => {
      folderFiles.map((pageFileName) => {
        // Check if string ends with param1
        const endsWith = (extension) => pageFileName.endsWith(extension)

        // When item is not a folder
        if (endsWith(".tsx") || endsWith(".jsx") || endsWith(".js")) {
          let fullPagePath = `/pages/${
            `${dir}/${pageFileName}`.replaceAll("\\", "/").split("/pages/")[1]
          }`.replace(/(.tsx|.jsx|.js)/g, "")

          if (pageFileName.split(".")[0] === "index") {
            pagesString.push(
              `"${
                fullPagePath.replace("/pages", "").split("/index")[0]
              }": require(".${fullPagePath
                .replace(".", "")
                .replace(/(.tsx|.jsx|.js)/g, ".js")}").default,`
            )
            pagesString.push(
              `"${
                fullPagePath.replace("/pages", "").split("index")[0]
              }": require(".${fullPagePath
                .replace(".", "")
                .replace(/(.tsx|.jsx|.js)/g, ".js")}").default,`
            )
          }
          pagesString.push(
            `"${fullPagePath.replace("/pages", "")}": require(".${fullPagePath
              .replace(".", "")
              .replace(/(.tsx|.jsx|.js)/g, ".js")}").default,`
          )
        } else {
          // Go through folder files again
          readFolderPages(resolvePath(dir, pageFileName))
        }
        return null
      })
    })
  }
  readFolderPages(directoryPath)
  return pagesString
}

let pages = getPages()
setTimeout(() => {
  fs.writeFileSync(
    path.resolve(__dirname, "./src/$pages.js"),
    `const pages = {
    ${pages.join("\n\t")}
};
export default pages;
`
  )
  console.log("Pages mapped")
}, 1000)
