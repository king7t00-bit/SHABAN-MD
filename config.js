const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JxbjBNWFg1Z0c5bnNGSDFsYnRyNm5YeDdjS1A4RlVoa1NpSms2T2cxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVAvU1pneE5MZVEvSUw1RGt6aldFK01EVHE0OHRSK2ppeXNhVk1CQ3VGcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTWxiMVBqOVo0SFpaemxuTjR3R2h2WjAyU1VEWFY1ZDhaL1RCdnNYeDNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRVHA3anNvVEdaemx5RXpPZVJnK25JVkpQeVlNUERwL0hRTW1Hektxb1dZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRKWVV0M3E3WkU3TklDc0tlK0JGcVA4WWM0OXpJeGhIcnNScFBlQUp6RU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhlaktkODE1M3h4VVpaMGFYRjZzZktYL1JiZlh3ZmFGcktOWEYyMGdOaXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUFiUjhBYnpQcUhmT3JncTYyTDdGV1NvaG1nczFQVnRFMjVpa2pTMVkyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV21MUVRIT0xiK1VqUG5DY2xnK0xDTmFFSUhpcTRHWUVlS0srT213akdUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCbWxNU1NtTlRJTCs1N1RMaUE0ekh6d3lkRnB1THRZd3MvcHJnQ0c2V3FrTm1MNmJKZHNQYjVvd1hKVzM0UUFEdWlaQ2ErY01oNWgvQ3dHR0htMER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiJRcC94TFhSTm8vdVpjcGVSUUpjV0RQZ3hLZGd4bUtBc212ZGE5dWZnL1M0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzIyNDkzNjk1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBM0NBOEQ3RDJBOUVDNzA1MUFGOTYzRDJCNDkyNDlBQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1NTkxOTE5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyMjQ5MzY5NThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkY1MzIyNTYyNDZBRjUzNUZDRjg2NzlFMTk1RDlFQTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTU5MTkyMH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiOEFaM0VUVkwiLCJtZSI6eyJpZCI6IjkyMzIyNDkzNjk1ODo4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTkyNjgxNDc3MTg5NzcxOjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKTGh4T01ERU9qcGtNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGemxTQlFkanl6ckF6dmQ4Y3R5b2hJR2tzSDFQMWU3MEpmNEtLdVdpb1N3PSIsImFjY291bnRTaWduYXR1cmUiOiJiV1VDa1M1ZGQ2a3BMd0U4Q29XM3BYVEtIVUV2SDU0NVc4SnE5Z1BBZlhWS29EMmhKUktCQ1dJMVRiN2xyQnY5eG9IK0dkdlBsWnZONzYyMExxZnlCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaSsxREViTWMzMC81RHlHbENqZ1UrVGZRTFNlV1JOT1BBZ0NpSDdMWkR3ZmVoTXFYZEU5NlVlR1Rvd0RKSkNnTzRPMnBzbFNBYWY5TGhJdVF1UmM1QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyMjQ5MzY5NTg6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSYzVVZ1VIWThzNndNNzNmSExjcUlTQnBMQjlUOVh1OUNYK0NpcmxvcUVzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU1OTE5MTcsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR3haIn0=",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/dbiekr.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "S͢ᴀʀᴋᴀʀ ➳ ♥️ V5",
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
OWNER_NAME: process.env.OWNER_NAME || "─꯭─̽⃝ N͢ᴏ͜ᴍɪ S͢ᴀʀᴋᴀʀ ➳ ♥️",
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
