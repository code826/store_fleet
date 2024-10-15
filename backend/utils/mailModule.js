import nodemailer from 'nodemailer';
import dotenv from "dotenv";
import path from "path"
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const configPath = path.resolve(__dirname,"..","config", "uat.env");

dotenv.config({ path: configPath });



const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
     //service:'Gmail',
    auth:{
        user:process.env.STORFLEET_SMPT_MAIL,
        pass:process.env.STORFLEET_SMPT_MAIL_PASSWORD
    }
});
let mailOptions = {
    from :process.env.STORFLEET_SMPT_MAIL
}

export async function sentMail(to,subject,text = '',html = ''){
     //check
    mailOptions['to'] = to;
    mailOptions['subject'] = subject;
    if(text){
        mailOptions['text'] = text;
    }
    if(html){
        mailOptions['html'] = html;
    }
      
    let info = await transporter.sendMail(mailOptions);
    console.log('info',info);
    // transporter.sendMail(mailOptions,(err,info) =>{
    //     if(err){
    //         console.log('error',err);
    //         throw new Error
    //         return;
    //     }
    //     console.log('Message sent',info.response);
    // });
}