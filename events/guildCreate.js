const Guild = require("../utils/database.js");
const logger = require("../utils/logger.js");
const misc = require("../utils/misc.js");
const client = require("../utils/client.js");

// run when the bot is added to a guild
module.exports = async (guild) => {
  logger.log("info", `[GUILD JOIN] ${guild.name} (${guild.id}) added the bot. Owner: ${client.users.get(guild.ownerID).username}#${client.users.get(guild.ownerID).discriminator} (${guild.ownerID})`);
  const guildDB = new Guild({
    id: guild.id,
    tags: misc.tagDefaults,
    prefix: "&"
  });
  await guildDB.save();
};
