import { User } from "../models/User";
import nodemailer from "nodemailer";

export async function sendForgotEmail(user: User, recoveryToken: string) {
    const WEBSITE_URL = process.env.WEBSITE_URL;
    const EMAIL_HOST = process.env.EMAIL_HOST;
    const EMAIL_PORT = process.env.EMAIL_PORT;
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

    if (!WEBSITE_URL) throw Error("Cannot find Website URL for emails.");
    if (!EMAIL_HOST) throw Error("Cannot find EMAIL_HOST for emails.");
    if (!EMAIL_PORT) throw Error("Cannot find EMAIL_PORT for emails.");
    if (!EMAIL_USER) throw Error("Cannot find EMAIL_USER for emails.");
    if (!EMAIL_PASSWORD) throw Error("Cannot find EMAIL_PASSWORD for emails.");

    const transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: parseInt(EMAIL_PORT),
        secure: false, // true for 465, false for other ports
        auth: {
            user: EMAIL_USER, // generated ethereal user
            pass: EMAIL_PASSWORD, // generated ethereal password
        },
    });

    const info = await transporter.sendMail({
        from: '"Neurosurgery Logbook" <foo@example.com>', // sender address
        to: user.email, // list of receivers
        subject: "Your logbook Security Code", // Subject line
        text: "", // plain text body
        html: `<b>Hi ${user.firstName},</b><br /><br /> To reset your password, please follow the <a href='${WEBSITE_URL}/resetPassword/${user.id}/${recoveryToken}'link<b>here<br/><br />`, // html body
    });
    console.log("Message sent: %s", info.messageId);
}
