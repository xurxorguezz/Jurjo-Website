module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    const queue = bot.distube.getQueue(message)
    if (!queue) return message.channel.send(`${bot.emotes.error} | There is nothing playing!`)
    let mode = null
    switch (args[0]) {
      case "off":
          mode = 0
          break
      case "song":
          mode = 1
          break
      case "queue":
          mode = 2
          break
    }
    mode = bot.distube.setRepeatMode(message, mode)
    mode = mode ? mode === 2 ? "Repeat queue" : "Repeat song" : "Off"
    message.channel.send(`${bot.emotes.repeat} | Set repeat mode to \`${mode}\``)
}

module.exports.config = {
    name: "repeat",
    aliases: ["loop","rp"]
}
