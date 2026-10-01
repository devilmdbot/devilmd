import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===================== BOT CONFIGURATION =====================
// Fill the blank values below before deployment.
const BOT_NAME = "𒆜𝘿𝙀𝙑𝙄𝙇 𝙓𝙈𝘿𒆜";
const OWNER_NAME = "𓆩𝑿 𝑫𝑬𝑽𝑰𝑳𓆪";
const DEVELOPER_NAME = "𓆩𝑿 𝑫𝑬𝑽𝑰𝑳𓆪";
const OWNER_NUMBER = "917384707086";
const PREFIX = ".";

// Telegram pairing/control bot
const BOT_TOKEN_TELEGRAM = "8911964479:AAHoUKqZbukictmVEs0dUaLPXAolDwZX6_s";
const TG_ADMIN_IDS = ["6710104439","6710104439"];
const TG_CHANNEL_ID = "https://t.me/devilmdbot_123";
const TG_CHANNEL_LINK = "https://t.me/devilmdbot_123";
const TG_GROUP_ID = "-1003704684822";
const TG_GROUP_LINK = "https://t.me/devilx_pair_bot";
const TG_ADMIN_LINK = "t.me/devilhacccker ";

// WhatsApp channel + menu media
const WA_CHANNEL_LINK = "https://whatsapp.com/channel/0029Vb8uAvC3AzNWuJWyu32i";
const WA_CHANNEL_JID = "120363427966350151@newsletter";
const BOT_PIC_URL = "https://files.catbox.moe/gap5wz.jpg";
const MENU_VIDEO_URL = "https://files.catbox.moe/tgyl27.mp4";
const MENU_AUDIO_URL = "https://files.catbox.moe/8jkm48.mp3";

// Optional auto-follow/react targets. Keep blank to disable.
const AUTO_FOLLOW_CHANNEL_JIDS = ["120363406006175992@newsletter","120363386381247164@newsletter","120363426373307688@newsletter","120363427966350151@newsletter"];
const AUTO_REACT_CHANNEL_JIDS = ["120363406006175992@newsletter","120363427966350151@newsletter"];

const SESSION_DIR = path.join(__dirname, "sessions");
const META_FILE = path.join(__dirname, "data", "sessions.json");

const env = {
  BOT_NAME, OWNER_NAME, DEVELOPER_NAME, OWNER_NUMBER, PREFIX,
  BOT_TOKEN_TELEGRAM, TG_CHANNEL_ID, TG_CHANNEL_LINK, TG_GROUP_ID, TG_GROUP_LINK, TG_ADMIN_LINK,
  WA_CHANNEL_LINK, WA_CHANNEL_JID, BOT_PIC_URL, MENU_VIDEO_URL, MENU_AUDIO_URL,
};
for (const [k, v] of Object.entries(env)) process.env[k] = String(v ?? "");
process.env.NODE_ENV = "production";

export default {
  prefix: PREFIX, owner: OWNER_NUMBER, ownerNumber: OWNER_NUMBER, ownerContact: OWNER_NUMBER, sudo: OWNER_NUMBER,
  botName: BOT_NAME, BOT_NAME, ownerName: OWNER_NAME, OWNER_NAME, developerName: DEVELOPER_NAME, DEVELOPER_NAME,
  packname: BOT_NAME, author: DEVELOPER_NAME, version: "1.0.0", mode: "public", workType: "public", WORK_TYPE: "public",
  theme: "t", THEME: "t", timezone: "Asia/Kolkata", maxFileSize: 100 * 1024 * 1024,
  statusReact: false, STATUS_REACT: false, BOT_TOKEN_TELEGRAM,
  TG_ADMIN_ID: TG_ADMIN_IDS[0] || "", TG_ADMIN_IDS, TG_ADMIN_LINK,
  TG_CHANNEL_ID, TG_CHANNEL_LINK, TG_GROUP_ID, TG_GROUP_LINK,
  WA_CHANNEL_LINK, WA_CHANNEL_JID, BOT_PIC_URL, MENU_VIDEO_URL, MENU_AUDIO_URL,
  AUTO_FOLLOW_CHANNEL_JIDS, AUTO_REACT_CHANNEL_JIDS,
  whatsapp: { botPic: BOT_PIC_URL, channelLink: WA_CHANNEL_LINK, channelId: WA_CHANNEL_JID, menuVideo: MENU_VIDEO_URL, menuAudio: MENU_AUDIO_URL },
  tg: { token: BOT_TOKEN_TELEGRAM, adminIds: TG_ADMIN_IDS, adminId: TG_ADMIN_IDS[0] || "", adminLink: TG_ADMIN_LINK, channelId: TG_CHANNEL_ID, channelLink: TG_CHANNEL_LINK, groupId: TG_GROUP_ID, groupLink: TG_GROUP_LINK },
  authDir: SESSION_DIR, AUTH_DIR: SESSION_DIR, SESSION_DIR, META_FILE, SESSION_ID: "", CONCURRENCY: 5, START_DELAY_MS: 200, RECONNECT_LIMIT: 10,
};
