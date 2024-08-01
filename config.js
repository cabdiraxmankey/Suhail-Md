const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "252684594173";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "684594173";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_21_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDEyLFxuICAgICAgICAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDMsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMixcbiAgICAgICAgODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDkyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExLFxuICAgICAgICA5NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI4LFxuICAgICAgICA0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkxvWlcxeEUveUZnL0pBVGw5aFQ4M0RtZCtnNVBOTmFVTC9FRytTUXdVRzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjUyNjg0NTk0MTczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNzBBMEZDN0VFOEE2QzhDMDhCRDA1QzdCQjIyQ0EzRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIwMTgwOTJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOHNacUJValZTNVNOTnI0VkVjQlAyQVwiLFxuICBcInBob25lSWRcIjogXCJmMzlkMTc2MC1kOGYzLTQ4NTctYmNjMS1mMzAyNTBlN2E0NzdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMsXG4gICAgICAxMTMsXG4gICAgICA0MixcbiAgICAgIDExNixcbiAgICAgIDIyMCxcbiAgICAgIDI1MSxcbiAgICAgIDcxLFxuICAgICAgNDgsXG4gICAgICAxNTcsXG4gICAgICA3MyxcbiAgICAgIDQ0LFxuICAgICAgMzIsXG4gICAgICAxODksXG4gICAgICAxMzMsXG4gICAgICAxNDIsXG4gICAgICAxMzEsXG4gICAgICAxMDAsXG4gICAgICAxNjgsXG4gICAgICAxOTQsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjksXG4gICAgICAxMDMsXG4gICAgICA3OCxcbiAgICAgIDE4LFxuICAgICAgMTgwLFxuICAgICAgMTcsXG4gICAgICAyMyxcbiAgICAgIDE0MixcbiAgICAgIDE1MyxcbiAgICAgIDUxLFxuICAgICAgMjAxLFxuICAgICAgNTgsXG4gICAgICA2NyxcbiAgICAgIDQ5LFxuICAgICAgNzcsXG4gICAgICAxNzYsXG4gICAgICAyMTcsXG4gICAgICAxMzMsXG4gICAgICAyNTIsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNZM05WUFRWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTI2ODQ1OTQxNzM6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTSElRINi52KjYryDYp9mE2LHYrdmF2YZcIixcbiAgICBcImxpZFwiOiBcIjEzMzM0NjQ1MzY0MzM0MDozOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLaVUvNm9IRUo3U2o3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldDdUVXaVRJRXRzVFVxMEhSVWdKQkZFdWM4TTdqRnZLL3J3WEpGeXNjUXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR2dRWitmbVQyMS9ZMGZkRTd1TzYwRjQxU2NIcWRGaDB5ZENVR2MxRjJuNFh1M29QS0MxMnpPY0ZWemF5WG4wSEx2VXBqWXBIUU5ibnBMcXhWeHY0QXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY2hLZW9HOVlNT2Q2WU5CSXl4eVg3a3VRMHVVR3lRK2w3MElJVExma0hUK1AyMWlCSGtrUG56N29wM1VWQjdCWGxibDhZcXNOakVCTGY2K09xYW96Z1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjUyNjg0NTk0MTczOjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjAxODA4OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtlM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2UzLmpzb24iOiAie1wia2V5RGF0YVwiOlwidFdkaFJDZTBVL2E5Snp2UzJnamJoL1kzbkt1VkorUVFNSWdPaDBpdTA0bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTY5MjExOTQ0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIwMTgwOTIzMTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "SHIQ ABDIRAHMAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
