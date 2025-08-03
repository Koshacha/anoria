import TelegramBot from 'node-telegram-bot-api'

export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig();

  if (!config.botToken) {
    // eslint-disable-next-line no-console
    console.warn('Telegram bot token is not defined.');
    nitroApp.$telegram = null;
    return;
  }

  const bot = new TelegramBot(config.botToken)

  const telegram = {
    send: async (message: string, chatId?: string) => {
      const _chatId = chatId || config.chatId;


      console.log(config.botToken, message, _chatId);

      if (!_chatId) {
        // eslint-disable-next-line no-console
        console.warn('Telegram chat id is not defined.')
        return;
      }

      try {
        await bot.sendMessage(_chatId, message, { parse_mode: 'HTML' });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('Failed to send message to Telegram.', error);
      }
    },
  }

  nitroApp.$telegram = telegram;
})