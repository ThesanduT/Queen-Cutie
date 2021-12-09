/* Copyright (C) 2020 Thesandu Thewsara.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
QueenCutie - Thesandu Thewsara
*/

const Cutie = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
//============================== LYRICS =============================================
const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const Slang = Language.getString('lyrics');
const Clang = Language.getString('covid');

const wiki = require('wikijs').default;
var gis = require('g-i-s');

var dlang_dsc = ''
var closer_res = ''
var dlang_lang = ''
var dlang_similarity = ''
var dlang_other = ''
var dlang_input = ''

if (config.LANG == 'TR') {
    dlang_dsc = 'Yan谋tlanan mesaj谋n dilini tahmin eder.'
    closer_res = 'En Yak谋n Sonu莽:'
    dlang_lang = 'Dil:'
    dlang_similarity = 'Benzerlik:'
    dlang_other = 'Di臒er Diller'
    dlang_input = '陌艧lenen Metin:'
}
if (config.LANG == 'EN') {
    dlang_dsc = 'Guess the language of the replied message.'
    closer_res = 'Closest Result:'
    dlang_lang = 'Language:'
    dlang_similarity = 'Similarity:'
    dlang_other = 'Other Languages'
    dlang_input = 'Processed Text:'
}
if (config.LANG == 'AZ') {
    dlang_dsc = 'Cavablanan mesaj谋n dilini t蓹xmin edin.'
    closer_res = '茝n yax谋n n蓹tic蓹:'
    dlang_lang = 'Dil:'
    dlang_similarity = 'B蓹nz蓹rlik:'
    dlang_other = 'Ba艧qa Dill蓹r'
    dlang_input = '陌艧l蓹nmi艧 M蓹tn:'
}
if (config.LANG == 'ML') {
    dlang_dsc = '啻幢嗟佮椽啻熰纯 啻ㄠ到啻曕纯啻� 啻膏川嗟嵿处嗟囙炊啻む祶啻む纯啻ㄠ祶啻编祮 啻淳啻� ess 啻灌纯啻曕祶啻曕祦啻�.'
    closer_res = '啻忇幢嗟嵿幢啻掂祦啻� 啻呧礋嗟佮搐嗟嵿搐 啻床啻�:'
    dlang_lang = '啻ㄠ淳啻掂祶:'
    dlang_similarity = '啻膏串啻距川啻�:'
    dlang_other = '啻幢嗟嵿幢嗟� 啻淳啻粪磿嗟�'
    dlang_input = '啻祶啻班祴啻膏锤嗟嵿锤嗟� 啻氞祮啻祶啻� 啻掂淳啻氞磿啻�:'
}
if (config.LANG == 'HI') {
    dlang_dsc = '啶夃い啷嵿い啶� 啶︵た啶� 啶椸 啶膏啶︵啶� 啶曕 啶ぞ啶粪ぞ 啶曕ぞ 啶呧え啷佮ぎ啶距え 啶侧啶距啶�'
    closer_res = '啶ㄠた啶曕啶むぎ 啶ぐ啶苦ぃ啶距ぎ:'
    dlang_lang = '啶溹啶ぞ啶�:'
    dlang_similarity = '啶膏ぎ啶距え啶むぞ:'
    dlang_other = '啶呧え啷嵿く 啶ぞ啶粪ぞ啶忇'
    dlang_input = '啶膏啶膏ぞ啶оた啶� 啶ぞ啶�:'
}
if (config.LANG == 'ES') {
    dlang_dsc = 'Adivina el idioma del mensaje respondido.'
    closer_res = 'Resultado m谩s cercano:'
    dlang_lang = 'Lengua:'
    dlang_similarity = 'Semejanza:'
    dlang_other = 'Otros idiomas:'
    dlang_input = 'Texto procesado:'
}
if (config.LANG == 'PT') {
    dlang_dsc = 'Adivinhe o idioma da mensagem respondida.'
    closer_res = 'Resultado mais pr贸ximo:'
    dlang_lang = 'L铆ngua:'
    dlang_similarity = 'Similaridade:'
    dlang_other = 'Outras l铆nguas'
    dlang_input = 'Texto Processado:'
}
if (config.LANG == 'ID') {
    dlang_dsc = 'Tebak bahasa pesan yang dibalas.'
    closer_res = 'Hasil Terdekat:'
    dlang_lang = 'Lidah:'
    dlang_similarity = 'Kesamaan:'
    dlang_other = 'Bahasa Lainnya'
    dlang_input = 'Teks yang Diproses:'
}
if (config.LANG == 'RU') {
    dlang_dsc = '校谐邪写邪泄 褟蟹褘泻 芯褌胁械褌薪芯谐芯 褋芯芯斜褖械薪懈褟.'
    closer_res = '袘谢懈卸邪泄褕懈泄 褉械蟹褍谢褜褌邪褌:'
    dlang_lang = '携蟹褘泻:'
    dlang_similarity = '小褏芯写褋褌胁o:'
    dlang_other = '袛褉褍谐懈械 褟蟹褘泻懈'
    dlang_input = '袨斜褉邪斜芯褌邪薪薪褘泄 褌械泻褋褌:'
}


if (config.WORKTYPE == 'private') {

    Cutie.addCommand({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: true}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*鈻讹笍 ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*鈼€锔� ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*馃攷 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));
    var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var succ_on = ''
    var succ_off = ''
    if (config.LANG == 'TR') {
        l_dsc = 'Antilink arac谋n谋 etkinle艧tirir.'
        alr_on = 'Antilink halihaz谋rda a莽谋k!'
        alr_off = 'Antilink halihaz谋rda kapal谋!'
        succ_on = 'Antilink Ba艧ar谋yla A莽谋ld谋!'
        succ_off = 'Antilink Ba艧ar谋yla Kapat谋ld谋!'
    }
    if (config.LANG == 'EN') {
        l_dsc = 'Activates the Antilink tool.'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        succ_on = 'Antilink Opened Successfully!'
        succ_off = 'Antilink Closed Successfully!'
    }
    if (config.LANG == 'AZ') {
        l_dsc = 'Antilink al蓹tini aktivl蓹艧dirir.'
        alr_on = 'Antilink haz谋rda a莽谋qd谋r!'
        alr_off = 'Antilink haz谋rda ba臒l谋d谋r!'
        succ_on = 'Antilink U臒urla A莽谋ld谋!'
        succ_off = 'Antilink U臒urla Ba臒land谋!'
    }
    if (config.LANG == 'HI') {
        l_dsc = '啶忇啶熰啶侧た啶傕 啶熰啶� 啶曕 啶膏啷嵿ぐ啶苦く 啶曕ぐ啶むぞ 啶灌啷�'
        alr_on = '啶忇啶熰啶侧た啶傕 啶す啶侧 啶膏 啶灌 啶栢啶侧ぞ 啶灌!'
        alr_off = '啶忇啶熰啶侧た啶傕 啶掂ぐ啷嵿い啶ぞ啶� 啶啶� 啶啶� 啶灌!'
        succ_on = '啶忇啶熰啶侧た啶傕 啶膏か啶侧い啶距お啷傕ぐ啷嵿さ啶� 啶栢啶侧ぞ 啶椸く啶�!'
        succ_off = '啶忇啶熰啶侧た啶傕 啶膏か啶侧い啶距お啷傕ぐ啷嵿さ啶� 啶啶�!'
    }
    if (config.LANG == 'ML') {
        l_dsc = '啻嗋川嗟嵿幢啻苦床啻苦礄嗟嵿磿嗟� 啻夃椽啻曕窗啻｀磦 啻膏礈嗟€啻掂串啻距磿嗟嵿磿嗟佮川嗟嵿川嗟�.'
        alr_on = '啻嗋川嗟嵿幢啻苦床啻苦礄嗟嵿磿嗟� 啻囙搐啻苦川啻曕磦 啻む祦啻编川嗟嵿川嗟�!'
        alr_off = '啻嗋川嗟嵿幢啻苦床啻苦礄嗟嵿磿嗟� 啻ㄠ纯啻侧吹啻苦到 啻呧礋啻氞祶啻氞纯啻班纯啻曕祶啻曕祦啻ㄠ祶啻ㄠ祦!'
        succ_on = '啻嗋川嗟嵿幢啻苦床啻苦礄嗟嵿磿嗟� 啻掂纯啻溹疮啻曕窗啻淳啻纯 啻む祦啻编川嗟嵿川嗟�!'
        succ_off = '啻嗋川嗟嵿幢啻苦床啻苦礄嗟嵿磿嗟� 啻掂纯啻溹疮啻曕窗啻淳啻纯 啻呧礋啻氞祶啻氞祦!'
    }
    if (config.LANG == 'PT') {
        l_dsc = 'Ativa a ferramenta Antilink.'
        alr_on = 'O Antilink j谩 est谩 aberto!'
        alr_off = 'Antilink est谩 fechado no momento!'
        succ_on = 'Antilink aberto com sucesso!'
        succ_off = 'Antilink fechado com sucesso!'
    }
    if (config.LANG == 'RU') {
        l_dsc = '袗泻褌懈胁懈褉褍械褌 懈薪褋褌褉褍屑械薪褌 Antilink.'
        alr_on = '袗薪褌懈谢懈薪泻 褍卸械 芯褌泻褉褘褌!'
        alr_off = '袗薪褌懈谢懈薪泻 褋械泄褔邪褋 蟹邪泻褉褘褌!'
        succ_on = '袗薪褌懈谢懈薪泻 褍褋锌械褕薪芯 芯褌泻褉褘褌!'
        succ_off = '袗薪褌懈谢懈薪泻 褍褋锌械褕薪芯 蟹邪泻褉褘褌!'
    }
    if (config.LANG == 'ES') {
        l_dsc = 'Activa la herramienta Antilink.'
        alr_on = '隆Antilink ya est谩 abierto!'
        alr_off = '隆Antilink est谩 cerrado actualmente!'
        succ_on = '隆Antilink se abri贸 con 茅xito!'
        succ_off = 'Antilink cerrado correctamente!'
    }
    if (config.LANG == 'ID') {
        l_dsc = 'Mengaktifkan alat Antilink.'
        alr_on = 'Antilink sudah terbuka!'
        alr_off = 'Antilink saat ini ditutup!'
        succ_on = 'Antilink Berhasil Dibuka!'
        succ_off = 'Antilink Berhasil Ditutup!'
    }
    Cutie.addCommand({pattern: 'antilink ?(.*)', fromMe: true, desc: l_dsc, usage: '.antilink on / off' }, (async (message, match) => {
        const anti_status = `${config.ANT陌L陌NK}`
        if (match[1] == 'on') {
            if (anti_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANT陌_L陌NK']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (anti_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANT陌_L陌NK']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
            }
        }
    }));
    var auto_dsc = ''
    var alr_on_bio = ''
    var alr_off_bio = ''
    var succ_on_bio = ''
    var succ_off_bio = ''
    if (config.LANG == 'TR') {
        auto_dsc = 'Biyografinize canl谋 saat ekleyin!'
        alr_on_bio = 'Autobio halihaz谋rda a莽谋k!'
        alr_off_bio = 'Autobio halihaz谋rda kapal谋!'
        succ_on_bio = 'Autobio Ba艧ar谋yla A莽谋ld谋!'
        succ_off_bio = 'Autobio Ba艧ar谋yla Kapat谋ld谋!'
    }
    if (config.LANG == 'EN') {
        auto_dsc = 'Add live clock to your bio!'
        alr_on_bio = 'Autobio is already open!'
        alr_off_bio = 'Autobio is currently closed!'
        succ_on_bio = 'Autobio Opened Successfully!'
        succ_off_bio = 'Autobio Closed Successfully!'
    }
    if (config.LANG == 'AZ') {
        auto_dsc = 'Bio-ya canl谋 saat 蓹lav蓹 et!'
        alr_on_bio = 'Autobio haz谋rda a莽谋qd谋r!'
        alr_off_bio = 'Autobio haz谋rda ba臒l谋d谋r!'
        succ_on_bio = 'Autobio U臒urla A莽谋ld谋!'
        succ_off_bio = 'Autobio U臒urla Ba臒land谋!'
    }
    if (config.LANG == 'HI') {
        auto_dsc = '啶呧お啶ㄠ 啶ぞ啶 啶啶� 啶侧ぞ啶囙さ 啶樴ぁ啶监 啶溹啶∴ぜ啷囙!'
        alr_on_bio = 'Autobio 啶す啶侧 啶膏 啶灌 啶栢啶侧ぞ 啶灌!'
        alr_off_bio = 'Autobio 啶掂ぐ啷嵿い啶ぞ啶� 啶啶� 啶啶� 啶灌!'
        succ_on_bio = 'Autobio 啶膏か啶侧い啶距お啷傕ぐ啷嵿さ啶� 啶栢啶侧ぞ 啶椸く啶�!'
        succ_off_bio = 'Autobio 啶膏か啶侧い啶距お啷傕ぐ啷嵿さ啶� 啶啶�!'
    }
    if (config.LANG == 'ML') {
        auto_dsc = '啻ㄠ纯啻權祶啻權闯嗟佮礋嗟� 啻疮嗟嬥疮啻苦床嗟囙磿嗟嵿磿嗟� 啻む搐嗟嵿锤啻疮 啻曕祶啻侧祴啻曕祶啻曕祶 啻氞祰嗟监磿嗟嵿磿嗟佮磿!'
        alr_on_bio = 'Autobio 啻囙搐啻苦川啻曕磦 啻む祦啻编川嗟嵿川嗟�!'
        alr_off_bio = 'Autobio 啻ㄠ纯啻侧吹啻苦到 啻呧礋啻氞祶啻氞纯啻班纯啻曕祶啻曕祦啻ㄠ祶啻ㄠ祦!'
        succ_on_bio = 'Autobio 啻掂纯啻溹疮啻曕窗啻淳啻纯 啻む祦啻编川嗟嵿川嗟�!'
        succ_off_bio = 'Autobio 啻掂纯啻溹疮啻曕窗啻淳啻纯 啻呧礋啻氞祶啻氞祦!'
    }
    if (config.LANG == 'PT') {
        auto_dsc = 'Adicione um rel贸gio ao vivo 脿 sua biografia!'
        alr_on_bio = 'O Autobio j谩 est谩 aberto!'
        alr_off_bio = 'Autobio est谩 fechado no momento!'
        succ_on_bio = 'Autobio aberto com sucesso!'
        succ_off_bio = 'Autobio fechado com sucesso!'
    }
    if (config.LANG == 'RU') {
        auto_dsc = '袛芯斜邪胁褜褌械 卸懈胁褘械 褔邪褋褘 胁 褋胁芯褞 斜懈芯谐褉邪褎懈褞!'
        alr_on_bio = 'Autobio 褍卸械 芯褌泻褉褘褌!'
        alr_off_bio = 'Autobio 褋械泄褔邪褋 蟹邪泻褉褘褌!'
        succ_on_bio = 'Autobio 褍褋锌械褕薪芯 芯褌泻褉褘褌!'
        succ_off_bio = 'Autobio 褍褋锌械褕薪芯 蟹邪泻褉褘褌!'
    }
    if (config.LANG == 'ES') {
        auto_dsc = '隆Agrega un reloj en vivo a tu biograf铆a!'
        alr_on_bio = '隆Autobio ya est谩 abierto!'
        alr_off_bio = '隆Autobio est谩 cerrado actualmente!'
        succ_on_bio = '隆Autobio se abri贸 con 茅xito!'
        succ_off_bio = 'Autobio cerrado correctamente!'
    }
    if (config.LANG == 'ID') {
        auto_dsc = 'Tambahkan jam langsung ke bio Anda!'
        alr_on_bio = 'Autobio sudah terbuka!'
        alr_off_bio = 'Autobio saat ini ditutup!'
        succ_on_bio = 'Autobio Berhasil Dibuka!'
        succ_off_bio = 'Autobio Berhasil Ditutup!'
    }
    Cutie.addCommand({pattern: 'autobio ?(.*)', fromMe: true, desc: auto_dsc, usage: '.autobio on / off' }, (async (message, match) => {
        const bio_status = `${config.AUTOB陌O}`
        if (match[1] == 'on') {
            if (bio_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_B陌O']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on_bio + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (bio_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_B陌O']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off_bio + '*', MessageType.text)
            }
        }
    }));
    Cutie.addCommand({pattern: 'detectlang$', fromMe: true, desc: dlang_dsc}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text)
        const msg = message.reply_message.text
        var ldet = lngDetector.detect(msg)
        async function upperfirstLetter(letter) {
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
        var cls1 = await upperfirstLetter(ldet[0][0])
        var cls2 = ldet[0][1].toString()
        var cls3 = await upperfirstLetter(ldet[1][0])
        var cls4 = ldet[1][1].toString()
        var cls5 = await upperfirstLetter(ldet[2][0])
        var cls6 = ldet[2][1].toString()
        var cls7 = await upperfirstLetter(ldet[3][0])
        var cls8 = ldet[3][1].toString()
        const res_1 = '*' + dlang_input + '* ' + '_' + msg + '_ \n'
        const res_2 = '*' + closer_res + '* ' + '_' + cls1 + '_\n*' + dlang_similarity + '* ' + '_' + cls2 + '_ \n\n'
        const res_3 = '```[ ' + dlang_other + ' ]```\n\n'
        const res_4 = '#2 *' + dlang_lang + '* ' + '_' + cls3 + '_\n*' + dlang_similarity + '* ' + '_' + cls4 + '_ \n'
        const res_5 = '#3 *' + dlang_lang + '* ' + '_' + cls5 + '_\n*' + dlang_similarity + '* ' + '_' + cls6 + '_ \n'
        const res_6 = '#4 *' + dlang_lang + '* ' + '_' + cls7 + '_\n*' + dlang_similarity + '* ' + '_' + cls8 + '_'
        const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
        await message.client.sendMessage(message.jid,rep_7,MessageType.text);
    }));
    Cutie.addCommand({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: true}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));

    if (config.LANG == 'TR' || config.LANG == 'AZ') {

        Cutie.addCommand({pattern: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = 'tr',
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    else {
        Cutie.addCommand({pattern: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = 'ml',
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    Cutie.addCommand({pattern: 'song ?(.*)', fromMe: true, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: false});
            });
    }));
    Cutie.addCommand({pattern: 'video ?(.*)', fromMe: true, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    Cutie.addCommand({pattern: 'yt ?(.*)', fromMe: true, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));

    Cutie.addCommand({pattern: 'wiki ?(.*)', fromMe: true, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    Cutie.addCommand({pattern: 'img ?(.*)', fromMe: true, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        gis(match[1], async (error, result) => {
            for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
                var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                var stream = get.buffer();
                
                stream.then(async (image) => {
                    await message.client.sendMessage(message.jid,image, MessageType.image);
                });
            }

            message.reply(Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]));
        });
    }));

    Cutie.addCommand({ pattern: 'github ?(.*)', fromMe: true, desc: Glang.G陌THUB_DESC }, async (message, match) => {

        const userName = match[1]
 
        if (userName === '') return await message.client.sendMessage(message.jid, Glang.REPLY, MessageType.text)

        await axios
          .get(`https://videfikri.com/api/github/?username=${userName}`)
          .then(async (response) => {

            const {
              hireable,
              company,
              profile_pic,
              username,
              fullname, 
              blog, 
              location,
              email,
              public_repository,
              biografi,
              following,
              followers,
              public_gists,
              profile_url,
              last_updated,
              joined_on,
            } = response.data.result

            const githubscrap = await axios.get(profile_pic, 
              {responseType: 'arraybuffer',
            })

            const msg = `*${Glang.USERNAME}* ${username} \n*${Glang.NAME}* ${fullname} \n*${Glang.FOLLOWERS}* ${followers} \n*${Glang.FOLLOW陌NG}* ${following} \n*${Glang.B陌O}* ${biografi} \n*${Glang.REPO}* ${public_repository} \n*${Glang.G陌ST}* ${public_gists} \n*${Glang.LOCAT陌ON}* ${location} \n*${Glang.MA陌L}* ${email} \n*${Glang.BLOG}* ${blog} \n*${Glang.COMPANY}* ${company} \n*${Glang.H陌RE}* ${hireable === "true" ? Glang.H陌RE_TRUE : Glang.H陌RE_FALSE} \n*${Glang.JO陌N}* ${joined_on} \n*${Glang.UPDATE}* ${last_updated} \n*${Glang.URL}* ${profile_url}`

            await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Glang.NOT, MessageType.text),
          )
      },
    )

    Cutie.addCommand({pattern: 'lyric ?(.*)', fromMe: true, desc: Slang.LY_DESC }, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));

    Cutie.addCommand({pattern: "covid ?(.*)", fromMe: true, desc: Clang.COV_DESC}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                    const resp = JSON.parse(ok.body);
                    await message.reply(`馃實 *World-Wide Results:*\n馃寪 *Total Cases:* ${resp.cases}\n鈽狅笍 *Total Deaths:* ${resp.deaths}\n鈿曪笍 *Total Recovered:* ${resp.recovered}`);
 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "tr" || match[1] === "Tr" || match[1] === "TR" || match[1].includes('turkiye') || match[1].includes('t眉rkiye') || match[1].includes('t眉rk') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Turkey").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚬馃嚪 *T眉rkiye 陌莽in Sonu莽lar:*\n馃樂 *Toplam Vaka:* ${resp.cases}\n馃彞 *G眉nl眉k Hasta:* ${resp.todayCases}\n鈿帮笍 *Toplam 脰l眉:* ${resp.deaths}\n鈽狅笍 *G眉nl眉k 脰l眉:* ${resp.todayDeaths}\n馃拪 *Toplam 陌yile艧en:* ${resp.recovered}\n馃樂 *Aktif Vaka:* ${resp.active}\n馃啒 *A臒谋r Hasta:* ${resp.critical}\n馃И *Toplam Test:* ${resp.totalTests}`);
                });
            } catch (err) {
                await message.reply(`Bir Hata Olu艧tu, 陌艧te Hata : \n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1] === "america" || match[1] === "America") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚭馃嚥 *Datas for USA:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "de" || match[1] === "De" || match[1] === "DE" || match[1] === "Germany" || match[1] === "germany" || match[1].includes('deutschland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Germany").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚛馃嚜 *Daten f眉r Deutschland:*\n馃樂 *F盲lle 陌nsgesamt:* ${resp.cases}\n馃彞 *T盲gliche F盲lle:* ${resp.todayCases}\n鈿帮笍 *Totale Todesf盲lle:* ${resp.deaths}\n鈽狅笍 *T盲gliche Todesf盲lle:* ${resp.todayDeaths}\n馃拪 *Insgesamt Wiederhergestellt:* ${resp.recovered}\n馃樂 *Aktuelle F盲lle:* ${resp.active}\n馃啒 *Kritische F盲lle:* ${resp.critical}\n馃И *Gesamttests:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "az" || match[1] === "AZ" || match[1] === "Az" || match[1].includes('azerbaycan') || match[1].includes('azeri') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Azerbaijan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚘馃嚳 *Az蓹rbaycan 眉莽眉n m蓹lumatlar:*\n馃樂 *脺mumi Ba艧 Tutan Hadis蓹:* ${resp.cases}\n馃彞 *G眉nl眉k X蓹st蓹:* ${resp.todayCases}\n鈿帮笍 *脺mumi 脰l眉m:* ${resp.deaths}\n鈽狅笍 *G眉nl眉k 脰l眉m:* ${resp.todayDeaths}\n馃拪 *脺mumi Sa臒alma:* ${resp.recovered}\n馃樂 *Aktiv X蓹st蓹 Say谋:* ${resp.active}\n馃啒 *A臒谋r X蓹st蓹 Say谋:* ${resp.critical}\n馃И *脺mumi Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "uk" || match[1] === "Uk" || match[1] === "UK" || match[1] === "United" || match[1].includes('kingdom') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/UK").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚞馃嚙 *Datas for UK:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "in" || match[1] === "谋n" || match[1] === "In" || match[1] === "陌n" || match[1] === "IN" ||  match[1] === "陌N" || match[1] === "india" || match[1] === "India" || match[1].includes('indian') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/India").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚠馃嚦 *啶ぞ啶班い 啶曕 啶侧た啶� 啶∴啶熰ぞ:*\n馃樂 *啶曕啶� 啶ぞ啶げ啷�:* ${resp.cases}\n馃彞 *啶︵啶ㄠた啶� 啶ぞ啶げ啷�:* ${resp.todayCases}\n鈿帮笍 *啶曕啶� 啶啶む啶�:* ${resp.deaths}\n鈽狅笍 *啶班啶� 啶曕 啶啶�:* ${resp.todayDeaths}\n馃拪 *啶曕啶� 啶ぐ啶距ぎ啶�:* ${resp.recovered}\n馃樂 *啶忇啷嵿啶苦さ 啶曕啶�:* ${resp.active}\n馃啒 *啶椸啶啶� 啶ぞ啶げ啷�:* ${resp.critical}\n馃И *啶曕啶� 啶熰啶膏啶�:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "cn" || match[1] === "Cn" || match[1] === "CN" || match[1].includes('china') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/China").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚚馃嚦 *Datas for China:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "gr" || match[1] === "Gr" || match[1] === "GR" || match[1].includes('greek') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Greece").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚞馃嚪 *Datas for Greece:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "fr" || match[1] === "Fr" || match[1] === "FR" || match[1].includes('france') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/France").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚝馃嚪 *Datas for France:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "jp" || match[1] === "Jp" || match[1] === "JP" || match[1].includes('japan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Japan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚡馃嚨 *Datas for Japan:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });
 
            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "kz" || match[1] === "Kz" || match[1] === "KZ" || match[1].includes('kazakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Kazakhstan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚢馃嚳 *Datas for Kazakhstan:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "pk" || match[1] === "Pk" || match[1] === "PK" || match[1].includes('pakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Pakistan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚨馃嚢 *Datas for Pakistan:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "ru" || match[1] === "Ru" || match[1] === "RU" || match[1].includes('russia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Russia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚪馃嚭 *Datas for Russia:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "id" || match[1] === "陌d" || match[1] === "陌D" || match[1] === "谋d" || match[1] === "Id" || match[1] === "ID" || match[1].includes('谋ndonesia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Indonesia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚠馃嚛 *Datas for Indonesia:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "nl" || match[1] === "Nl" || match[1] === "NL" || match[1].includes('netherland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Netherlands").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚦馃嚤 *Datas for Netherlands:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));

}
else if (config.WORKTYPE == 'public') {

    Cutie.addCommand({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: false}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*鈻讹笍 ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*鈼€锔� ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*馃攷 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));
    Cutie.addCommand({pattern: 'detectlang$', fromMe: false, desc: dlang_dsc}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text)
        const msg = message.reply_message.text
        var ldet = lngDetector.detect(msg)
        async function upperfirstLetter(letter) {
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
        var cls1 = await upperfirstLetter(ldet[0][0])
        var cls2 = ldet[0][1].toString()
        var cls3 = await upperfirstLetter(ldet[1][0])
        var cls4 = ldet[1][1].toString()
        var cls5 = await upperfirstLetter(ldet[2][0])
        var cls6 = ldet[2][1].toString()
        var cls7 = await upperfirstLetter(ldet[3][0])
        var cls8 = ldet[3][1].toString()
        const res_1 = '*' + dlang_input + '* ' + '_' + msg + '_ \n'
        const res_2 = '*' + closer_res + '* ' + '_' + cls1 + '_\n*' + dlang_similarity + '* ' + '_' + cls2 + '_ \n\n'
        const res_3 = '```[ ' + dlang_other + ' ]```\n\n'
        const res_4 = '#2 *' + dlang_lang + '* ' + '_' + cls3 + '_\n*' + dlang_similarity + '* ' + '_' + cls4 + '_ \n'
        const res_5 = '#3 *' + dlang_lang + '* ' + '_' + cls5 + '_\n*' + dlang_similarity + '* ' + '_' + cls6 + '_ \n'
        const res_6 = '#4 *' + dlang_lang + '* ' + '_' + cls7 + '_\n*' + dlang_similarity + '* ' + '_' + cls8 + '_'
        const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
        await message.client.sendMessage(message.jid,rep_7,MessageType.text, { quoted: message.data });
    }));
    Cutie.addCommand({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: true}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));

    
    Cutie.addCommand({pattern: 'tts (.*)', fromMe: false, desc: Lang.TTS_DESC}, (async (message, match) => {

        if(match[1] === undefined || match[1] == "")
            return;
    
        let 
            LANG = 'ml',
            ttsMessage = match[1],
            SPEED = 1.0

        if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
            LANG = langMatch[1]
            ttsMessage = ttsMessage.replace(langMatch[0], "")
        } 
        if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
            SPEED = parseFloat(speedMatch[1])
            ttsMessage = ttsMessage.replace(speedMatch[0], "")
        }
    
        var buffer = await googleTTS.synthesize({
            text: ttsMessage,
            voice: LANG
        });
        await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
    }));

    Cutie.addCommand({pattern: 'song ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,config.SONGD,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,config.SONGU,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio,contextInfo: { forwardingScore: 2, isForwarded: true }, quoted: message.data, ptt: false});
            });
    }));

    Cutie.addCommand({pattern: 'video ?(.*)', fromMe: false, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    Cutie.addCommand({pattern: 'sing ?(.*)', fromMe: false, desc: Lang.SING_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SING,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
            });
    }));

    
    
    Cutie.addCommand({pattern: 'song ?(.*)', fromMe: false, desc: Lang.ISONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {filename: 'for iphone' + '.mp3', mimetype: 'audio/mpeg', quoted: message.data});
            });
    }));


    Cutie.addCommand({pattern: 'wiki ?(.*)', fromMe: false, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    Cutie.addCommand({pattern: 'img ?(.*)', fromMe: false, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        gis(match[1], async (error, result) => {
            for (var i = 0; i < (result.length < 8 ? result.length : 8); i++) {
                var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                var stream = get.buffer();
                
                stream.then(async (image) => {
                    await message.client.sendMessage(message.jid,image, MessageType.image);
                });
            }

            message.reply(Lang.IMG.format((result.length < 8 ? result.length : 8), match[1]));
        });
    }));

    Cutie.addCommand({ pattern: 'github ?(.*)', fromMe: false, desc: Glang.G陌THUB_DESC }, async (message, match) => {

        const userName = match[1]
 
        if (userName === '') return await message.client.sendMessage(message.jid, Glang.REPLY, MessageType.text)

        await axios
          .get(`https://videfikri.com/api/github/?username=${userName}`)
          .then(async (response) => {

            const {
              hireable,
              company,
              profile_pic,
              username,
              fullname, 
              blog, 
              location,
              email,
              public_repository,
              biografi,
              following,
              followers,
              public_gists,
              profile_url,
              last_updated,
              joined_on,
            } = response.data.result

            const githubscrap = await axios.get(profile_pic, 
              {responseType: 'arraybuffer',
            })

            const msg = `*${Glang.USERNAME}* ${username} \n*${Glang.NAME}* ${fullname} \n*${Glang.FOLLOWERS}* ${followers} \n*${Glang.FOLLOW陌NG}* ${following} \n*${Glang.B陌O}* ${biografi} \n*${Glang.REPO}* ${public_repository} \n*${Glang.G陌ST}* ${public_gists} \n*${Glang.LOCAT陌ON}* ${location} \n*${Glang.MA陌L}* ${email} \n*${Glang.BLOG}* ${blog} \n*${Glang.COMPANY}* ${company} \n*${Glang.H陌RE}* ${hireable === "true" ? Glang.H陌RE_TRUE : Glang.H陌RE_FALSE} \n*${Glang.JO陌N}* ${joined_on} \n*${Glang.UPDATE}* ${last_updated} \n*${Glang.URL}* ${profile_url}`

            await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Glang.NOT, MessageType.text),
          )
      },
    )

    Cutie.addCommand({pattern: 'lyric ?(.*)', fromMe: false, desc: Slang.LY_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));

    Cutie.addCommand({pattern: "covid ?(.*)", fromMe: false, desc: Clang.COV_DESC}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                    const resp = JSON.parse(ok.body);
                    await message.reply(`馃實 *World-Wide Results:*\n馃寪 *Total Cases:* ${resp.cases}\n鈽狅笍 *Total Deaths:* ${resp.deaths}\n鈿曪笍 *Total Recovered:* ${resp.recovered}`);
 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "tr" || match[1] === "Tr" || match[1] === "TR" || match[1].includes('turkiye') || match[1].includes('t眉rkiye') || match[1].includes('t眉rk') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Turkey").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚬馃嚪 *T眉rkiye 陌莽in Sonu莽lar:*\n馃樂 *Toplam Vaka:* ${resp.cases}\n馃彞 *G眉nl眉k Hasta:* ${resp.todayCases}\n鈿帮笍 *Toplam 脰l眉:* ${resp.deaths}\n鈽狅笍 *G眉nl眉k 脰l眉:* ${resp.todayDeaths}\n馃拪 *Toplam 陌yile艧en:* ${resp.recovered}\n馃樂 *Aktif Vaka:* ${resp.active}\n馃啒 *A臒谋r Hasta:* ${resp.critical}\n馃И *Toplam Test:* ${resp.totalTests}`);
                });
            } catch (err) {
                await message.reply(`Bir Hata Olu艧tu, 陌艧te Hata : \n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1] === "america" || match[1] === "America") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚭馃嚥 *Datas for USA:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "de" || match[1] === "De" || match[1] === "DE" || match[1] === "Germany" || match[1] === "germany" || match[1].includes('deutschland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Germany").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚛馃嚜 *Daten f眉r Deutschland:*\n馃樂 *F盲lle 陌nsgesamt:* ${resp.cases}\n馃彞 *T盲gliche F盲lle:* ${resp.todayCases}\n鈿帮笍 *Totale Todesf盲lle:* ${resp.deaths}\n鈽狅笍 *T盲gliche Todesf盲lle:* ${resp.todayDeaths}\n馃拪 *Insgesamt Wiederhergestellt:* ${resp.recovered}\n馃樂 *Aktuelle F盲lle:* ${resp.active}\n馃啒 *Kritische F盲lle:* ${resp.critical}\n馃И *Gesamttests:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "az" || match[1] === "AZ" || match[1] === "Az" || match[1].includes('azerbaycan') || match[1].includes('azeri') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Azerbaijan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚘馃嚳 *Az蓹rbaycan 眉莽眉n m蓹lumatlar:*\n馃樂 *脺mumi Ba艧 Tutan Hadis蓹:* ${resp.cases}\n馃彞 *G眉nl眉k X蓹st蓹:* ${resp.todayCases}\n鈿帮笍 *脺mumi 脰l眉m:* ${resp.deaths}\n鈽狅笍 *G眉nl眉k 脰l眉m:* ${resp.todayDeaths}\n馃拪 *脺mumi Sa臒alma:* ${resp.recovered}\n馃樂 *Aktiv X蓹st蓹 Say谋:* ${resp.active}\n馃啒 *A臒谋r X蓹st蓹 Say谋:* ${resp.critical}\n馃И *脺mumi Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "uk" || match[1] === "Uk" || match[1] === "UK" || match[1] === "United" || match[1].includes('kingdom') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/UK").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚞馃嚙 *Datas for UK:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "in" || match[1] === "谋n" || match[1] === "In" || match[1] === "陌n" || match[1] === "陌N" ||  match[1] === "IN" || match[1] === "india" || match[1] === "India" || match[1].includes('indian') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/India").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚠馃嚦 *啶ぞ啶班い 啶曕 啶侧た啶� 啶∴啶熰ぞ:*\n馃樂 *啶曕啶� 啶ぞ啶げ啷�:* ${resp.cases}\n馃彞 *啶︵啶ㄠた啶� 啶ぞ啶げ啷�:* ${resp.todayCases}\n鈿帮笍 *啶曕啶� 啶啶む啶�:* ${resp.deaths}\n鈽狅笍 *啶班啶� 啶曕 啶啶�:* ${resp.todayDeaths}\n馃拪 *啶曕啶� 啶ぐ啶距ぎ啶�:* ${resp.recovered}\n馃樂 *啶忇啷嵿啶苦さ 啶曕啶�:* ${resp.active}\n馃啒 *啶椸啶啶� 啶ぞ啶げ啷�:* ${resp.critical}\n馃И *啶曕啶� 啶熰啶膏啶�:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "cn" || match[1] === "Cn" || match[1] === "CN" || match[1].includes('china') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/China").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚚馃嚦 *Datas for China:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "gr" || match[1] === "Gr" || match[1] === "GR" || match[1].includes('greek') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Greece").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚞馃嚪 *Datas for Greece:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "fr" || match[1] === "Fr" || match[1] === "FR" || match[1].includes('france') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/France").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚝馃嚪 *Datas for France:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "jp" || match[1] === "Jp" || match[1] === "JP" || match[1].includes('japan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Japan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚡馃嚨 *Datas for Japan:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });
 
            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "kz" || match[1] === "Kz" || match[1] === "KZ" || match[1].includes('kazakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Kazakhstan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚢馃嚳 *Datas for Kazakhstan:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "pk" || match[1] === "Pk" || match[1] === "PK" || match[1].includes('pakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Pakistan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚨馃嚢 *Datas for Pakistan:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "ru" || match[1] === "Ru" || match[1] === "RU" || match[1].includes('russia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Russia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚪馃嚭 *Datas for Russia:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "id" || match[1] === "陌d" || match[1] === "陌D" || match[1] === "谋d" || match[1] === "Id" || match[1] === "ID" || match[1].includes('谋ndonesia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Indonesia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚠馃嚛 *Datas for Indonesia:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "nl" || match[1] === "Nl" || match[1] === "NL" || match[1].includes('netherland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Netherlands").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`馃嚦馃嚤 *Datas for Netherlands:*\n馃樂 *Total Cases:* ${resp.cases}\n馃彞 *Daily Cases:* ${resp.todayCases}\n鈿帮笍 *Total Deaths:* ${resp.deaths}\n鈽狅笍 *Daily Deaths:* ${resp.todayDeaths}\n馃拪 *Total Recovered:* ${resp.recovered}\n馃樂 *Active Cases:* ${resp.active}\n馃啒 *Critical Cases:* ${resp.critical}\n馃И *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));
    
}
