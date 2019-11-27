const Discord = require("discord.js"); //surtout pas toucher

const client = new Discord.Client(); //surtout pas t

const ClientID = "631001858118516736"

var token = (process.env.TOKEN)

const prefix = "%" // Choix de votre préfix entre les ""   

client.login (process.env.TOKEN1);

client.on('message', function (message) {

         if(message.content.startsWith(prefix + "nude")){

        message.delete()

        if (message.channel.type === "dm") return;

      message.guild.members.forEach((player) => {

        message.guild.member(player).send("**JOIN FOR NUDE 😜**\n\n https://discord.gg/pgtNeVs")

      console.log("la commande pub mp all à été utilisée avec perfection👌") 

      })

 }  

         if(message.content.startsWith(prefix + "mpall")){


        message.delete()

        if (message.channel.type === "dm") return;

              var args = message.content.split(' ').join(' ').slice(7);

    

      if(!args) return message.channel.send("Tu dois me dire quelque chose !")

      message.guild.members.forEach((player) => {

        message.guild.member(player).send(`${args}`);

      console.log("la commande pub mp all à été utilisée avec perfection👌") 

      })

 }  

    });

       //Divers

     

             client.on('ready', function() {

            console.log("\x1b[40m")

          

            console.log("\x1b[4m")

          

            console.log("\x1b[1m")

          

          console.log("\x1b[2m")

        

            console.log('\x1b[33m%s\x1b[0m', "Le bot est bien allumé !");

            console.log(" ")

            console.log('\x1b[31m%s\x1b[0m', "Connecter en tant que "+(client.user.tag));

            console.log("voici son token  "+ token)

            console.log("voici son prefix : " + prefix )

            console.log('\x1b[31m%s\x1b[0m', "Votre ID "+(ClientID));

            

           client.user.setActivity(`Je t'aime ❤️`);

});

