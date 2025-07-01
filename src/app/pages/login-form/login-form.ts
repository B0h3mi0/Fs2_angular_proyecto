import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var bootstrap: any;

/**
 * @description Login este componente nos permitira verificar si un usuario ya se encuentra registrado.
 * - Funcion iniciarSesion nos permitira buscar en el localStorage si el email op nombre de usuario ya se encuentra registrado.
 *
 * @param emailOrUsername Correo electrónico/nombre de usuario del usuario.
 * @param password Contraseña del usuario.
 * @returns `true` si el usuario inisio sesion con éxito, `false` si las credeciales no coinciden.
 */


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss'
})
export class LoginForm implements OnInit{
  
  isLoggedIn = false;  
  loginForm!: FormGroup;
  usuarios: any[] = [];

  constructor(private fb: FormBuilder, private router: Router, private el: ElementRef){

    if(typeof localStorage !== 'undefined') {
      const usuariosGuardados = localStorage.getItem('usuarios');
      this.usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];
    }
  }
    ngOnInit() {
      this.loginForm = this.fb.group({
        emailOrUsername: ['',Validators.required],
        password: ['',Validators.required]
      });
    } 

    iniciarSesion(emailOrUsername: string, password: string): boolean{
      const usuario = this.usuarios.find(user=>(user.email=== emailOrUsername || user.username === emailOrUsername) && user.password === password);
      if(usuario) {
        this.showToast('Inicio de sesion exitoso' , 'success')
        this.router.navigate(['/home']);
        return true;
      }
      else {
        this.showToast('Email/Usuario O contraseña incorrecta.','danger');
        return false;
      }
    }

    onSubmit() {
    if (this.loginForm.valid) {
      const emailOrUsernameControl = this.loginForm.get('emailOrUsername');
      const passwordControl = this.loginForm.get('password');
      
      if (emailOrUsernameControl && passwordControl) {
        const emailOrUsername = emailOrUsernameControl.value;
        const password = passwordControl.value;


        const inicioExitoso = this.iniciarSesion(emailOrUsername, password);
        if (inicioExitoso) {
          this.loginForm.reset();
        }
      } else {
        console.error('Form controls are missing');
        this.showToast('Formulario no válido.', 'danger');
      }
    } else {
      this.showToast('Formulario no válido.', 'danger');
    }
  }

  navigateToRegister() {
    this.router.navigateByUrl('/registro').then(() => {
      window.location.reload();
    });
  }

  showToast(message: string, type: 'success' | 'danger') {
    const toastContainer = this.el.nativeElement.querySelector('#toast-container');
    const toastElement = document.createElement('div');
    toastElement.className = `toast align-items-center text-bg-${type} border-0`;
    toastElement.role = 'alert';
    toastElement.ariaLive = 'assertive';
    toastElement.ariaAtomic = 'true';
    toastElement.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">
          ${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;
    toastContainer.appendChild(toastElement);

    const toastBootstrap = new bootstrap.Toast(toastElement);
    toastBootstrap.show();

    setTimeout(() => {
      toastBootstrap.hide();
      toastElement.remove();
    }, 3000);
  }

  
}


