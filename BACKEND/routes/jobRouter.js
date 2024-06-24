import express from "express";
import { getAllJobs, getMyJobs, postJob,updateJob ,deleteJob} from "../controllers/jobController.js";
import {isAuthorized} from "../middlewares/auth.js"

const router = express.Router();

router.get("/getall" , getAllJobs);
router.post("/post",isAuthorized, postJob);
router.get("/getmyjobs",isAuthorized, getMyJobs);
router.put("/update/:id",isAuthorized, updateJob); //which one u want to update
router.delete("/delete/:id",isAuthorized, deleteJob);

export default router;