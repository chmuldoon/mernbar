const app = require("./server/server");
// if (process.env.NODE_ENV === "production") {
//   //set static folder
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path, resolve(__dirname, "client", "build", "index.html"));
//   });
// }
app.listen(4000, () => {
  console.log("Listening");
});
