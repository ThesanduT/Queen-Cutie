/* Copyright (C) 2020 Thesandu Thewsara.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

QueenCutie - Thesandu Thewsara
*/

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType} = require('@adiwajshing/baileys');
const {StringSession} = require('./cutie/');
const fs = require('fs');

async function QueenCutie () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [3, 3234,9]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold('Cutie')}
${chalk.white.italic('CutieString Code..')}

${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    

    conn.on('open', async () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('CutieString Code: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `CUTIE_SESSION="${st}"`);
        }
        if (conn.user.jid.startsWith('90')) {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*Do not share this code with anyone !*', MessageType.text)
            console.log(
                chalk.blue.bold('Use this to deploy your own bot.')
            );
        }
        else {
            await conn.sendMessage(conn.user.jid,st, MessageType.text)
            await conn.sendMessage(conn.user.jid,'*Do Not Share This Code With Anyone!*', MessageType.text)
            console.log(
                chalk.blue.bold('If you are installing locale, you can start the bot with node bot.js')
            );
        }
        
        process.exit(0);
    });

    await conn.connect();
}

QueenCutie()
