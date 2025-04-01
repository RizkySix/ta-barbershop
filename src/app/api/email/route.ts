import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { FormData } from "./param";
import { EmailTemplateAdmin, EmailTemplateBooker } from "./template";


export async function POST(request: NextRequest) {
  const { email, name, full_data }: FormData = await request.json();
  
  const transport = nodemailer.createTransport({
    
    host: "mail.mastersilverclass.com",
    port: 465,
    secure: true,
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptionsAdmin: Mail.Options = {
    from: process.env.EMAIL_USERNAME,
    to: "silvermasterclass8@gmail.com",
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Booking confirmation from ${email}`,
    html: EmailTemplateAdmin(full_data)
  };

  const mailOptionsBooker: Mail.Options = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Master Silver Class Booking Success Confirmation`,
    html: EmailTemplateBooker(full_data)
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      //send to admin
      transport.sendMail(mailOptionsAdmin, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });

      //send to booker
      transport.sendMail(mailOptionsBooker, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });

    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "success" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
