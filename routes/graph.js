const graphController = require("../controllers/graph");
const express = require("express");
const router = express.Router();
const authCheck = require("./authCheck");

router.get("/", authCheck, graphController.getDescribeGraph);
router.get("/info", authCheck, graphController.getGraphInfo);
router.get("/node/:pubKey", authCheck, graphController.getGraphNode);

module.exports = router;
