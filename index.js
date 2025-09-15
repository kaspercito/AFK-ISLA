const { Client, GatewayIntentBits } = require('discord.js');
const schedule = require('node-schedule');

// Configura el cliente de Discord con los intents necesarios
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Configuración
const CHANNEL_ID = '1417273487092875396'; // Reemplaza con el ID del canal de Discord
const BELENCITA_ID = '1023132788632862761'; // Reemplaza con el ID de usuario de Belencita

// Evento: Bot listo
client.on('ready', () => {
  console.log(`¡Bot está listo para la AFK ISLA! 🥗`);
});

// Programar el mensaje para las 00:00 ARG (UTC-3) o 16:10 ECT para prueba
const job = schedule.scheduleJob('0 10 16 9 2025', async () => {
  try {
    const channel = await client.channels.fetch(CHANNEL_ID);
    if (!channel) {
      console.error('¡Error, pana! No se encontró el canal con ID:', CHANNEL_ID);
      return;
    }

    // Mensaje de cumpleaños para el grupo
    const message = `
🎉 **¡HOY ES EL CUMPLEAÑOS DE BELENCITA!** 🎂💜  
<@${BELENCITA_ID}> ¡Llegó tu día, querida JEFA! ✨  
Sos una persona súper especial, con un brillo increíble que ilumina a todo el grupo. Estamos re felices de celebrar contigo y de verte brillar siempre. 😎 Gracias por ser tan bacán y llenarnos de alegría con tu energía única. 🧉🌱  

Hoy es un día para festejar a lo grande, porque sos lo máximo, Belencita. ¡Que este cumpleaños esté lleno de amor, risas y momentos inolvidables! 🥳 Todos en el grupo te deseamos lo mejor, ¡sos la mujer más hermosa del mundo! 😊  

🎈 **¡A festejar, panas!** Mándale tus mejores deseos a Belencita hoy. 🎁
    `;

    await channel.send(message);
    console.log('¡Mensaje enviado al canal para Belencita, pura magia! 🎈');
  } catch (error) {
    console.error('¡Error al enviar el mensaje, pana!', error);
  }

  client.login(process.env.DISCORD_TOKEN);
});
