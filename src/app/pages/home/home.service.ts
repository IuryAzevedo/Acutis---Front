import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  getWelcomeMessage(): Observable<string> {
    return of('Bem-vindo ao Acutis!');
  }

  getDescription(): Observable<string> {
    return of('Sua plataforma de gerenciamneto de usuários de agências bancárias.');
  }
  
}
