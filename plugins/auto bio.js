/* Copyright (C)  2020  ThesanduT

 */

const Cutie = require('../events');

const config = require('../config');

const Heroku = require('heroku-client');

const heroku = new Heroku({

  token: config.HEROKU.API_KEY

});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;

var rashi_desc = ''

var OFF = ''

var ON = ''

if (config.LANG == 'EN') {

  rashi_desc = 'change Auto bio mode'

  OFF = 'ðð®ð­ð¨ ðð¢ð¨ ðððð­ð®ð«ð ð¬ð®ðððð¬ð¬ðð®ð¥ð¥ð² ð¬ð¡ð®ð­ðð¨ð°ð§ðð \n          ð©ð¥ððð¬ð ð°ðð¢ð­ ððð° ð¦ð¢ð§ð®ð­ð'

  ON = 'ðð®ð­ð¨ ðð¢ð¨ ðððð­ð®ð«ð ð¬ð®ðððð¬ð¬ðð®ð¥ð¥ð² ð¨ð©ðð§ðð \n          ð©ð¥ððð¬ð ð°ðð¢ð­ ððð° ð¦ð¢ð§ð®ð­ð'

}

if (config.LANG == 'ML') {

  rashi_desc = 'Auto bio mode off'

  OFF = '*AUTO BIO OFF*'

  ON = '*AUTO BIO ON*'

}

Cutie.addCommand({ pattern: 'autobio ?(.*)', fromMe: true, desc: rashi_desc, usage: '.autobio on / off' }, (async (message, match) => {

  if (match[1] == 'off') {

    await heroku.patch(baseURI + '/config-vars', {

      body: {

                        ['AUTO_BÄ°O']: 'false'

      }

    });

    await message.sendMessage(OFF)

  } else if (match[1] == 'on') {

    await heroku.patch(baseURI + '/config-vars', {

      body: {

                        ['AUTO_BÄ°O']: 'true'

      }

    });

    await message.sendMessage(ON)

  }

}));
