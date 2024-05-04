import { Book } from "../models/book.model.js";

export const addBook = async (req, res, next) => {
  const { title, author, publishYear } = req.body;
  try {
    const book = await Book.create({
      title,
      author,
      publishYear,
    });
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

export const allBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

export const getBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

export const editBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id);
    if (!book) {
      res.status(404).json("Book not found");
    }
    const edittedBook = await Book.findById(id);
    res.status(200).json(edittedBook);
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      res.status(404).json("Book not found");
    }
    res.status(200).json("Book deleted");
  } catch (error) {
    next(error);
  }
};
