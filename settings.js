
global.owner = [
  ["6285648514679"],
]; 

global.numberbot = "6285648514679";
global.nameowner = "Krey";
global.nomorown = "6285648514679";

/*Ini Isi dengan Payment kalian masing masing*/
global.dana = "6281252983184";
global.pulsa = "6285608053803";
global.ovo = "6285608053803";

/*Apa Itu apikey ??*/
global.APIs = {};
global.APIKeys = {};
global.ocrapi = "314b4b8b2d88957";
global.skizo = "Your_Apikey" //ganti your_apikey dengan apikey kalian 

//Other Settings
global.namebot = "Kreybot Pluginpair";
global.title = "Kreybot PluginPair"
global.sgc = "https://chat.whatsapp.com/CTOHHnQ8KWqEhUWNB3qUxb";
global.isPairing = true; //Mau pake pairing? true = idup, false = mati
global.sig = "https://chat.whatsapp.com/CnkVILeaMQP6v1c5xS9nvq";
global.swa = "wa.me/6281252983184";
global.version = "5.0";
global.access_denied = "https://telegra.ph/file/4a727b4148415100fc260.jpg";

global.wm = "Kreybot WhatsApp";
global.done = "```© Kreybot```";
global.icon = "https://telegra.ph/file/4a727b4148415100fc260.jpg";
global.fla = "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=";
global.wait = "```Tunggu Sebentar⌛```";
global.eror = "`! Error Command Failed`";
global.packname = "© Kreybot";
global.author = "Made by Krey";
global.bayar = "money"
//Ini Isi pakai video & poto lu
global.gif = "https://telegra.ph/file/4a727b4148415100fc260.jpg"; 
global.thumb = "https://telegra.ph/file/4a727b4148415100fc260.jpg";

global.multiplier = 45;
global.sourceurl = 'https://google.com'

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: "✉️",
      money: "💵",
      potion: "🥤",
      diamond: "💎",
      common: "📦",
      uncommon: "🎁",
      mythic: "🗳️",
      legendary: "🗃️",
      pet: "🎁",
      sampah: "🗑",
      armor: "🥼",
      sword: "⚔️",
      kayu: "🪵",
      batu: "🪨",
      string: "🕸️",
      kuda: "🐎",
      kucing: "🐈",
      anjing: "🐕",
      petFood: "🍖",
      gold: "👑",
      emerald: "💚",
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};

const Jimp = require('jimp');
const fetch = require('node-fetch');

let resizeThumb =  resize(thumb, 300, 250)
global.Thumbnails = resizeThumb;

/*====[ FAKE THUMBNAIL ACCESS DENIED ]======*/

global.danied = {
  contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: false,
    
    forwardingScore: 256,
    externalAdReply: {
      title: `[ x ] Your Acces has Danied`,
      body: null,
      thumbnailUrl: access_denied,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}

/*========[ GLOBAL ADREPLY ]============*/
global.adReply = {
  contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '',
      newsletterName: "🔴 FOLLOW ME ON CHANNEL",
      serverMessageId: -1
    },
    forwardingScore: 256,
    externalAdReply: {
      title: `Kreybot Pluginpair🤖`,
      body: wm,
      thumbnailUrl: thumb,
      sourceUrl: "",
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}

/*=========[ FAKE IG ( SMALL AD REPLY ) ]==============*/

global.fakeig = {
  contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363198449115557@newsletter',
      newsletterName: "🔴 FOLLOW ME ON CHANNEL",
      serverMessageId: -1         
    },
    forwardingScore: 256,
    externalAdReply: {
      title: `Kreybot Pairing Whatsapp Bot`,
      body: wm,
      thumbnailUrl: icon,
      sourceUrl: "",
      mediaType: 1,
      renderLargerThumbnail: false
    }
  }
}

async function resize(url, width, height, referer = null) {
  try {
    const fetchOptions = {
      redirect: 'follow',
      headers: {},
    };

    if (referer) {
      fetchOptions.headers['Referer'] = referer;
    }

    const response = await fetch(url, fetchOptions);

    if (response.ok) {
      const finalUrl = response.url;
      const arrayBuffer = await response.arrayBuffer();
      return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error.message);

    try {
      const undiciFetchOptions = {
        redirect: 'follow',
        headers: {},
      };

      if (referer) {
        undiciFetchOptions.headers['Referer'] = referer;
        }

      const arrayBuffer = await undiciFetch(url, undiciFetchOptions).then(response => response.arrayBuffer());
      return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));
    } catch (retryError) {
      console.error('Retry Error:', retryError.message);
      return Buffer.from([]);
    }
  }
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

let fs = require('fs');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update settings.js");
  delete require.cache[file];
  require(file);
});
