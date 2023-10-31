import {Router} from "express"
import { createRecord, deleteRecord, readRecordByDept, readRecordByID, updateRecord, readRecord} from "../Controller/RecordController"

const router: Router = Router()

router.route("/create-record").post(createRecord);
router.route("/read-record").get(readRecord);
router.route("/read-record-id/:studentId").get(readRecordByID);
router.route("/read-record-dept").get(readRecordByDept);
router.route("/update-record/:studentId").patch(updateRecord);
router.route("/delete-record/:studentId").delete(deleteRecord);

export default router;