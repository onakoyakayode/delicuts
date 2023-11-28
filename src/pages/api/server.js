// import express, { Request, Response } from "express";
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.get("/api/server", async (req, res) => {
  try {
    const { selectedItems, totalPrice } = req.body;

    const message = `Your order (${selectedItems.length} items) total: $${totalPrice}`;

    const response = await axios.post(`https://wa.me/message/HFG2OHGUQ3HNE1`, {
      message,
    });

    res.status(200).send({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending Whatsapp message:", error);
    res.status(500).send({ error: "Failed to send Whatsapp message" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello, this is the server");
  const { selectedItems, totalPrice } = req.body;
  res.send(`(${selectedItems} items) total:${totalPrice}`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
