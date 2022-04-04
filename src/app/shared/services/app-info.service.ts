import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Prueba Angular Pedro Colorado';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
