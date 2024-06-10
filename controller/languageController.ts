"use client";

import { EventService } from "@/services/eventService";

export type languageType = "en" | "pt";

export enum languageEnum {
  english = "en",
  portuguese = "pt",
}

export class LanguageController {
  private eventService = new EventService();

  constructor() {
    this.eventService.on("languageChanged", (language: languageType) => {
      console.log(`Language changed to: ${language}`);
      this._chosedLanguage = language;
    });
  }

  private _chosedLanguage: languageType = languageEnum.portuguese;

  get chosedLanguage(): languageType {
    return this._chosedLanguage;
  }
}
