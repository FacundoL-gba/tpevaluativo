import { Injectable } from '@angular/core';
import { firebaseCodeerrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }
  codeError(code: string) {
    switch(code) {
      case firebaseCodeerrorEnum.EmailAlreadyInUse:
        return 'El email ya esta registrado';
      case firebaseCodeerrorEnum.WeakPassword:
        return 'La contraseña es muy debil';
      case firebaseCodeerrorEnum.InvalidEmail:
        return 'Correo no valido';
      case  firebaseCodeerrorEnum.WrongPassword:
        return 'La contraseña es incorrecta';
      case firebaseCodeerrorEnum.UserNotFound:
        return 'El usuario no esta registrado';
      default:
        return 'Error desconocido'
    }
  }
}