import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { getCertificates } from "./MOCK-CERTIFICATES.js";

var app = express();
app.use(cors());

var port = process.env.PORT || 5000;
const router = express.Router();

router.get("/certs", function (req, res) {
  res.json(getCertificates());
});

// Iniciar servidor
app.use('/.netlify/functions/server', router);
export const handler = serverless(app);
// app.listen(port);