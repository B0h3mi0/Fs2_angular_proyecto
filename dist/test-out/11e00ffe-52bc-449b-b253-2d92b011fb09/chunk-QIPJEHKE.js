import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  init_router
} from "./chunk-TBBESG4B.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W4OZRNLH.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\home\aside\aside.html
var aside_default;
var init_aside = __esm({
  "angular:jit:template:src\\app\\pages\\home\\aside\\aside.html"() {
    aside_default = '<aside >\r\n    <header>\r\n        <h1 class="logo">Ludoteca</h1>\r\n    </header>\r\n    <nav>\r\n        <ul class="menu">\r\n            <li>\r\n                <a  class="boton-menu link-menu"\r\n                    routerLink="/home/productos"\r\n                    routerLinkActive="active"\r\n                    [routerLinkActiveOptions]="{ exact : true }">\r\n                    <i class="bi bi-caret-right-fill"></i>Todos los productos\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <div>\r\n                    <h2 class="accordion-header" id="headingOne">\r\n                        <button class="boton-menu" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\r\n                            <i class="bi bi-caret-right"></i>Categoria\r\n                        </button>\r\n                    </h2>\r\n                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">\r\n                        <div class="accordion-body">\r\n                            <ul class="alineacion">\r\n                                <li>\r\n                                    <button class="boton-menu boton-categoria"><i class="bi bi-caret-right"></i>Juegos de Rol</button>\r\n                                </li>\r\n                                <li>\r\n                                    <button class="boton-menu boton-categoria"><i class="bi bi-caret-right"></i>Juegos Solitario</button>\r\n                                </li>\r\n                                <li>\r\n                                    <button class="boton-menu boton-categoria"><i class="bi bi-caret-right"></i>Juegos de Estrategia</button>\r\n                                </li>\r\n                                <li>\r\n                                    <button class="boton-menu boton-categoria"><i class="bi bi-caret-right"></i>Juegos Familiares</button>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <a class="boton-menu link-menu" \r\n                    routerLink="/home/perfil"\r\n                    routerLinkActive="active"\r\n                    [routerLinkActiveOptions]="{ exact : true }">\r\n                        <i class="bi bi-person-raised-hand"></i> Mi cuenta\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class="boton-menu boton-carrito link-menu" \r\n                    routerLink="/home/carrito"\r\n                    routerLinkActive="active"\r\n                    [routerLinkActiveOptions]="{ exact : true }">\r\n                    <i class="bi bi-cart4"></i> Carrito \r\n                    <span class="cant">\r\n                        0\r\n                    </span>\r\n                </a>\r\n                \r\n            </li>\r\n            <li>\r\n                <a class="boton-menu link-menu" routerLink="/registro">\xBFNo estas registrado?<br>Registrate aqui</a>\r\n                \r\n            </li>\r\n        </ul>\r\n\r\n    </nav>\r\n    <footer>\r\n        <p class="texto-footer">\xA9 2025 Ludoteca - derechos reservados </p>\r\n    </footer>\r\n</aside>\r\n';
  }
});

// angular:jit:style:src\app\pages\home\aside\aside.scss
var aside_default2;
var init_aside2 = __esm({
  "angular:jit:style:src\\app\\pages\\home\\aside\\aside.scss"() {
    aside_default2 = '@import "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap";\n\n/* src/app/pages/home/aside/aside.scss */\n:root {\n  --clr-blue:#05668D;\n  --clr-ligth_blue:#427AA1;\n  --clr-white:#EBF2FA;\n  --clr-green:#679436;\n  --clr-ligth_green:#A5BE00;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Ubuntu", sans-serif;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\na,\ninput,\ntextarea,\nul {\n  margin: 0;\n  padding: 0;\n}\nul {\n  list-style-type: none;\n}\na {\n  text-decoration: none;\n}\nbody {\n  background-color: var(--clr-green);\n}\naside {\n  padding: 2rem;\n  padding-right: 0;\n  color: var(--clr-white);\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.logo {\n  font-weight: 400;\n  font-size: 1.3rem;\n}\n.texto-footer {\n  color: var(--clr-ligth_green);\n  font-size: 0.85rem;\n}\nmain {\n  background-color: var(--clr-white);\n  margin: 1rem;\n  margin-left: 0;\n  border-radius: 2rem;\n  padding: 2rem;\n}\n.titulo-principal {\n  color: var(--clr-green);\n  margin-bottom: 2rem;\n}\n.menu {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.cant {\n  background-color: var(--clr-white);\n  color: var(--clr-green);\n  padding: 0.15rem 0.25rem;\n  border-radius: 0.25rem;\n}\n.boton-menu {\n  background-color: transparent;\n  border: 0;\n  color: var(--clr-white);\n  font-size: 1rem;\n  cursor: pointer;\n  display: flex;\n  gap: 1rem;\n  font-weight: 600;\n  padding: 0.5rem;\n  font-size: 0.85rem;\n  text-align: center;\n  align-items: center;\n}\na.active {\n  background-color: var(--clr-white);\n  color: var(--clr-green);\n  width: 100%;\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n  position: relative;\n}\na.active::before {\n  content: "";\n  position: absolute;\n  width: 1rem;\n  height: 2rem;\n  bottom: 100%;\n  right: 0;\n  background-color: transparent;\n  border-bottom-right-radius: 1rem;\n  box-shadow: 0 1rem 0 var(--clr-white);\n}\na.active::after {\n  content: "";\n  position: absolute;\n  width: 1rem;\n  height: 2rem;\n  top: 100%;\n  right: 0;\n  background-color: transparent;\n  border-top-right-radius: 0.5rem;\n  box-shadow: 0 -1rem 0 var(--clr-white);\n}\n.boton-carrito {\n  margin-top: 2rem;\n}\n.disabled {\n  display: none;\n}\n.btn-success {\n  background-color: var(--clr-green);\n  border: none;\n}\n.btn-success:hover {\n  background-color: var(--clr-ligth_green);\n  color: var(--clr-white);\n}\n@media screen and (max-width: 600px) {\n  .wrapper {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n  }\n  aside {\n    position: fixed;\n    z-index: 9;\n    background-color: var(--clr-green);\n    left: 0;\n    box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.75);\n    transform: translateX(-100%);\n    opacity: 0;\n    visibility: hidden;\n    transition: 0.2s;\n  }\n  .aside-visible {\n    transform: translateX(0);\n    opacity: 1;\n    visibility: visible;\n  }\n  a.active::before,\n  a.active::after {\n    display: none;\n  }\n  main {\n    margin: 1rem;\n    margin-top: 0;\n    padding: 2rem;\n  }\n  .header-mobile {\n    padding: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .header-mobile .logo {\n    color: var(--clr-gray);\n  }\n  .open-menu,\n  .close-menu {\n    background-color: transparent;\n    color: var(--clr-gray);\n    border: 0;\n    font-size: 2rem;\n    cursor: pointer;\n  }\n  .close-menu {\n    display: block;\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n  }\n}\n/*# sourceMappingURL=aside.css.map */\n';
  }
});

// src/app/pages/home/aside/aside.ts
var Aside;
var init_aside3 = __esm({
  "src/app/pages/home/aside/aside.ts"() {
    "use strict";
    init_tslib_es6();
    init_aside();
    init_aside2();
    init_core();
    init_router();
    Aside = class Aside2 {
    };
    Aside = __decorate([
      Component({
        selector: "app-aside",
        standalone: true,
        imports: [RouterLink, RouterLinkActive, RouterModule],
        template: aside_default,
        styles: [aside_default2]
      })
    ], Aside);
  }
});

export {
  Aside,
  init_aside3 as init_aside
};
//# sourceMappingURL=chunk-QIPJEHKE.js.map
