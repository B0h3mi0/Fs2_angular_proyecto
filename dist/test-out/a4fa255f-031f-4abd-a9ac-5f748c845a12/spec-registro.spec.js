import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-R2WPECNJ.js";
import {
  Router,
  RouterModule,
  init_router
} from "./chunk-QP2D5CGL.js";
import {
  CommonModule,
  init_common
} from "./chunk-G3ED4NYO.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-W4OZRNLH.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\registro\registro.html
var registro_default;
var init_registro = __esm({
  "angular:jit:template:src\\app\\pages\\registro\\registro.html"() {
    registro_default = `<div class="container-full py-4 d-flex justify-content-center">\r
    <div class="row align-items-top justify-content-center">\r
        <!-- Carrusel -->\r
        <div class="col-12 col-md-6 mb-4 mb-md-0">\r
            <div id="carouselExample" class="carousel slide carrusel-contenedor" data-bs-ride="carousel">\r
                <div class="carousel-inner">\r
                    <div class="carousel-item active">\r
                        <img src="images/registro.jpg" class="d-block w-100 carrusel-imagen" alt="...">\r
                    </div>\r
                    <div class="carousel-item">\r
                        <img src="images/uno-registro2.avif" class="d-block w-100 carrusel-imagen" alt="...">\r
                    </div>\r
                    <div class="carousel-item">\r
                        <img src="images/rol_juego.jpg" class="d-block w-100 carrusel-imagen" alt="...">\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <!-- Formulario -->\r
        <div class="formulario col-12 col-md-6">\r
\r
            <h2 class="mb-4 text-success">Registrarse</h2>\r
            <form [formGroup]="registroForm" (ngSubmit)="onSubmit()" class="col-4 text-center w-100  needs-validation" novalidate>\r
\r
                <div class="form-group form-floating  mb-3">\r
                    <input class="form-control " type="text" id="name" formControlName="name" placeholder="Introduce tu nombre completo" required\r
                            [ngClass]="{ 'is-invalid': submitted && registroForm.controls['name'].errors, \r
                                        'is-valid': submitted && registroForm.controls['name'].valid }">\r
                    <label for="name">Nombre completo:</label>\r
                    <div *ngIf="submitted && registroForm.controls['name'].errors " class="invalid-feedback" >Por favor, introduce tu nombre completo</div>\r
                </div>\r
\r
                <div class="form-group form-floating mb-3">\r
                    <input class="form-control" type="email" id="email" formControlName="email" placeholder="Introduce tu Correo electronico : 'user@gmail.com' " required\r
                    [ngClass]="{ 'is-invalid': submitted && registroForm.controls['email'].errors, \r
                                        'is-valid': submitted && registroForm.controls['email'].valid }">\r
                    <label for="email">Correo electr\xF3nico:</label>\r
                    <div *ngIf="submitted && registroForm.controls['email'].errors " class="invalid-feedback" >Por favor, introduce un email valido</div>\r
                </div>\r
\r
                <div class="form-group form-floating mb-3">\r
                    <input class="form-control" type="text" id="username" formControlName="username" placeholder="Introduce tu nombre de usuario" required\r
                    [ngClass]="{ 'is-invalid': submitted && registroForm.controls['username'].errors, \r
                                        'is-valid': submitted && registroForm.controls['username'].valid }">\r
                    <label for="username">Nombre de usuario:</label>\r
                    <div *ngIf="submitted && registroForm.controls['username'].errors " class="invalid-feedback" >Por favor, introduce un nombre valido</div>\r
                </div>\r
\r
                <div class="form-group form-floating mb-3">\r
                    <input class="form-control" type="tel" id="phone" formControlName="phone" placeholder="Introduce tu numero de telefono" \r
                    [ngClass]="{ 'is-invalid': submitted && registroForm.controls['phone'].errors, \r
                                        'is-valid': submitted && registroForm.controls['phone'].valid }">\r
                    <label for="phone">Tel\xE9fono (opcional):</label>\r
                    <div *ngIf="submitted && registroForm.controls['phone'].errors " class="invalid-feedback" >Por favor, introduce un numero valido</div>\r
                </div>\r
\r
                <div class="form-group  mb-3">\r
                    <input class="form-control" type="date" id="date" formControlName="birthdate" placeholder="Introduce tu fecha de nacimiento" \r
                    [ngClass]="{ 'is-invalid': submitted && registroForm.controls['birthdate'].errors, \r
                                        'is-valid': submitted && registroForm.controls['birthdate'].valid }">\r
                    <label for="date">Fecha de nacimiento (opcional):</label>\r
                    <div *ngIf="submitted && registroForm.controls['birthdate'].errors " class="invalid-feedback" >Por favor, introduce una fecha valida</div>\r
                </div>\r
\r
                <div class="form-group mb-3 position-relative">\r
                    <input class="form-control" type="password" id="pwd" formControlName="password" placeholder="Introduce tu contrase\xF1a" required\r
                    [ngClass]="{ 'is-invalid': submitted && registroForm.controls['password'].errors, \r
                                        'is-valid': submitted && registroForm.controls['password'].valid }">\r
                    <label for="pwd">Contrase\xF1a:</label>\r
                    <div *ngIf="submitted && registroForm.controls['password'].errors" class="invalid-feedback">\r
                        La contrase\xF1a debe tener al menos 8 caracteres, incluyendo una may\xFAscula, una min\xFAscula, un n\xFAmero y un car\xE1cter especial.</div>\r
                </div>\r
\r
                <div class="form-group mb-3 position-relative">\r
                    <input class="form-control" type="password" id="repeat-pwd" formControlName="repeatPassword" placeholder="Repite nuevamente tu contrase\xF1a" required\r
                    [ngClass]="{ 'is-invalid': submitted && registroForm.controls['repeatPassword'].errors, \r
                                        'is-valid': submitted && registroForm.controls['repeatPassword'].valid }">\r
                    <label for="repeat-pwd">Confirmar contrase\xF1a:</label>\r
                    <div *ngIf="submitted && registroForm.controls['repeatPassword'].errors " class="invalid-feedback" >Las contrase\xF1as no coinciden</div>\r
                </div>\r
\r
\r
                <div class="form-group form-floating mb-3">\r
                    <label>\r
                        <input type="checkbox" name="terminos" required>\r
                        Acepto los t\xE9rminos y condiciones\r
                    </label>\r
                </div>\r
\r
                <div id="errores" class="text-danger mb-3"></div>\r
                <br>\r
                <br>\r
                <br>\r
\r
                <button type="submit" >Registrarse</button>\r
\r
            </form>\r
\r
        </div>\r
    </div>\r
</div>\r
\r
`;
  }
});

// angular:jit:style:src\app\pages\registro\registro.scss
var registro_default2;
var init_registro2 = __esm({
  "angular:jit:style:src\\app\\pages\\registro\\registro.scss"() {
    registro_default2 = '@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap";\n\n/* src/app/pages/registro/registro.scss */\n:root {\n  --clr-blue:#05668D;\n  --clr-ligth_blue:#427AA1;\n  --clr-white:#EBF2FA;\n  --clr-green:#679436;\n  --clr-ligth_green:#A5BE00;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Ubuntu", sans-serif;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\na,\ninput,\ntextarea,\nul {\n  margin: 0;\n  padding: 0;\n}\n.carrusel-contenedor {\n  width: 100%;\n  height: 400px;\n  overflow: hidden;\n  border-radius: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.carrusel-imagen {\n  width: 100%;\n  height: 100%;\n  object-fit: fill;\n}\n@media (max-width: 768px) {\n  .carrusel-contenedor {\n    height: 250px;\n  }\n  .formulario {\n    padding: 1rem;\n  }\n}\n.formulario {\n  background-color: var(--clr-white);\n  padding: 2rem;\n  border-radius: 1rem;\n  max-width: 500px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.formulario form label {\n  font-weight: 500;\n  color: var(--clr-blue);\n  margin-bottom: 0.25rem;\n}\n.formulario input[type=text],\n.formulario input[type=email],\n.formulario input[type=password],\n.formulario input[type=tel],\n.formulario input[type=date] {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  border: 2px solid var(--clr-ligth_blue);\n  width: 100%;\n  transition: border-color 0.3s;\n}\n.formulario input:focus {\n  outline: none;\n  border-color: var(--clr-green);\n}\n.formulario button[type=submit] {\n  padding: 0.75rem;\n  border-radius: 2rem;\n  border: none;\n  background-color: var(--clr-green);\n  color: var(--clr-white);\n  font-weight: 600;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.formulario button:hover {\n  background-color: var(--clr-blue);\n}\n.formulario input[type=checkbox] {\n  margin-right: 0.5rem;\n}\n.btn-success {\n  background-color: var(--clr-green);\n  border: none;\n}\n.btn-success:hover {\n  background-color: var(--clr-ligth_green);\n  color: var(--clr-white);\n}\n.input-bottom-align {\n  padding-top: 3rem;\n}\n/*# sourceMappingURL=registro.css.map */\n';
  }
});

// src/app/pages/registro/registro.ts
var Registro;
var init_registro3 = __esm({
  "src/app/pages/registro/registro.ts"() {
    "use strict";
    init_tslib_es6();
    init_registro();
    init_registro2();
    init_common();
    init_forms();
    init_core();
    init_forms();
    init_router();
    Registro = class Registro2 {
      fb;
      router;
      registroForm;
      usuarios = [];
      submitted = false;
      constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.registroForm = this.fb.group({
          email: ["", [Validators.required, Validators.email]],
          name: ["", Validators.required],
          username: ["", Validators.required],
          password: ["", [Validators.required, Validators.minLength(8)]],
          repeatPassword: ["", Validators.required],
          birthdate: [""],
          phone: [""]
        });
        if (typeof localStorage !== "undefined") {
          const usuariosGuardados = localStorage.getItem("usuarios");
          this.usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados) : [];
        }
      }
      ngOnInit() {
      }
      // METODO DE REGISTRO DE USUARIOS CON LOCALSTORAGE/////////////////////////////////
      registrarUsuario(email, name, password, username, birthdate, phone) {
        const usuarioExistente = this.usuarios.find((usuario) => usuario.email === email || usuario.username === username);
        if (usuarioExistente) {
          alert("El usuario ya existe.");
          return false;
        }
        const nuevoUsuario = { email, name, password, username, birthdate, phone };
        this.usuarios.push(nuevoUsuario);
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
        }
        alert("Usuario registrado exitosamente.");
        return true;
      }
      onSubmit() {
        this.submitted = true;
        if (this.registroForm.valid) {
          const { email, name, password, repeatPassword, username, birthdate, phone } = this.registroForm.value;
          if (password !== repeatPassword) {
            alert("Las contrase\xF1as no coinciden.");
            return;
          }
          const registroExitoso = this.registrarUsuario(email, name, password, username, birthdate, phone);
          if (registroExitoso) {
            this.registroForm.reset();
            this.router.navigate(["/"]);
            this.submitted = false;
          }
        }
      }
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: Router }
      ];
    };
    Registro = __decorate([
      Component({
        selector: "app-registro",
        standalone: true,
        imports: [RouterModule, CommonModule, ReactiveFormsModule],
        template: registro_default,
        styles: [registro_default2]
      })
    ], Registro);
  }
});

// src/app/pages/registro/registro.spec.ts
var require_registro_spec = __commonJS({
  "src/app/pages/registro/registro.spec.ts"(exports) {
    init_testing();
    init_registro3();
    init_forms();
    init_router();
    describe("Registro", () => {
      let component;
      let fixture;
      let routerSpy = { navigate: jasmine.createSpy("navigate") };
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Registro, ReactiveFormsModule],
          providers: [
            { provide: Router, useValue: routerSpy }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Registro);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("form should be invalid when empty", () => {
        component.registroForm.setValue({
          email: "",
          name: "",
          username: "",
          password: "",
          repeatPassword: "",
          birthdate: "",
          phone: ""
        });
        expect(component.registroForm.invalid).toBeTrue();
      });
      it("should mark form as valid with correct data", () => {
        component.registroForm.setValue({
          email: "test@example.com",
          name: "Sebasti\xE1n",
          username: "seba123",
          password: "Passw0rd!",
          repeatPassword: "Passw0rd!",
          birthdate: "2000-01-01",
          phone: "123456789"
        });
        expect(component.registroForm.valid).toBeTrue();
      });
      it("should show alert if passwords do not match", () => {
        spyOn(window, "alert");
        component.registroForm.setValue({
          email: "test@example.com",
          name: "Sebasti\xE1n",
          username: "seba123",
          password: "Passw0rd!",
          repeatPassword: "AnotherPass!",
          birthdate: "",
          phone: ""
        });
        component.onSubmit();
        expect(window.alert).toHaveBeenCalledWith("Las contrase\xF1as no coinciden.");
      });
      it("should register user and navigate to home on success", () => {
        spyOn(window, "alert");
        component.registroForm.setValue({
          email: "nuevo@example.com",
          name: "Nuevo Usuario",
          username: "nuevoUser",
          password: "Test1234!",
          repeatPassword: "Test1234!",
          birthdate: "",
          phone: ""
        });
        component.onSubmit();
        const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios") || "[]");
        const registrado = usuariosGuardados.find((u) => u.email === "nuevo@example.com");
        expect(registrado).toBeTruthy();
        expect(window.alert).toHaveBeenCalledWith("Usuario registrado exitosamente.");
        expect(routerSpy.navigate).toHaveBeenCalledWith(["/"]);
      });
      it("should not allow duplicate users", () => {
        spyOn(window, "alert");
        const usuarioExistente = {
          email: "repetido@example.com",
          username: "usuario1",
          name: "X",
          password: "X",
          birthdate: "",
          phone: ""
        };
        localStorage.setItem("usuarios", JSON.stringify([usuarioExistente]));
        component.usuarios = [usuarioExistente];
        component.registroForm.setValue({
          email: "repetido@example.com",
          name: "Repetido",
          username: "usuario1",
          password: "Test1234!",
          repeatPassword: "Test1234!",
          birthdate: "",
          phone: ""
        });
        component.onSubmit();
        expect(window.alert).toHaveBeenCalledWith("El usuario ya existe.");
        expect(routerSpy.navigate).not.toHaveBeenCalled();
      });
      afterEach(() => {
        localStorage.removeItem("usuarios");
      });
    });
  }
});
export default require_registro_spec();
//# sourceMappingURL=spec-registro.spec.js.map
