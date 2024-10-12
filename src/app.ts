import express from "express";
import router from "~/routes";
import setupSwagger from "~/configs/swagger";

const app = express();

app.use(express.json())
app.use('/api', router)

setupSwagger(app)

export default app;
