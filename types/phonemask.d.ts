declare module "@zoibana/phonemask" {
  export default class ZoibanaPhonemask {
    constructor(selector: string | HTMLElement);

    stripNonDigits(str: string);

    isRussianNumber(digits: string);

    formatPhoneNumber(digits: string);

    findCursorPos(formatted: string, digitCount: number);

    initEventsOnElement(el: HTMLElement);

    onPaste(e: ClipboardEvent);

    onInput(e: InputEvent);

    onKeyDown(e: KeyboardEvent);
  }
}
