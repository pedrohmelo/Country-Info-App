import express from "express";

import { router } from "./router/router.js";

const app = express();
app.use(router);

const port = 3003;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
