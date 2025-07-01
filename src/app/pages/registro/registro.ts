import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.scss'
})
/**
 * @description
 * Componente de registro de usuarios.
 * 
 * Este componente permite a los usuarios registrarse llenando un formulario
 * validado de forma reactiva. Al enviarse, los datos se almacenan en `localStorage`
 * y se redirige al inicio si el registro es exitoso.
 */
export class Registro  implements OnInit{
  registroForm: FormGroup;
  usuarios: any[] = [];
  submitted = false;
  
  

  constructor(private fb: FormBuilder, private router: Router ) {
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', Validators.required],
      birthdate: [''],
      phone: [''],
    });

    if (typeof localStorage !== 'undefined') {
      const usuariosGuardados = localStorage.getItem('usuarios');
      this.usuarios= usuariosGuardados ? JSON.parse(usuariosGuardados) : [];
    }
  }

  ngOnInit(): void {}


  // METODO DE REGISTRO DE USUARIOS CON LOCALSTORAGE/////////////////////////////////

  /**
 * Registra un nuevo usuario si no existe uno con el mismo email o username.
 *
 * @param email Correo electrónico del usuario.
 * @param name Nombre completo del usuario.
 * @param password Contraseña del usuario.
 * @param username Nombre de usuario único.
 * @param birthdate Fecha de nacimiento.
 * @param phone Número de teléfono.
 * @returns `true` si el usuario fue registrado con éxito, `false` si ya existía.
 */

  registrarUsuario(email: string, name: string, password: string, username: string, birthdate: string, phone: string): boolean {
    const usuarioExistente = this.usuarios.find(usuario => usuario.email === email || usuario.username === username);
    if (usuarioExistente) {
      alert('El usuario ya existe.');
      return false;
    }

    const nuevoUsuario = { email, name, password, username, birthdate, phone};
    this.usuarios.push(nuevoUsuario);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
    }
    alert('Usuario registrado exitosamente.');
    return true;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registroForm.valid) {
      const { email, name, password, repeatPassword, username, birthdate, phone } = this.registroForm.value;
      if (password !== repeatPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }
      const registroExitoso = this.registrarUsuario(email, name, password, username, birthdate, phone);
      if (registroExitoso) {
        this.registroForm.reset();
        this.router.navigate(['/']);
        this.submitted = false;
      }
    }
  }


}
