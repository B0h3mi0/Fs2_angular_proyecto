import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-R2WPECNJ.js";
import {
  Router,
  RouterLink,
  init_router
} from "./chunk-TBBESG4B.js";
import {
  CommonModule,
  init_common
} from "./chunk-G3ED4NYO.js";
import {
  Component,
  ElementRef,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W4OZRNLH.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\login-form\login-form.html
var login_form_default;
var init_login_form = __esm({
  "angular:jit:template:src\\app\\pages\\login-form\\login-form.html"() {
    login_form_default = '<div  class="row align-items-center justify-content-center">\r\n\r\n        <!-- Carrusel -->\r\n    <div class="col-12 col-md-6 mb-4 mb-md-0">\r\n        <div id="carouselLogin" class="carousel slide carrusel-contenedor" data-bs-ride="carousel">\r\n        <div class="carousel-inner">\r\n            <div class="carousel-item active">\r\n            <img src="images/registro.jpg" class="d-block w-100 carrusel-imagen" alt="..." />\r\n            </div>\r\n            <div class="carousel-item">\r\n            <img src="images/juegos.jpg" class="d-block w-100 carrusel-imagen" alt="..." />\r\n            </div>\r\n            <div class="carousel-item">\r\n            <img src="images/rol_juego.jpg" class="d-block w-100 carrusel-imagen" alt="..." />\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Formulario de inicio de sesi\xF3n -->\r\n    <div class="formulario col-12 col-md-6">\r\n        <h2 class="mb-4 text-success">Iniciar Sesi\xF3n</h2>\r\n        <div aria-live="polite" aria-atomic="true" class="position-relative">\r\n            <div class="toast-container position-fixed top-0 end-0 p-3" id="toast-container"></div>\r\n        </div>\r\n        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="needs-validation" novalidate>\r\n\r\n            <div class="form-group mb-3">\r\n                <input formControlName="emailOrUsername"  type="text" id="email" class="form-control" required />\r\n                <label class="form-label" for="email">Nombre de usuario o correo:</label>\r\n                <div class="invalid-feedback">Por favor, introduce tu correo electr\xF3nico o usuario.</div>\r\n            </div>\r\n\r\n            <div class="form-group mb-3">\r\n                <input type="password" formControlName="password" id="pwd"  class="form-control" required />\r\n                <label for="pwd" class="form-label">Contrase\xF1a:</label>\r\n                <div class="invalid-feedback">Por favor, introduce tu contrase\xF1a.</div>\r\n                <p>\xBFNo recuerdas tu clave? <a routerLink="/recupera-pass" class="text-decoration-none text-success fw-bold">Recuperar</a></p>\r\n            </div>\r\n\r\n            <div id="errores" class="text-danger mb-3"></div>\r\n\r\n            <div class="mb-3 form-check">\r\n                <input type="checkbox" class="form-check-input" id="recordar" />\r\n                <label class="form-check-label" for="recordar">Recordarme</label>\r\n            </div>\r\n\r\n            <button type="submit" class="btn btn-submit btn-success w-100">Ingresar</button>\r\n        </form>\r\n\r\n        <div class="mt-3">\r\n            <p>\xBFNo tienes cuenta? <a (click)="navigateToRegister()" class="text-decoration-none text-success fw-bold">Registrate</a></p>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n';
  }
});

// angular:jit:style:src\app\pages\login-form\login-form.scss
var login_form_default2;
var init_login_form2 = __esm({
  "angular:jit:style:src\\app\\pages\\login-form\\login-form.scss"() {
    login_form_default2 = '@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap";\n\n/* src/app/pages/login-form/login-form.scss */\n:root {\n  --clr-blue:#05668D;\n  --clr-ligth_blue:#427AA1;\n  --clr-white:#EBF2FA;\n  --clr-green:#679436;\n  --clr-ligth_green:#A5BE00;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Ubuntu", sans-serif;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\na,\ninput,\ntextarea,\nul {\n  margin: 0;\n  padding: 0;\n}\n.carrusel-contenedor {\n  width: 100%;\n  height: 400px;\n  overflow: hidden;\n  border-radius: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.carrusel-imagen {\n  width: 100%;\n  height: 100%;\n  object-fit: fill;\n}\n@media (max-width: 768px) {\n  .carrusel-contenedor {\n    height: 250px;\n  }\n  .formulario {\n    padding: 1rem;\n  }\n}\n.formulario {\n  background-color: var(--clr-white);\n  padding: 2rem;\n  border-radius: 1rem;\n  max-width: 500px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.formulario form label {\n  font-weight: 500;\n  color: var(--clr-blue);\n  margin-bottom: 0.25rem;\n}\n.formulario input[type=text],\n.formulario input[type=email],\n.formulario input[type=password],\n.formulario input[type=tel],\n.formulario input[type=date] {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  border: 2px solid var(--clr-ligth_blue);\n  width: 100%;\n  transition: border-color 0.3s;\n}\n.formulario input:focus {\n  outline: none;\n  border-color: var(--clr-green);\n}\n.formulario button[type=submit] {\n  padding: 0.75rem;\n  border-radius: 2rem;\n  border: none;\n  background-color: var(--clr-green);\n  color: var(--clr-white);\n  font-weight: 600;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.formulario button:hover {\n  background-color: var(--clr-blue);\n}\n.formulario input[type=checkbox] {\n  margin-right: 0.5rem;\n}\n.btn-success {\n  background-color: var(--clr-green);\n  border: none;\n}\n.btn-success:hover {\n  background-color: var(--clr-ligth_green);\n  color: var(--clr-white);\n}\n/*# sourceMappingURL=login-form.css.map */\n';
  }
});

// src/app/pages/login-form/login-form.ts
var LoginForm;
var init_login_form3 = __esm({
  "src/app/pages/login-form/login-form.ts"() {
    "use strict";
    init_tslib_es6();
    init_login_form();
    init_login_form2();
    init_common();
    init_core();
    init_router();
    init_forms();
    LoginForm = class LoginForm2 {
      fb;
      router;
      el;
      isLoggedIn = false;
      loginForm;
      usuarios = [];
      constructor(fb, router, el) {
        this.fb = fb;
        this.router = router;
        this.el = el;
        if (typeof localStorage !== "undefined") {
          const usuariosGuardados = localStorage.getItem("usuarios");
          this.usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];
        }
      }
      ngOnInit() {
        this.loginForm = this.fb.group({
          emailOrUsername: ["", Validators.required],
          password: ["", Validators.required]
        });
      }
      iniciarSesion(emailOrUsername, password) {
        const usuario = this.usuarios.find((user) => (user.email === emailOrUsername || user.username === emailOrUsername) && user.password === password);
        if (usuario) {
          this.showToast("Inicio de sesion exitoso", "success");
          this.router.navigate(["/home"]);
          return true;
        } else {
          this.showToast("Email/Usuario O contrase\xF1a incorrecta.", "danger");
          return false;
        }
      }
      onSubmit() {
        if (this.loginForm.valid) {
          const emailOrUsernameControl = this.loginForm.get("emailOrUsername");
          const passwordControl = this.loginForm.get("password");
          if (emailOrUsernameControl && passwordControl) {
            const emailOrUsername = emailOrUsernameControl.value;
            const password = passwordControl.value;
            const inicioExitoso = this.iniciarSesion(emailOrUsername, password);
            if (inicioExitoso) {
              this.loginForm.reset();
            }
          } else {
            console.error("Form controls are missing");
            this.showToast("Formulario no v\xE1lido.", "danger");
          }
        } else {
          this.showToast("Formulario no v\xE1lido.", "danger");
        }
      }
      navigateToRegister() {
        this.router.navigateByUrl("/registro").then(() => {
          window.location.reload();
        });
      }
      showToast(message, type) {
        const toastContainer = this.el.nativeElement.querySelector("#toast-container");
        const toastElement = document.createElement("div");
        toastElement.className = `toast align-items-center text-bg-${type} border-0`;
        toastElement.role = "alert";
        toastElement.ariaLive = "assertive";
        toastElement.ariaAtomic = "true";
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
        }, 3e3);
      }
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: Router },
        { type: ElementRef }
      ];
    };
    LoginForm = __decorate([
      Component({
        selector: "app-login-form",
        standalone: true,
        imports: [RouterLink, CommonModule, ReactiveFormsModule],
        template: login_form_default,
        styles: [login_form_default2]
      })
    ], LoginForm);
  }
});

export {
  LoginForm,
  init_login_form3 as init_login_form
};
//# sourceMappingURL=chunk-PMLGFYVT.js.map
