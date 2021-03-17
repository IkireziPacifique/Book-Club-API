import express from "express";
import { addRecord, viewRecord, viewAllRecord, updateRecord, viewMemberRecord } from '../controllers/borrowController.js'
import { authenticate } from '../middlewares/auth.js';

const borrowRouter = express.Router();

// Create Record borrow/
borrowRouter.post("/", authenticate, addRecord);

// View Record borrow/:id
borrowRouter.post("/", authenticate, viewRecord);

// View all records borrow/
borrowRouter.post("/", authenticate, viewAllRecord);

// Update borrowing record borrow/
borrowRouter.post("/", authenticate, updateRecord);

// View Member Borrowings borrow/bymember/:memberid
borrowRouter.post("/", authenticate, viewMemberRecord);


export default borrowRouter;



