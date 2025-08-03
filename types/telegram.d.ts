declare module 'nitropack' {
  interface NitroApp {
    $telegram: {
      send(message: string, chatId?: string): Promise<void>
    }
  }
}

export {}
