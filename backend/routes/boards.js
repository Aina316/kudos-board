const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const boards = await prisma.boards.findMany();
  console.log(pets);
  res.json(boards);
});

router.get("/:boardId", async (req, res) => {
  const boardId = parseInt(req.params.boardId);
  const board = await prisma.boards.findUnique({
    where: { id: parseInt(boardId) },
  });
  console.log(board);
  res.json(board);
});

router.post("/", async (req, res) => {
  const { title, category, author, image, cards } = req.body;
  const newBoard = await prisma.boards.create({
    data: {
      title,
      category,
      author,
      image,
      cards,
    },
  });
  res.json(newBoard);
});
