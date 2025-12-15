import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W4OZRNLH.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\home\carrito\carrito.html
var carrito_default;
var init_carrito = __esm({
  "angular:jit:template:src\\app\\pages\\home\\carrito\\carrito.html"() {
    carrito_default = '<h2 class="titulo-principal">Carrito de compras</h2>\r\n<div class="contenedor-carrito">\r\n    <p class="carrito-vacio">Tu carrito esta vacio</p>\r\n\r\n    <div class="carrito-productos">\r\n        <div class="carrito-producto">\r\n            <img class="carrito-producto-imagen" src="images/ajedrez.jpg" alt="Ajedrez">\r\n            <div class="carrito-producto-titulo">\r\n                <small>Titulo</small>\r\n                <h3>Ajedrez</h3>\r\n            </div>\r\n            <div class="carrito-producto-cantidad">\r\n                <small>cantidad</small>\r\n                <p>1</p>\r\n            </div>\r\n            <div class="carrito-producto-precio">\r\n                <small>precio</small>\r\n                <p>$10000</p>\r\n            </div>\r\n            <div class="carrito-producto-subtotal">\r\n                <small>subtotal</small>\r\n                <p>$10000</p>\r\n            </div>\r\n            <button class="carrito-producto-eliminar"><i class="bi bi-trash3-fill"></i></button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="carrito-productos">\r\n        <div class="carrito-producto">\r\n            <img class="carrito-producto-imagen" src="images/ajedrez.jpg" alt="Ajedrez">\r\n            <div class="carrito-producto-titulo">\r\n                <small>Titulo</small>\r\n                <h3>Ajedrez2</h3>\r\n            </div>\r\n            <div class="carrito-producto-cantidad">\r\n                <small>cantidad</small>\r\n                <p>2</p>\r\n            </div>\r\n            <div class="carrito-producto-precio">\r\n                <small>precio</small>\r\n                <p>$10000</p>\r\n            </div>\r\n            <div class="carrito-producto-subtotal">\r\n                <small>subtotal</small>\r\n                <p>$10000</p>\r\n            </div>\r\n            <button class="carrito-producto-eliminar"><i class="bi bi-trash3-fill"></i></button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="carrito-acciones">\r\n        <div class="carrito-accion-izq">\r\n            <button class="carrito-accion-vaciar">Vaciar Carrito</button>\r\n        </div>\r\n        <div class="carrito-accion-der">\r\n            <div class="carrito-accion-total">\r\n                <p>Total</p>\r\n                <p id="total">$20000</p>\r\n            </div>\r\n            <button class="carrito-accion-comprar">Comprar</button>\r\n        </div>\r\n    </div>\r\n    <p class="carrito-comprado disabled">Muchas gracias por tu compra!!!!!</p>\r\n</div>';
  }
});

// angular:jit:style:src\app\pages\home\carrito\carrito.scss
var carrito_default2;
var init_carrito2 = __esm({
  "angular:jit:style:src\\app\\pages\\home\\carrito\\carrito.scss"() {
    carrito_default2 = "/* src/app/pages/home/carrito/carrito.scss */\n.carrito-vacio,\n.carrito-comprado {\n  color: var(--clr-green);\n  display: none;\n}\n.carrito-productos {\n  display: flex;\n  flex-direction: column;\n  margin: 0.5rem;\n  gap: 1rem;\n}\n.carrito-producto {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--clr-ligth_green);\n  color: var(--clr-ligth_blue);\n  padding: 0.5rem;\n  border-radius: 1rem;\n  padding-right: 1.5rem;\n}\n.carrito-producto-imagen {\n  width: 4rem;\n  border-radius: 1rem;\n}\n.carrito-producto small {\n  font-size: 0.75rem;\n}\n.carrito-producto-eliminar {\n  border: 0;\n  background-color: transparent;\n  color: red;\n}\n.contenedor-carrito {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.carrito-acciones {\n  display: flex;\n  justify-content: space-between;\n}\n.carrito-accion-vaciar {\n  border: 0;\n  background-color: var(--clr-blue);\n  padding: 1rem;\n  border-radius: 1rem;\n  color: var(--clr-white);\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.carrito-accion-eliminar {\n  border: 0;\n  background-color: var(--clr-ligth_blue);\n  padding: 1rem;\n  border-radius: 1rem;\n  color: var(--clr-ligth_green);\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.carrito-accion-der {\n  display: flex;\n}\n.carrito-accion-comprar {\n  display: flex;\n  background-color: var(--clr-blue);\n  padding: 1rem;\n  color: var(--clr-white);\n  text-transform: uppercase;\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n}\n.carrito-accion-total {\n  display: flex;\n  background-color: var(--clr-green);\n  padding: 1rem;\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n  color: var(--clr-white);\n  text-transform: uppercase;\n  gap: 1rem;\n}\n.disabled {\n  display: none;\n}\n/*# sourceMappingURL=carrito.css.map */\n";
  }
});

// src/app/pages/home/carrito/carrito.ts
var Carrito;
var init_carrito3 = __esm({
  "src/app/pages/home/carrito/carrito.ts"() {
    "use strict";
    init_tslib_es6();
    init_carrito();
    init_carrito2();
    init_core();
    Carrito = class Carrito2 {
    };
    Carrito = __decorate([
      Component({
        selector: "app-carrito",
        standalone: true,
        imports: [],
        template: carrito_default,
        styles: [carrito_default2]
      })
      /**
       * @description Componente Carrito, en un futuro se buscara hacer que funcione la logica de carrito mediante endPoints y relacion con pasarelas de pago
       */
    ], Carrito);
  }
});

export {
  Carrito,
  init_carrito3 as init_carrito
};
//# sourceMappingURL=chunk-DQT6I24Z.js.map
