import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recupera-pass',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './recupera-pass.html',
  styleUrl: './recupera-pass.scss'
})
export class RecuperaPass {

  enviarCorreo(form: any) {

    if (form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Correo inválido',
        text: 'Debes ingresar un correo electrónico válido.',
        confirmButtonColor: '#dc3545'
      });
      return;
    }

    const emailIngresado = form.value.email;

    Swal.fire({
      icon: 'success',
      title: 'Correo enviado',
      text: `El enlace para recuperar tu contraseña fue enviado a: ${emailIngresado}`,
      confirmButtonColor: '#28a745'
    });

  }
}
