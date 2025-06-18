const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const boards = await prisma.boards.findMany();
  if (boards) {
    console.log(boards);
  } else {
    res.status(404).send("Boards not found");
  }
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
  const { title, image, category, author } = req.body;
  const boards = await prisma.boards.findMany();
  const newBoard = await prisma.boards.create({
    data: {
      id: boards.length + 1,
      title,
      image,
      category,
      author,
    },
  });
  res.json(newBoard);
});

router.delete("/:boardId", async (req, res) => {
  const boardId = parseInt(req.params.boardId);

  await prisma.boards.delete({
    where: { id: boardId },
  });
  res.json({ message: `Board ${boardId} deleted!` });
});
module.exports = router;
