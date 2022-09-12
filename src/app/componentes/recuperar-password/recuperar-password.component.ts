import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@Angular/fire/compat/auth';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/service/firebase-code-error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(    
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService) {
      this.recuperarUsuario = this.fb.group({
        correo: ['', [Validators.required, Validators.email]]
      })
     }

  ngOnInit(): void {
  }
  recuperar() {
    const email = this.recuperarUsuario.value.correo;
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      alert('Le enviamos un correo para recuperar su contraseña');
      this.router.navigate(['/login']);
    }).catch ((error) => {
      this.loading = false;
      alert(this.firebaseError.codeError(error.code));
    })
  }

}
