const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.get("/:boardId", async (req, res) => {
  const boardId = parseInt(req.params.boardId);
  const cards = await prisma.card.findMany({
    where: { boardId },
  });
  res.json(cards);
});

router.post("/:boardId", async (req, res) => {
  const { title, description, gif } = req.body;
  const boardId = parseInt(req.params.boardId);
  const cards = await prisma.card.findMany();

  const card = await prisma.card.create({
    data: {
      title,
      description,
      gif,
      board: { connect: { id: boardId } },
    },
  });
  res.status(202).json(card);
});

router.delete("/:cardId", async (req, res) => {
  const cardId = parseInt(req.params.cardId);
  await prisma.card.delete({
    where: { id: cardId },
  });
  res.json({ message: `Card ${cardId} deleted.` });
});

module.exports = router;
