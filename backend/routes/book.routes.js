import { Router } from "express";
import {
  addBook,
  allBooks,
  getBook,
  editBook,
  deleteBook,
} from "../controllers/book.controllers.js";

const router = Router();

router.post("/", addBook);
router.get("/", allBooks);
router.get("/:id", getBook);
router.patch("/:id", editBook);
router.delete("/:id", deleteBook);

export default router;
