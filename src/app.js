import express from "express";
import routerApi from "../src/routes/_index.js";
import exphbs from "express-handlebars";
import databse from "../src/config/database.js";
import config from "../src/config/config.js";
import swaggerSetup from "../src/config/swagger.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
databse.mongoConnect();
swaggerSetup(app);

app.use(express.static("./public"));
app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: "./src/views/layouts",
    partialsDir: "./src/views/partials",
  }),
  exphbs.create({
    allowedProtoMethods: {
      trim: true,
    },
  })
);
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

routerApi(app);

app.get("/", async (req, res) => {
  res.send("ok-s");
});

console.log(`
  ██████ ▄▄▄█████▓ ▄▄▄       ██▀███  ▄▄▄█████▓   ▓█████▄ ▓█████ ██▒   █▓
▒██    ▒ ▓  ██▒ ▓▒▒████▄    ▓██ ▒ ██▒▓  ██▒ ▓▒   ▒██▀ ██▌▓█   ▀▓██░   █▒
░ ▓██▄   ▒ ▓██░ ▒░▒██  ▀█▄  ▓██ ░▄█ ▒▒ ▓██░ ▒░   ░██   █▌▒███   ▓██  █▒░
  ▒   ██▒░ ▓██▓ ░ ░██▄▄▄▄██ ▒██▀▀█▄  ░ ▓██▓ ░    ░▓█▄   ▌▒▓█  ▄  ▒██ █░░
▒██████▒▒  ▒██▒ ░  ▓█   ▓██▒░██▓ ▒██▒  ▒██▒ ░    ░▒████▓ ░▒████▒  ▒▀█░  
▒ ▒▓▒ ▒ ░  ▒ ░░    ▒▒   ▓▒█░░ ▒▓ ░▒▓░  ▒ ░░       ▒▒▓  ▒ ░░ ▒░ ░  ░ ▐░  
░ ░▒  ░ ░    ░      ▒   ▒▒ ░  ░▒ ░ ▒░    ░        ░ ▒  ▒  ░ ░  ░  ░ ░░  
░  ░  ░    ░        ░   ▒     ░░   ░   ░          ░ ░  ░    ░       ░░  
      ░                 ░  ░   ░                    ░       ░  ░     ░  
                                                  ░                 ░   
 `);

app.listen(config.port_back, () => {
  console.log(`Server running on port ${config.port_back}`);
});
