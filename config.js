const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348108138389";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_14_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIxLFxuICAgICAgICA2MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDU1LFxuICAgICAgICA0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDM2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMCxcbiAgICAgICAgODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEzLFxuICAgICAgICA5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA1LFxuICAgICAgICA1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgODAsXG4gICAgICAgIDMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkyLFxuICAgICAgICA0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDY2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExLFxuICAgICAgICAxODYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDI5LFxuICAgICAgICA2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc0LFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpabjBPNjY4Rjg5TTh2QWVuUitJbFkrYTRyOHZCVDBzV1NpV3R5VThUdlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImI1TU03Z2JBVG11VHFkV0dXX2FkWndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWZjNGE3ZmItYmEyNi00Y2E4LWFlYTEtZjcyYzUxY2Y2NmE4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMjMyLFxuICAgICAgMTMyLFxuICAgICAgNjEsXG4gICAgICAzNixcbiAgICAgIDk4LFxuICAgICAgMCxcbiAgICAgIDEwLFxuICAgICAgMTksXG4gICAgICAxMTgsXG4gICAgICAxOSxcbiAgICAgIDE2MixcbiAgICAgIDE4LFxuICAgICAgMjE3LFxuICAgICAgNixcbiAgICAgIDEsXG4gICAgICA5MixcbiAgICAgIDAsXG4gICAgICAxNTgsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDE0NSxcbiAgICAgIDczLFxuICAgICAgMTU3LFxuICAgICAgNTcsXG4gICAgICA1MCxcbiAgICAgIDI0LFxuICAgICAgMTY4LFxuICAgICAgMjQ0LFxuICAgICAgOTcsXG4gICAgICAxNzksXG4gICAgICAxMDIsXG4gICAgICAxNjksXG4gICAgICAxMDAsXG4gICAgICAyMTEsXG4gICAgICAxMjcsXG4gICAgICA3MSxcbiAgICAgIDcsXG4gICAgICAxMjQsXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHOEFHMUozUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwODEzODM4OToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1yIEVKIChIZWFkIEFkbWluKVwiLFxuICAgIFwibGlkXCI6IFwiMjgwMDYzNzQ5NzUwODoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMVzdpcnNDRU1QQjlyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZYaXN2TnFuQStRalE2ZDJJWkY0Y0k2aGpwQ2JDUnIyRjZCODc4U2hoVDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicU03bjNxdHRuYnpzZHBtMHBDWjE2UzNVU1o2bkkrK0VhSVRkQy9tODduSzZIWmFYVHZ2TVpLeGZscjF5bnpzem8vWFpYZ01RU2ZXdllNSjNxK014Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRXM5RVk1WVMxQjBaZ3dJdEwyZ2pydXRPVGJ4TmxVZjBpUnd4MFdhSXB0Z2x6SFNZM0h2djQ4eFVjajcxb01NcnRYQUdyWUEwM2pJL3JVWkFEVS9HZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwODEzODM4OToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQxODkyNTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJVDBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlUMC5qc29uIjogIntcImtleURhdGFcIjpcIkFMZGxIUllLSGpHR2hFK0EwbkNzRy9KRmhad1hhcWlRaGRnblF2RlhDMzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjYwNzc0MzI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
