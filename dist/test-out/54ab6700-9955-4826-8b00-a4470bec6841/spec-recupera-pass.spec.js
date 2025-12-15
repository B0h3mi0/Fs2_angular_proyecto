import {
  ActivatedRoute,
  RouterLink,
  init_router
} from "./chunk-QP2D5CGL.js";
import "./chunk-G3ED4NYO.js";
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

// angular:jit:template:src\app\pages\recupera-pass\recupera-pass.html
var recupera_pass_default;
var init_recupera_pass = __esm({
  "angular:jit:template:src\\app\\pages\\recupera-pass\\recupera-pass.html"() {
    recupera_pass_default = '<div class="container py-4">\r\n    <div class="row align-items-center justify-content-center">\r\n    <!-- Carrusel -->\r\n    <div class="col-12 col-md-6 mb-4 mb-md-0">\r\n        <div id="carouselRecuperar" class="carousel slide carrusel-contenedor" data-bs-ride="carousel">\r\n        <div class="carousel-inner">\r\n            <div class="carousel-item active">\r\n            <img src="images/rol_juego.jpg" class="d-block w-100 carrusel-imagen" alt="Juego 1" />\r\n            </div>\r\n            <div class="carousel-item">\r\n            <img src="images/registro.jpg" class="d-block w-100 carrusel-imagen" alt="Juego 2" />\r\n            </div>\r\n            <div class="carousel-item">\r\n            <img src="images/juegos.jpg" class="d-block w-100 carrusel-imagen" alt="Juego 3" />\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Formulario -->\r\n    <div class="formulario col-12 col-md-6">\r\n        <h2 class="mb-4 text-success">Recuperar Contrase\xF1a</h2>\r\n        <p class="mb-3">Ingresa tu correo electr\xF3nico y te enviaremos un enlace para restablecer tu contrase\xF1a.</p>\r\n        <form action="/login" method="POST">\r\n        <div class="mb-3">\r\n            <label for="email" class="form-label">Correo electr\xF3nico:</label>\r\n            <input type="email" id="email" name="email" class="form-control" required />\r\n        </div>\r\n        <button type="submit" class="btn btn-success w-100">Enviar enlace de recuperaci\xF3n</button>\r\n        </form>\r\n\r\n        <div class="mt-3">\r\n        <p>\xBFRecordaste tu contrase\xF1a? <a routerLink="/login" class="text-decoration-none text-success fw-bold">Inicia sesi\xF3n</a></p>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>';
  }
});

// angular:jit:style:src\app\pages\recupera-pass\recupera-pass.scss
var recupera_pass_default2;
var init_recupera_pass2 = __esm({
  "angular:jit:style:src\\app\\pages\\recupera-pass\\recupera-pass.scss"() {
    recupera_pass_default2 = '@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap";\n\n/* src/app/pages/recupera-pass/recupera-pass.scss */\n:root {\n  --clr-blue:#05668D;\n  --clr-ligth_blue:#427AA1;\n  --clr-white:#EBF2FA;\n  --clr-green:#679436;\n  --clr-ligth_green:#A5BE00;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Ubuntu", sans-serif;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\na,\ninput,\ntextarea,\nul {\n  margin: 0;\n  padding: 0;\n}\n.carrusel-contenedor {\n  width: 100%;\n  height: 400px;\n  overflow: hidden;\n  border-radius: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.carrusel-imagen {\n  width: 100%;\n  height: 100%;\n  object-fit: fill;\n}\n@media (max-width: 768px) {\n  .carrusel-contenedor {\n    height: 250px;\n  }\n  .formulario {\n    padding: 1rem;\n  }\n}\n.formulario {\n  background-color: var(--clr-white);\n  padding: 2rem;\n  border-radius: 1rem;\n  max-width: 500px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.formulario form label {\n  font-weight: 500;\n  color: var(--clr-blue);\n  margin-bottom: 0.25rem;\n}\n.formulario input[type=text],\n.formulario input[type=email],\n.formulario input[type=password],\n.formulario input[type=tel],\n.formulario input[type=date] {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  border: 2px solid var(--clr-ligth_blue);\n  width: 100%;\n  transition: border-color 0.3s;\n}\n.formulario input:focus {\n  outline: none;\n  border-color: var(--clr-green);\n}\n.formulario button[type=submit] {\n  padding: 0.75rem;\n  border-radius: 2rem;\n  border: none;\n  background-color: var(--clr-green);\n  color: var(--clr-white);\n  font-weight: 600;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.formulario button:hover {\n  background-color: var(--clr-blue);\n}\n.formulario input[type=checkbox] {\n  margin-right: 0.5rem;\n}\n.btn-success {\n  background-color: var(--clr-green);\n  border: none;\n}\n.btn-success:hover {\n  background-color: var(--clr-ligth_green);\n  color: var(--clr-white);\n}\n/*# sourceMappingURL=recupera-pass.css.map */\n';
  }
});

// src/app/pages/recupera-pass/recupera-pass.ts
var RecuperaPass;
var init_recupera_pass3 = __esm({
  "src/app/pages/recupera-pass/recupera-pass.ts"() {
    "use strict";
    init_tslib_es6();
    init_recupera_pass();
    init_recupera_pass2();
    init_core();
    init_router();
    RecuperaPass = class RecuperaPass2 {
    };
    RecuperaPass = __decorate([
      Component({
        selector: "app-recupera-pass",
        imports: [RouterLink],
        template: recupera_pass_default,
        styles: [recupera_pass_default2]
      })
    ], RecuperaPass);
  }
});

// src/app/pages/recupera-pass/recupera-pass.spec.ts
var require_recupera_pass_spec = __commonJS({
  "src/app/pages/recupera-pass/recupera-pass.spec.ts"(exports) {
    init_testing();
    init_recupera_pass3();
    init_router();
    describe("RecuperaPass", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [RecuperaPass],
          providers: [
            {
              provide: ActivatedRoute,
              useValue: {
                snapshot: {
                  paramMap: {
                    get: (key) => "valor-ficticio"
                    // simula obtener un parámetro de la ruta
                  }
                }
              }
            }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(RecuperaPass);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_recupera_pass_spec();
//# sourceMappingURL=spec-recupera-pass.spec.js.map
