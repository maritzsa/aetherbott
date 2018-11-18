const discord = require ('discord.js');

var client = new discord.Client();

var fs = require("fs");

var commandList = fs.readFileSync ("./aetherbot/Commands.txt", {"encoding": "utf-8"});

client.on ("ready", () => {
    console.log ("ready!!");

    client.user.setActivity ("Not Streaming LUL");

});

var prefix = "."

client.on ("message", (message) => {

    if (message.content.includes ("sub")) {
        message.channel.send ('*You ugly scrubmuffins Cx*');
    }
    if (message.content.includes ("streamer")) {
        message.channel.send ("*Hi, my name is Aether! I am 16 years old and aspiring to be in OWL. I play tanks and I have peaked 3738.*");
    }
    
    if (message.content.startsWith (prefix + "volume") || (message.content.startsWith (prefix + "sound"))) {
        message.channel.send ('*Just turn on your volume*');
    }

    if (message.content.startsWith (prefix + "nevets")) {
        message.channel.send ('*Effing tracer one tricks*');
    }

      //   if (message.content.startsWith (prefix + "nip")) {
       // message.channel.send ( {files: ["./aetherbot/aethergif/aetherbass.gif"]} )
    // }

    if (message.content.startsWith ( prefix + "maritza")) {
        message.channel.send ('*STOP HACKING ME!*');
    }

    if (message.content.startsWith (prefix + "help")) {
        message.channel.send (commandList)
    }

    if (message.content.startsWith (prefix + "fallen")) {
        message.channel.send ('*o7 REPORTING FOR DUTY, Sergeant Meehoff!!*');
    }

    if (message.content.startsWith (prefix + "hey")) {
        number = 5;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1
        switch (random) {
            case 1: message.channel.send ("*Howdy partner!*"); break;
            case 2: message.channel.send ("*Hey! How y'all doing?*"); break;
            case 3: message.channel.send ("*Hey!*"); break;
            case 4: message.channel.send ("*Heya brother!*"); break;
            case 5: message.channel.send ("*Sup young man!*"); break;
        }   
    }
    
    if (message.content.includes ("she is so pretty") || (message.content.includes ("she's so pretty"))) {
        message.channel.send ("*That's one fine lady if I've ever seen one!*");
    }
    

   
    
}); 



client.login (process.env.token);
