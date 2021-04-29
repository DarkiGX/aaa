const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
bot.config = config;

const reply = require('./reply.json');
const dm_send = require('./dm_send.json');

bot.on('ready', () => {
    console.log('Bot iniciado');
	let counting = 0;
	setInterval(function() {
        bot.user.setActivity(`Os ${bot.users.cache.size} clientes na loja`, {type: 'WATCHING'}),
        bot.user.setActivity('Meu prefixo é cs!', {type: 'PLAYING'}), 
        bot.user.setActivity('Os pedidos dos clientes', {type: 'LISTENING'});
    }, 10 * 40);
});

bot.on('message', message => {
    if (message.channel.type == "dm") return;
    responseObject = reply;
    if(responseObject[message.content]){
        message.reply(responseObject[message.content]);
    }

    responseObject = dm_send;
    if(responseObject[message.content]){
        message.author.send(responseObject[message.content]);
    }

    if(message.content.includes(bot.user.id)){
        message.reply('**meu prefixo é `cs!`, use `cs!help` para obter mais ajuda.**');
    }

    if(message.content.startsWith(`cs!sent`)){
        message.channel.send(`<a:AprovadoCYStore:805968869490556979> **Olá <@255664725931720705>, a equipe Cyber Store informa que recebeu o seu pedido! Estamos trabalhando para realizar a entrega o mais rápido possível:**\n ⠀\n> <a:BalesCYStore:805968715371773953> **__Data mínima de entrega: 08/02/2021__**\n ⠀\n> <a:BalesCYStore:805968715371773953> **__Data máxima de entrega: 12/02/2021__**\n ⠀\n*A Cyber Store agradece o seu pedido, de **Nitro Gaming Mensal**! Ele será entregue o quanto antes. Informamos que você será comunicado por <@469947979252367361> no momento que deve fazer o pagamento.*\n \n> *confirme a leitura clicando no emoji:*`)
    }
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.cache.get('798583907502915584').send(member.user.tag + ' Seja bem vindo(a), te desejo boas compras! Veja a mensagem que te enviei na dm :wink:');
    member.send('Seja bem vindo (a) a Cyber Store, estou aqui para te ajudar! \n \n> <a:AprovadoCYStore:805968869490556979> **Leia o <#798583910405505065> e as <#814560364616220702>, informações importantes aqui!**')
});

bot.login(config.token);
