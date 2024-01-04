module.exports = {
  Admins: ["UserID", "UserID"], //DEV'S
  ExpressServer: true, 
  DefaultPrefix: process.env.Prefix || "/",
  Port: 1922, //Which port website gonna be hosted
  SupportServer: "https://discord.io/sciencegear", // Support Server Link
  Token: process.env.Token || "MTE5MjQ1NzM1Mjc4MDIwMjA0NA.GYoZtL.d_tK1DMSxocEciJbUa-bwXNNnOa1PyllDrg6Ls", // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1192457352780202044", 
  ClientSecret: process.env.Discord_ClientSecret || "GTJhXYjS9YePCgFL3ac0tOW9cLbOcNhf", 
  Scopes: ["identify", "guilds", "applications.commands"],
  ServerDeafen: true, 
  DefaultVolume: 100,
  CallbackURL: "/api/callback", 
  "24/7": true,
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
