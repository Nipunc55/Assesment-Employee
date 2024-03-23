import express, { Request, Response } from "express";
import mainRoutes from "./routes";
import connection from "./db/db";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";




const app = express();
const PORT = process.env.PORT || 3000;

//midlewara setup
app.use(cors());

app.use(
  morgan(
    ":date[iso] :method :url :status :response-time ms - :res[content-length]"
  )
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
///

app.use("/", mainRoutes);

connection.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
