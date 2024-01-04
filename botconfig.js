module.exports = {
  Admins: ["UserID", "UserID"], //DEV'S
  ExpressServer: true, 
  DefaultPrefix: process.env.Prefix || "/",
  Port: 1922, //Which port website gonna be hosted
  SupportServer: "https://discord.io/sciencegear", // Support Server Link
  Token: process.env.Token || "MTE5MjQwNDc2NzkzNTMxMTk1Mw.Gr8WCn.hbpT3DSJuL4ZUXmaS4sTHFbXDjPhNN2CAYm7z4", // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1192404767935311953", 
  ClientSecret: process.env.Discord_ClientSecret || "JUV8tx2wzocl6sqRdmu_kwBxPKOYnjuP", 
  Scopes: ["identify", "guilds", "applications.commands"],
  ServerDeafen: true, 
  DefaultVolume: 100,
  CallbackURL: "/api/callback", 
  "24/7": false,
  CookieSecret: "Pikachu is cute",
  IconURL:
    "https://media.tenor.com/sce9SDRey4EAAAAi/disc.gif",
  EmbedColor: "RANDOM", 
  Permissions: 2205281600, 
  Website: process.env.Website || "http://127.0.0.1/",

  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Shhhh!Sus", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  Lavalink: {
    id: "Main",
    host: "lavalink1.albinhakanson.se", 
    port: 1141, 
    pass: "albinhakanson.se", 
    secure: false, 
    retryAmount: 200, 
    retryDelay: 40, 
  },
  
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "ef1c598c52f044c3ba5fc6d596be5e70", 
    ClientSecret: process.env.Spotify_ClientSecret || "0761a1d57a3349cc931176519492503b", 
  },


 

};
