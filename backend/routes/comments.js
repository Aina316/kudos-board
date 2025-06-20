const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/card/:cardId", async (req, res) => {
  const { cardId } = req.params;

  try {
    const comments = await prisma.comment.findMany({
      where: { cardId: parseInt(cardId) },
      orderBy: { createdAt: "asc" },
    });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

router.post("/card/:cardId", async (req, res) => {
  const { cardId } = req.params;
  const { message, author } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const comment = await prisma.comment.create({
      data: {
        message,
        author: author || null,
        cardId: parseInt(cardId),
      },
    });

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: "Failed to post comment" });
  }
});

module.exports = router;
