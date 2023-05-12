const { EmbedBuilder, Client, CommandInteraction } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'a Command to Get Information of All the Commands.',
    // ownerOnly: true, -> Optional
    /**
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
    run: async (client, interaction, args) => {
        const embed = new EmbedBuilder()
            .setTitle("Help Menu Of \**Ticket System x64\**")
            .setDescription(" Currently, There is Only 2 Commands in This Bot. ")
            .setFields([
                { name: '🎫 \**Setup-Ticket\**', value: '\`A Command To Setup The Ticket Panel.\`' },
                { name: ':reminder_ribbon: \**Ping\**', value: '\`A Command to Check The Latency Of The Bot\`'}
                
            
            ])
        interaction.reply({
            embeds: [embed]
        })
    }
}