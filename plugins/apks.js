const Cutie = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('weather');


if (Config.WORKTYPE == 'private') {

   Cutie.addCommand({pattern: 'apkmod', fromMe: true, desc: Lang.APK_MOD}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMMANDS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     *.nova*\n\n┠⊷️ ↘️ CM Launcher:\n     *.cml*\n\n┠⊷️ ↘️ Apex Launcher:\n     *.apex*\n\n\n┠⊷️ ↘️ Kinemaster:\n     *.kinemaster*\n\n┠⊷️ ↘️ PicsArt Gold:\n     *.picsart*\n\n┠⊷️ ↘️ Canva Pro:\n     *.canva*\n\n┠⊷️ ↘️ Ligthrom:\n     *.lightroom*\n\n┠⊷️ ↘️ Photoshop Express:\n     *.pshop*\n\n┠⊷️ ↘️ Snapseed:\n     *.snaps*\n\n┠⊷️ ↘️ Retouch:\n     *.retouch*\n\n\n┠⊷️ ↘️ Vanced Manager:\n     *.vanced*\n\n┠⊷️ ↘️ Crunchyroll:\n     *.crunchy*\n\n┠⊷️ ↘️ Freezer Mod:\n     *.freez*\n\n┠⊷️ ↘️ Deezer Premium:\n     *.deezer*\n\n┠⊷️ ↘️ RadioBox:\n     *.rbox*\n\n┠⊷️ ↘️ Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ ↘️ Power AMP:\n     *.amp*\n\n┠⊷️ ↘️ JetAudio:\n     *.jetau*\n\n\n┠⊷️ ↘️ ExpressVpn:\n     *.xpress*\n\n┠⊷️ ↘️ Hospot Shield:\n     *.hshield*\n\n┠⊷️ ↘️ TurboVpn:\n     *.Turbo*\n\n┠⊷️ ↘️ File Manager:\n     *.flmanager*\n\n┠⊷️ ↘️ CallRecorder:\n     *.callr*\n\n┠⊷️ ↘️ FingScanner:\n     *.fing*\n\n┠⊷️ ↘️ Shazam Encore:\n     *.shazam*\n\n┠⊷️ ↘️ QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ ↘️ Screen Recorder:\n     *.srecorder*\n\n┠⊷️ ↘️ TikTok Mod:\n     *.tiktok*\n\n┠⊷️ ↘️ Photomath:\n     *.pmath*\n\n┠⊷️ ↘️ WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *Public Bot* 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));

   Cutie.addCommand({pattern: 'nova', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *NOVA LAUNCHER* 💎\npremium unlocked .\n📌 bit.ly/drknova');
   }));

   Cutie.addCommand({pattern: 'cml', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CM LAUNCHER* 💎\npremium unlocked.\n😞 No disponible en este momento.');
   }));

   Cutie.addCommand({pattern: 'apex', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *APEX LAUNCHER* 💎\npremium unlocked.\n📌 bit.ly/drkapex');
   }));

   Cutie.addCommand({pattern: 'kinemaster', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *KINEMASTER MOD* 💎\npremium unlocked.\n👉https://bit.ly/2RSyFVr.\n pass: 3456');
   }));

   Cutie.addCommand({pattern: 'inshot', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *INSHOT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3zyNjlZ');
   }));

   Cutie.addCommand({pattern: 'alight', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *ALIGHT MOTION MOD* 💎\npremium unlocked.\n👉https://bit.ly/3cHUBdg\n pass: 3456');
   }));

   Cutie.addCommand({pattern: 'capcut', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CAP CUT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3pSSlFu');
   }));
   Cutie.addCommand({pattern: 'picsart', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PICSART GOLD* 💎\npremium unlocked.\n📌 bit.ly/drkpicsart');
   }));

   Cutie.addCommand({pattern: 'canva', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CANVA PRO* 💎\npremium unlocked.\n📌 bit.ly/canvapro');
   }));

   Cutie.addCommand({pattern: 'lightr', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *LIGTHROM* 💎\npremium unlocked.\n📌 bit.ly/drklightr');
   }));

   Cutie.addCommand({pattern: 'pshop', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOSHOP EXPRESS* 💎\npremium unlocked.\n📌 bit.ly/drkphotoshop');
   }));

   Cutie.addCommand({pattern: 'snaps', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SNAPSEED* 💎\npremium unlocked.\n📌 bit.ly/drksnaps');
   }));

   Cutie.addCommand({pattern: 'retouch', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *RETOUCH* 💎\npremium unlocked.\n📌 bit.ly/drkretouch');
   }));

   Cutie.addCommand({pattern: 'vanced', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *VANCED MANAGER* 💎\nyoutube vanced.\n📌 bit.ly/drkytubev');
   }));

   Cutie.addCommand({pattern: 'freez', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FREEZER MOD* 💎\nPremium Unlocked.\n📌 bit.ly/drkfreezer');
   }));

   Cutie.addCommand({pattern: 'deezer', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *DEEZER MOD* 💎\npremium unlocked.\n📌 bit.ly/drkdeezer');
   }));

   Cutie.addCommand({pattern: 'rbox', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *RADIO BOX* 💎\npremium unlocked.\n📌 bit.ly/drkradiobox');
   }));

   Cutie.addCommand({pattern: 'mxpro', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *MX PLAYER PRO* 💎\npremium unlocked.\n⚠️ Versión Premium.\n📌 bit.ly/drkmxplayer');
   }));

   Cutie.addCommand({pattern: 'amp', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *POWERAMP* 💎\npremium unlocked.\n📌 bit.ly/drkampplayer');
   }));

   Cutie.addCommand({pattern: 'jetau', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *JetAudio* 💎\npremium unlocked.\n📌 bit.ly/drkjetau');
   }));

   Cutie.addCommand({pattern: 'xpress', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *EXPRESS VPN* 💎\npremium unlocked.\n📌 bit.ly/drkXpress');
   }));

   Cutie.addCommand({pattern: 'hshield', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *HOSPOT SHIELD VPN* 💎\npremium unlocked.\n📌 bit.ly/drkHShield');
   }));

   Cutie.addCommand({pattern: 'avguard', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *TURBO VPN* 💎\npremium unlocked.\n📌 bit.ly/drkguard');
   }));

   Cutie.addCommand({pattern: 'flmanager', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FILE MANAGER* 💎\npremium unlocked.\n📌 bit.ly/drkesfile');
   }));

   Cutie.addCommand({pattern: 'callr', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CALL RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkcallr');
   }));

   Cutie.addCommand({pattern: 'fing', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FING SCANNER* 💎\npremium unlocked.\n📌 bit.ly/drkfing');
   }));

   Cutie.addCommand({pattern: 'shazam', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SHAZAM ENCORE* 💎\npremium unlocked.\n📌 bit.ly/drkshaz');
   }));

   Cutie.addCommand({pattern: 'qrcode', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *QR CODE SCANER* 💎\npremium unlocked.\n📌 bit.ly/drkqrscanner');
   }));

   Cutie.addCommand({pattern: 'srecorder', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SCREEN RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkgrabr');
   }));

   Cutie.addCommand({pattern: 'tiktok', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *TIKTOK MOD* 💎\npremium unlocked.\n📌 bit.ly/drktiktok');
   }));

   Cutie.addCommand({pattern: 'pmath', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOMATH* 💎\npremium unlocked.\n📌 bit.ly/drkphotomath');
   }));

   Cutie.addCommand({pattern: 'waplus', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *WHATSAPP PLUS* 💎\nwhattsapp mod.\n📌 bit.ly/drkWaPlus');
   }));
}

else if (Config.WORKTYPE == 'public') {

   Cutie.addCommand({pattern: 'apkmod', fromMe: false}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *APK COMANDOS* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\nAplicaciones Full\n┠⊷️ ↘️ Nova Launcher:\n     *.nova*\n\n┠⊷️ ↘️ CM Launcher:\n     *.cml*\n\n┠⊷️ ↘️ Apex Launcher:\n     *.apex*\n\n\n┠⊷️ ↘️ Kinemaster:\n     *.kinemaster*\n\n┠⊷️ ↘️ PicsArt Gold:\n     *.picsart*\n\n┠⊷️ ↘️ Canva Pro:\n     *.canva*\n\n┠⊷️ ↘️ Ligthrom:\n     *.lightroom*\n\n┠⊷️ ↘️ Photoshop Express:\n     *.pshop*\n\n┠⊷️ ↘️ Snapseed:\n     *.snaps*\n\n┠⊷️ ↘️ Retouch:\n     *.retouch*\n\n\n┠⊷️ ↘️ Vanced Manager:\n     *.vanced*\n\n┠⊷️ ↘️ Crunchyroll:\n     *.crunchy*\n\n┠⊷️ ↘️ Freezer Mod:\n     *.freez*\n\n┠⊷️ ↘️ Deezer Premium:\n     *.deezer*\n\n┠⊷️ ↘️ RadioBox:\n     *.rbox*\n\n┠⊷️ ↘️ Mx Player Pro:\n     *.mxpro*\n\n┠⊷️ ↘️ Power AMP:\n     *.amp*\n\n┠⊷️ ↘️ JetAudio:\n     *.jetau*\n\n\n┠⊷️ ↘️ ExpressVpn:\n     *.xpress*\n\n┠⊷️ ↘️ Hospot Shield:\n     *.hshield*\n\n┠⊷️ ↘️ TurboVpn:\n     *.Turbo*\n\n┠⊷️ ↘️ File Manager:\n     *.flmanager*\n\n┠⊷️ ↘️ CallRecorder:\n     *.callr*\n\n┠⊷️ ↘️ FingScanner:\n     *.fing*\n\n┠⊷️ ↘️ Shazam Encore:\n     *.shazam*\n\n┠⊷️ ↘️ QR Scanner Pro:\n     *.qrcode*\n\n┠⊷️ ↘️ Screen Recorder:\n     *.srecorder*\n\n┠⊷️ ↘️ TikTok Mod:\n     *.tiktok*\n\n┠⊷️ ↘️ Photomath:\n     *.pmath*\n\n┠⊷️ ↘️ WhatsApp Plus:\n     *.waplus*\n\n┏━━━━━━━━━━━━━━━━━━━\n  *Public Bot* 😉\n┗━━━━━━━━━━━━━━━━━━━\n');
   }));
    
   Cutie.addCommand({pattern: 'fatp', fromMe: false}, (async (message, match) => {        
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/apk/FATP.mp3"),
            MessageType.audio, 
            {mimetype: Mimetype.mp4Audio}
        )
   }));

   Cutie.addCommand({pattern: 'nova', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *NOVA LAUNCHER* 💎\npremium unlocked.\n📌 bit.ly/drknova');
   }));

   Cutie.addCommand({pattern: 'cml', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CM LAUNCHER* 💎\npremium unlocked.\n😞 No disponible en este momento.');
   }));

   Cutie.addCommand({pattern: 'apex', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *APEX LAUNCHER* 💎\npremium unlocked.\n📌 bit.ly/drkapex');
   }));

   Cutie.addCommand({pattern: 'kinemaster', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *KINEMASTER MOD* 💎\npremium unlocked.\n👉https://bit.ly/2RSyFVr.\npass: 3456');
   }));

Cutie.addCommand({pattern: 'inshot', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *INSHOT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3zyNjlZ');
   }));

Cutie.addCommand({pattern: 'alight', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *ALIGHT MOTION MOD* 💎\npremium unlocked.\n👉https://bit.ly/3cHUBdg\n pass 3456');
   }));

Cutie.addCommand({pattern: 'capcut', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CAP CUT MOD* 💎\npremium unlocked.\n👉https://bit.ly/3pSSlFu\npass 3456');
   }));
   Cutie.addCommand({pattern: 'picsart', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PICSART GOLD* 💎\npremium unlocked.\n📌 bit.ly/drkpicsart');
   }));

   Cutie.addCommand({pattern: 'canva', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CANVA PRO* 💎\npremium unlocked.\n📌 bit.ly/canvapro');
   }));

   Cutie.addCommand({pattern: 'lightr', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *LIGTHROM* 💎\npremium unlocked.\n📌 bit.ly/drklightr');
   }));

   Cutie.addCommand({pattern: 'pshop', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOSHOP EXPRESS* 💎\npremium unlocked.\n📌 bit.ly/drkphotoshop');
   }));

   Cutie.addCommand({pattern: 'snaps', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SNAPSEED* 💎\npremium unlocked.\n📌 bit.ly/drksnaps');
   }));

   Cutie.addCommand({pattern: 'retouch', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *RETOUCH* 💎\npremium unlocked.\n📌 bit.ly/drkretouch');
   }));

   Cutie.addCommand({pattern: 'vanced', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *VANCED MANAGER* 💎\nYouTube Premium  YouTube Music.\n📌 bit.ly/drkytubev');
   }));

   Cutie.addCommand({pattern: 'crunchy', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        var chyroll = await axios.get('https://gitlab.com/DrkBotPublic/botarchives/-/raw/master/Sin_t%C3%ADtulo_2_540p.mp4', { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(chyroll.data), MessageType.video, {mimetype: Mimetype.mp4})
        await message.sendMessage('🔰 *CRUNCHYROLL(vrv)* 🔰\n💳 *BIN:* 55703976xxx62xxx\n📫 *Codigo Postal:* 10080, 10090\n *Ip:* SL');
   }));

   Cutie.addCommand({pattern: 'freez', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FREEZER MOD* 💎\npremium unlocked - spotify\n📌 bit.ly/drkfreezer');
   }));

   Cutie.addCommand({pattern: 'deezer', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *DEEZER MOD* 💎\npremium unlocked.\n📌 bit.ly/drkdeezer');
   }));

   Cutie.addCommand({pattern: 'rbox', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *RADIO BOX* 💎\npremium unlocked.\n📌 bit.ly/drkradiobox');
   }));

   Cutie.addCommand({pattern: 'mxpro', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *MX PLAYER PRO* 💎\npremium unlocked.\n📌 bit.ly/drkmxplayer');
   }));

   Cutie.addCommand({pattern: 'amp', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *POWERAMP* 💎\npremium unlocked.\n📌 bit.ly/drkampplayer');
   }));


   Cutie.addCommand({pattern: 'xpress', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *EXPRESS VPN* 💎\npremium unlocked.\n📌 bit.ly/drkXpress');
   }));

   Cutie.addCommand({pattern: 'hshield', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *HOSPOT SHIELD VPN* 💎\npremium unlocked.\n📌 bit.ly/drkHShield');
   }));

   Cutie.addCommand({pattern: 'avguard', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *TURBO VPN* 💎\npremium unlocked.\n📌 bit.ly/drkguard');
   }));

   Cutie.addCommand({pattern: 'flmanager', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FILE MANAGER* 💎\npremium unlocked.\n📌 bit.ly/drkesfile');
   }));

   Cutie.addCommand({pattern: 'callr', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *CALL RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkcallr');
   }));

   Cutie.addCommand({pattern: 'fing', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *FING SCANNER* 💎\npremium unlocked.\n📌 bit.ly/drkfing');
   }));

   Cutie.addCommand({pattern: 'shazam', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SHAZAM ENCORE* 💎\npremium unlocked.\n📌 bit.ly/drkshaz');
   }));

   Cutie.addCommand({pattern: 'qrcode', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *QR CODE SCANER* 💎\npremium unlocked.\n📌 bit.ly/drkqrscanner');
   }));

   Cutie.addCommand({pattern: 'screen recorder', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *SCREEN RECORDER* 💎\npremium unlocked.\n📌 bit.ly/drkgrabr');
   }));

   Cutie.addCommand({pattern: 'tiktok', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *TIKTOK MOD* 💎\npremium unlocked.\n📌 bit.ly/drktiktok');
   }));

   Cutie.addCommand({pattern: 'pmath', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *PHOTOMATH* 💎\npremium unlocked.\n📌 bit.ly/drkphotomath');
   }));

   Cutie.addCommand({pattern: 'waplus', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
      await message.sendMessage('💎 *WHATSAPP PLUS* 💎\nmhatsapp mod.\n📌 bit.ly/drkWaPlus');
   }));
}
