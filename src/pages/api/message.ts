import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "onakoyakayode@gmail.com",
    pass: "fxohxgqxzitufdeb",
  },
});

export default async function contactHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { selectedItems, totalPrice } = req.body;

    const mailOption = {
      from: `"Onakoya Kayode" <onakoyakayode@gmail.com>`,
      to: "onakoyakayode@gmail.com",
      subject: `Order Confirmation - ${selectedItems} with total price: ${totalPrice}`,
      text: `Order Details:\n\nSelected Items: ${JSON.stringify(
        selectedItems
      )}\nTotal Price: ${totalPrice}`,
    };

    try {
      await transporter.sendMail(mailOption);

      res.status(200).send({ message: "Order sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ error: "Failed to send email" });
    }
  } else {
    res.status(405).end();
  }
}
