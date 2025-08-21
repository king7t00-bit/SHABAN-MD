const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUhnWGJQNUt4eEsrbnZPNWcwWmR2VlFXNmtZMytLQzlHK3g2UWxXdzJrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREY4aXJTQUtqdENZRFVRK3ZlQTFaVTNLL28vK0ZmbzQrelBSdjFHd2Z4VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRWNzazNqOTEzTnU0MG91T3RkcGQyRkczTFZmWmxTaEtoTFVHaUU0VjBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1MHd4SVM2SVVaNWlnVmVXZHZRNWI3M1g5NjBUeXIzOVVMV1gvZFJrcVVZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRCV0tBT3FwVTh6RzNpZ1g5cTJkTlR5d2dUZG14VTJ5THppT0orMEVMM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5OdGE0Rm5zM2FFM1Vyc1EwcFpFR0RMbXpIWWlpSzZScGdTc0NMQ1ppMGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtvTHl6NWtuSUlEK2ZwblEvcm5oMTMyZ1NkKzQ4RWlBRzlaeFdncW1FRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2Npc1hLZ2h1MzNKZmVQSTFzaHRNZkgyQTNPbS91K3Vuc0tFMFhzMU4yST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp3dmI1Q09NSmpkMHZIcUJKME5PNnpSMXluMFV2T1VwWERwYk5jYkloVUl1ZS9pbDZQMDJrai95K2FOd3FqWUUwNjMrNTNzNEEwSDQzZUx0bWdEVWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMzLCJhZHZTZWNyZXRLZXkiOiJYNFpROEZSOUs5SFVUN1lXSE04MVhWaDFxcENzWXBOdUFpMkFocm1UeHJvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJQOFJFNUQxNCIsIm1lIjp7ImlkIjoiOTIzMjUyNzQ1NDk5OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMzExMTc0MzI3MDUyMTA6MUBsaWQiLCJuYW1lIjoi4pqg77iPIE3JlM2hzZzGnnPKiOKDnsmczZzMvcm9IEfJqs2hzZzKgMqfIOKYhyDwn5KAIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQNkJqYzhDRVBUeW1zVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJadWp6RGY4dkdQcDBUb1VidXJEREo1V0NXZWJBSEVQUWcvZW50MWJUUEJBPSIsImFjY291bnRTaWduYXR1cmUiOiJuK3VwajI1c3NrQkhSdkprN0p1djJqcWZyMlhZVHNYTThIcC9OUng1Mm1ONmFZZEY3Z0ViN3dEY0xHM1B0WFNPRnpvSy9ONTBReUJ0b0VOcC8xZUlEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiamhPSS9Uc1F5U0ZNQURUMzdMYmJib2VWUDBCOFl4MWNVWXZWNUxKU1ZLSS91c1JkU2NrNzZrZ0kwNDJlNkhKYno3WmR4a2JoOTZhNndmU05rVzdhZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyNTI3NDU0OTk6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXYm84dzMvTHhqNmRFNkZHN3F3d3llVmdsbm13QnhEMElQM3A3ZFcwendRIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU3NTY5MjAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3UrIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "👑 ,🥀 ,🌹,💐,🌼,🍁, 🌱, 🌈, 🌝,🌛,🎏, 🎉, 💥, ✨,🎋,🏆,🎯 ,⏳, 🎼 ,🚀 ,🛳️, 🚀 ,🌺,🪂 🏄,🍀, 👑 💚,😍,🥰,💝,💖,💗,💓,💞,💕,❣️,💘,💟,🖤,🤎,💜,💫,🌸,💫,☹️,👑,💖,✨,✅,🎋,🌷,💐, 🌼,🌈,🥀,🦜, 🦚,🍒, 🍓, 🍭,🏍️,🌾,🌞,🌻,🌜,🌛,🌝,🌞, 😻, 🌈, 🥀,🔥,💥,🌟,⚡,✨,☀️,❄️,🫧,💦,🍇,🍼,🥎,🏏,🥊,🥋,🎗️,🎲,🎯,🚀🌺,🪂,🏄,🍀,🎁,🎈, 🎂,🎈,📝,🥇,🎊,🕳️,🎀,📒,💔,〽️,🇵🇰",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923059395959",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923043788282",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
