// Import the necessary modules here

import { sentMail } from "../mailModule.js";

export const sendWelcomeEmail = async (user) => {
  // Write your code here
 const email = user.email;
 const name = user.name;
 const html=`<h1>${name}</h1>`;
  await sentMail(email,'Welcome To StoreFleet',null,html);
};


