// settings.js
// credit by XP个BE_RAHM 

const config = require('./setting/config');


const settings = {
  SESSION_ID: config.SESSION_ID || "", // enter session id
  ownername: config.ownername || "XP个BE_RAHM", // Owner name
  botname: config.botname || "XP个BE_RAHM", // custom bot name
  prefa: config.prefa || ['.', '!'], // Command prefixes
  owner: config.owner || ["9374734595"] // Owner phone numbers
};

// Export settings for use in other modules
module.exports = settings;

// Watch for changes to this file and reload if updated
const fs = require('fs');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
  delete require.cache[file];
  require(file);
});
