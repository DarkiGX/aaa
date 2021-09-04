const express = require('express');
const app = express();
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(
		`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
	);
	response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
var token = config.token;
var prefix = config.prefix;

bot.login('./config.json');

const code = require('./code.json');
const reply = require('./reply.json');
const dm_send = require('./dm_send.json');


const sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};
const msgs = [
    "5 money no topo!",
    "Feito com ❤ por Darko haha.#0010",
    "Meu prefixo é 5!",
    "Não use meus comandos fora do chat de comandos",
];

bot.on('ready', async () => {
  console.log(`Bot iniciado e online em ${bot.guilds.cache.size} servidores!`);
    while (1) {
        bot.user.setActivity(msgs[Math.floor(Math.random() * msgs.length)], { type: "PLAYING"});
        await sleep(30000);
    }


  

  function st() {
    let rs = status[Math.floor(Math.random() * status.length)];
    bot.user.setPresence({ game: rs });
  }
  st();
  setInterval(() => st(), 5000); //25000 = 25Ms = 25 segundos
  });


bot.on('message', message => {
	if (message.channel.type == 'dm') return;
	responseObject = reply;
	if (responseObject[message.content]) {
		message.reply(responseObject[message.content]);
	}

	responseObject = dm_send;
	if (responseObject[message.content]) {
		message.author.send(responseObject[message.content]);
	}

responseObject = code;
	if (responseObject[message.content]) {
		message.author.send(responseObject[message.content]);
  }

	if (message.content.includes(bot.user.id)) {
		message.reply(
			'**meu prefixo é `5!`, use `5!help` para obter mais ajuda.**'
		);
	}

	////////

	bot.on('message', message => {
		if (message.author.bot) return;
		if (!message.content.startsWith(prefix)) return;
		let command = message.content.split(' ')[0];
		command = command.slice(prefix.length);
		let args = message.content.split(' ').slice(1);
		try {
			let commandFile = require(`./comandos/${command}.js`);
			commandFile.run(bot, message, args);
		} catch (err) {
			if (err.code == 'MODULE_NOT_FOUND') return;
			console.error(err);
		}
	});

	if (message.content.startsWith(`oi`)) {
		message.reply(
			`**olá**`
		);
	}

	if (message.content.startsWith(`Oi`)) {
		message.reply(
			`**olá**`
		);
	}

  if (message.content.includes(`desbanir de um server`)) {
		message.reply(
			`**caso queira remover algum banimento, basta entrar na call "aguardando suporte" e esperar um suporte te atender.**`
		);
	}

   if (message.content.includes(`ban de um server`)) {
		message.reply(
			`**caso queira remover algum banimento, basta entrar na call "aguardando suporte" e esperar um suporte te atender. Da uma olhada no <#833042454407544923>**`
		);
	}

  if (message.content.includes(`hack de fivem`)) {
		message.reply(
			`**aqui vendemos hacks para Fivem! Da uma conferida no canal <#867927448677941298>.**`
		);
	}

  if (message.content.includes(`custa pra desbanir`)) {
		message.reply(
			`**caso queira remover algum banimento, basta entrar na call "aguardando suporte" e esperar um suporte te atender. Da uma olhada no <#833042454407544923>**`
		);
	}

  if (message.content.includes(`desbanir uma conta de um server`)) {
		message.reply(
			`**caso queira remover algum banimento, basta entrar na call "aguardando suporte" e esperar um suporte te atender. Da uma olhada no <#833042454407544923>**`
		);
	}

  if (message.content.includes(`comprar conta`)) {
    message.reply(
    `**fale com o <@851006923776196629> ou <@348511767455858688>**.`
    );
  }

   if (message.content.includes(`compro conta`)) {
    message.reply(
    `**fale com o <@851006923776196629> ou <@348511767455858688>**.`
    );
  }

  if (message.content.includes(`bot`)) {
		message.reply(
			`**me chamou? Sou um. :flushed: **`
		);
	}




});



bot.login(config.token);
