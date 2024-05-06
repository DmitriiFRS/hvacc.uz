import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");
const email = process.env.MAIL_USER;
const pass = process.env.MAIL_APP_PASS;

export async function POST(req: NextRequest) {
   try {
      const { name, tel, question, town, mail, token } = await req.json();

      const googleRes = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY_RECAPTCHA}&response=${token}`, {
         method: "POST",
         headers: {
            "Content-Type": "application/x-www-form-urlencoded",
         },
      });

      const data = await googleRes.json();
      if (!data.success && data?.score < 0.5) {
         return NextResponse.json({ message: "Failed reCaptcha verification" }, { status: 400 });
      }

      const transporter = nodemailer.createTransport({
         service: "gmail",
         host: "smtp.gmail.com",
         port: 465,
         secure: true,
         auth: {
            user: email,
            pass: pass,
         },
      });
      const mailOption = {
         from: email,
         to: "Barrakud3@gmail.com",
         subject: `Request from ${name} | hvacc.uz`,
         html: `
         <h2>Имя: ${name}</h2>
         <h3>Номер телефона: ${tel}</h3>
         <h3>Город: ${town}</h3>
         <h3>Email: ${mail}</h3>
         <h3>Вопрос: ${question}</h3>
      `,
      };
      await transporter.sendMail(mailOption);
      return NextResponse.json({ message: "email send seccess" }, { status: 200 });
   } catch (err: any) {
      console.log(err);
      return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
   }
}
