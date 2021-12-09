const Cutie = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Cutie.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.LIZA, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('photo/cutie.png'), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈Links ☟︎︎︎≈≈≈≈≈≈≈≈*
 
*Owner number wa.me/94712564306*

*whatsapp group : https://chat.whatsapp.com/FVOdpPLaMvP24rIfTzCGof*

*githublink       _https://github.com/ThesanduT_*

*Deploy your own QueenCutie -https://github.com/ThesanduT/QueenCutie_*
    
`}) 

})); 
