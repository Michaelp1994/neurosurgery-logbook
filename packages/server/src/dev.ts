import startServer from "./index";
console.log("starting server");
startServer().catch((err) => {
    console.log(err);
});
