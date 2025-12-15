import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W4OZRNLH.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\home\productos\productos.html
var productos_default;
var init_productos = __esm({
  "angular:jit:template:src\\app\\pages\\home\\productos\\productos.html"() {
    productos_default = '<h2 class="titulo-principal">Todos los productos</h2>\r\n<div class="contenedor-productos">\r\n    <div class="producto">\r\n        <img class="producto-imagen" src="images/ajedrez.jpg" alt="Ajedrez">\r\n        <div class="producto-detalle">\r\n            <h3 class="producto-titulo">Ajedrez</h3>\r\n            <p class="producto-precio">$10000</p>\r\n            <button class="producto-agregar">Agregar</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="producto">\r\n        <img class="producto-imagen" src="images/ajedrez.jpg" alt="Ajedrez">\r\n        <div class="producto-detalle">\r\n            <h3 class="producto-titulo">Ajedrez</h3>\r\n            <p class="producto-precio">$10000</p>\r\n            <button class="producto-agregar">Agregar</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="producto">\r\n        <img class="producto-imagen" src="images/ajedrez.jpg" alt="Ajedrez">\r\n        <div class="producto-detalle">\r\n            <h3 class="producto-titulo">Ajedrez</h3>\r\n            <p class="producto-precio">$10000</p>\r\n            <button class="producto-agregar">Agregar</button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="producto">\r\n        <img class="producto-imagen" src="images/ajedrez.jpg" alt="Ajedrez">\r\n        <div class="producto-detalle">\r\n            <h3 class="producto-titulo">Ajedrez</h3>\r\n            <p class="producto-precio">$10000</p>\r\n            <button class="producto-agregar">Agregar</button>\r\n        </div>\r\n    </div>\r\n</div>';
  }
});

// angular:jit:style:src\app\pages\home\productos\productos.scss
var productos_default2;
var init_productos2 = __esm({
  "angular:jit:style:src\\app\\pages\\home\\productos\\productos.scss"() {
    productos_default2 = '@import "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap";\n\n/* src/app/pages/home/productos/productos.scss */\n:root {\n  --clr-blue:#05668D;\n  --clr-ligth_blue:#427AA1;\n  --clr-white:#EBF2FA;\n  --clr-green:#679436;\n  --clr-ligth_green:#A5BE00;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Ubuntu", sans-serif;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\na,\ninput,\ntextarea,\nul {\n  margin: 0;\n  padding: 0;\n}\nul {\n  list-style-type: none;\n}\na {\n  text-decoration: none;\n}\nmain {\n  background-color: var(--clr-white);\n  margin: 1rem;\n  margin-left: 0;\n  border-radius: 2rem;\n  padding: 2rem;\n}\n.titulo-principal {\n  color: var(--clr-green);\n  margin-bottom: 2rem;\n}\n.contenedor-productos {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n}\n.producto-imagen {\n  max-width: 100%;\n  border-radius: 1rem;\n}\n.producto-detalle {\n  background-color: var(--clr-blue);\n  color: var(--clr-white);\n  padding: 0.25rem;\n  border-radius: 1rem;\n  margin-top: -2rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.producto-titulo {\n  font-size: 1rem;\n}\n.producto-agregar {\n  border: 0;\n  background-color: var(--clr-white);\n  color: var(--clr-green);\n  padding: 0.25rem;\n  text-transform: uppercase;\n  border-radius: 2rem;\n  cursor: pointer;\n  border: 2px solir var(--clr-white);\n  transition: background-color 0.2s, color 0.2s;\n}\n.producto-agregar:hover {\n  background-color: var(--clr-green);\n  color: var(--clr-white);\n}\n.menu {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.cant {\n  background-color: var(--clr-white);\n  color: var(--clr-green);\n  padding: 0.15rem 0.25rem;\n  border-radius: 0.25rem;\n}\n/*# sourceMappingURL=productos.css.map */\n';
  }
});

// src/app/pages/home/productos/productos.ts
var Productos;
var init_productos3 = __esm({
  "src/app/pages/home/productos/productos.ts"() {
    "use strict";
    init_tslib_es6();
    init_productos();
    init_productos2();
    init_core();
    Productos = class Productos2 {
    };
    Productos = __decorate([
      Component({
        selector: "app-productos",
        standalone: true,
        imports: [],
        template: productos_default,
        styles: [productos_default2]
      })
      /**
       * @description componente que nos permitira visualizar los producto que se encuentran almacenado en el local storage.
       *
       * @param descripcion Descripcion del producto
       * @param name Nombre del producto
       * @param precio valor del producto
       */
    ], Productos);
  }
});

export {
  Productos,
  init_productos3 as init_productos
};
//# sourceMappingURL=chunk-2WCECK6Z.js.map
