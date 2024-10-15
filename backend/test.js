import dotenv from "dotenv";
import path from "path"
const configPath = path.resolve("backend", "config", "uat.env");
dotenv.config({ path: configPath });

import { sentMail } from "./utils/mailModule.js"



async function init() {
   try {
    let data = await  sentMail('sumitchahal01746@gmail.com','test-check','hii just cn');
    console.log('data',data);
} catch (error) {
    console.log('error',error);
   }
}

init();