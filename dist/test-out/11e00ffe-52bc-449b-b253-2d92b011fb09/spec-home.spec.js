import {
  Perfil,
  init_perfil
} from "./chunk-ZAXVIHZ2.js";
import {
  Productos,
  init_productos
} from "./chunk-2GNIORGL.js";
import {
  Aside,
  init_aside
} from "./chunk-IBZARCAN.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-QP2D5CGL.js";
import "./chunk-G3ED4NYO.js";
import {
  Carrito,
  init_carrito
} from "./chunk-6W3YTF3V.js";
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

// angular:jit:template:src\app\pages\home\home.html
var home_default;
var init_home = __esm({
  "angular:jit:template:src\\app\\pages\\home\\home.html"() {
    home_default = '<div class="container-custom">\r\n    <app-aside></app-aside>\r\n    <div class="contenedor-main">\r\n        <div class="contendor-productos">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\pages\home\home.scss
var home_default2;
var init_home2 = __esm({
  "angular:jit:style:src\\app\\pages\\home\\home.scss"() {
    home_default2 = '@charset "UTF-8";\n@import "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap";\n\n/* src/app/pages/home/home.scss */\n:root {\n  --clr-blue:#05668D;\n  --clr-ligth_blue:#427AA1;\n  --clr-white:#EBF2FA;\n  --clr-green:#679436;\n  --clr-ligth_green:#A5BE00;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Ubuntu", sans-serif;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\na,\ninput,\ntextarea,\nul {\n  margin: 0;\n  padding: 0;\n}\n.container-custom {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  background-color: var(--clr-green);\n}\n.contenedor-productos {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n}\n.contenedor-main {\n  background-color: var(--clr-white);\n  margin: 1rem;\n  margin-left: 0;\n  border-radius: 2rem;\n  padding: 2rem;\n}\n.carrusel-contenedor {\n  width: 100%;\n  height: 400px;\n  overflow: hidden;\n  border-radius: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.carrusel-imagen {\n  width: 100%;\n  height: 100%;\n  object-fit: fill;\n}\n@media (max-width: 768px) {\n  .carrusel-contenedor {\n    height: 250px;\n  }\n  .formulario {\n    padding: 1rem;\n  }\n}\n.formulario {\n  background-color: var(--clr-white);\n  padding: 2rem;\n  border-radius: 1rem;\n  max-width: 500px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.formulario form label {\n  font-weight: 500;\n  color: var(--clr-blue);\n  margin-bottom: 0.25rem;\n}\n.formulario input[type=text],\n.formulario input[type=email],\n.formulario input[type=password],\n.formulario input[type=tel],\n.formulario input[type=date] {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  border: 2px solid var(--clr-ligth_blue);\n  width: 100%;\n  transition: border-color 0.3s;\n}\n.formulario input:focus {\n  outline: none;\n  border-color: var(--clr-green);\n}\n.formulario button[type=submit] {\n  padding: 0.75rem;\n  border-radius: 2rem;\n  border: none;\n  background-color: var(--clr-green);\n  color: var(--clr-white);\n  font-weight: 600;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.formulario button:hover {\n  background-color: var(--clr-blue);\n}\n.formulario input[type=checkbox] {\n  margin-right: 0.5rem;\n}\n.btn-success {\n  background-color: var(--clr-green);\n  border: none;\n}\n.btn-success:hover {\n  background-color: var(--clr-ligth_green);\n  color: var(--clr-white);\n}\n/*# sourceMappingURL=home.css.map */\n';
  }
});

// src/app/pages/home/home.ts
var Home;
var init_home3 = __esm({
  "src/app/pages/home/home.ts"() {
    "use strict";
    init_tslib_es6();
    init_home();
    init_home2();
    init_core();
    init_aside();
    init_productos();
    init_router();
    init_carrito();
    init_perfil();
    Home = class Home2 {
    };
    Home = __decorate([
      Component({
        selector: "app-home",
        imports: [Aside, Productos, Carrito, Perfil, RouterOutlet],
        template: home_default,
        styles: [home_default2]
      })
    ], Home);
  }
});

// src/app/pages/home/home.spec.ts
var require_home_spec = __commonJS({
  "src/app/pages/home/home.spec.ts"(exports) {
    init_testing();
    init_home3();
    describe("Home", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Home]
        }).compileComponents();
        fixture = TestBed.createComponent(Home);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-home.spec.js.map
