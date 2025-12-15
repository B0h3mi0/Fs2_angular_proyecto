import {
  RouterLink,
  init_router
} from "./chunk-QP2D5CGL.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-W4OZRNLH.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\pages\home\perfil\perfil.html
var perfil_default;
var init_perfil = __esm({
  "angular:jit:template:src\\app\\pages\\home\\perfil\\perfil.html"() {
    perfil_default = '<div class="row align-items-center justify-content-center">\r\n        \r\n    <!-- Carrusel / Imagen fija -->\r\n    <div class="col-12 col-md-6 mb-4 mb-md-0">\r\n        <div class="carrusel-contenedor">\r\n        <img src="images/user.png" class="d-block w-100 carrusel-imagen" alt="Perfil de usuario" />\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Formulario de edici\xF3n de perfil -->\r\n    <div class="formulario col-12 col-md-6">\r\n        <h2 class="mb-4 text-success">Mi Cuenta</h2>\r\n        <p class="mb-3">Modifica tu informaci\xF3n personal:</p>\r\n        <form action="/perfil" method="POST">\r\n        <div class="mb-3">\r\n            <label for="nombre" class="form-label">Nombre completo:</label>\r\n            <input type="text" id="nombre" name="nombre" class="form-control" value="Sebasti\xE1n" required />\r\n        </div>\r\n\r\n        <div class="mb-3">\r\n            <label for="email" class="form-label">Correo electr\xF3nico:</label>\r\n            <input type="email" id="email" name="email" class="form-control" value="sebastian@email.com" required />\r\n        </div>\r\n\r\n        <div class="mb-3">\r\n            <label for="telefono" class="form-label">Tel\xE9fono:</label>\r\n            <input type="tel" id="telefono" name="telefono" class="form-control" value="+56 9 1234 5678" />\r\n        </div>\r\n\r\n        <div class="mb-3">\r\n            <label for="password" class="form-label">Nueva contrase\xF1a:</label>\r\n            <input type="password" id="password" name="password" class="form-control" placeholder="Dejar en blanco para no cambiarla" />\r\n        </div>\r\n\r\n        <div class="mb-3">\r\n            <label for="confirm-password" class="form-label">Confirmar nueva contrase\xF1a:</label>\r\n            <input type="password" id="confirm-password" name="confirm-password" class="form-control" />\r\n        </div>\r\n\r\n        <div id="errores" class="text-danger mb-3"></div>\r\n\r\n        <button type="submit" class="btn btn-success w-100">Guardar cambios</button>\r\n        </form>\r\n\r\n        <div class="mt-3 text-center">\r\n        <a  class="text-danger text-decoration-none">Cerrar sesi\xF3n</a>\r\n        </div>\r\n    </div>\r\n</div>';
  }
});

// angular:jit:style:src\app\pages\home\perfil\perfil.scss
var perfil_default2;
var init_perfil2 = __esm({
  "angular:jit:style:src\\app\\pages\\home\\perfil\\perfil.scss"() {
    perfil_default2 = "/* src/app/pages/home/perfil/perfil.scss */\n/*# sourceMappingURL=perfil.css.map */\n";
  }
});

// src/app/pages/home/perfil/perfil.ts
var Perfil;
var init_perfil3 = __esm({
  "src/app/pages/home/perfil/perfil.ts"() {
    "use strict";
    init_tslib_es6();
    init_perfil();
    init_perfil2();
    init_core();
    init_router();
    Perfil = class Perfil2 {
    };
    Perfil = __decorate([
      Component({
        selector: "app-perfil",
        standalone: true,
        imports: [RouterLink],
        template: perfil_default,
        styles: [perfil_default2]
      })
      /**
       * @description Perfil nos permitira editar los datos que el usuario tiene registrados
       *
       * @param email Correo electrónico del usuario.
       * @param name Nombre completo del usuario.
       * @param password Contraseña del usuario.
       * @param username Nombre de usuario único.
       * @param birthdate Fecha de nacimiento.
       * @param phone Número de teléfono.
       * @returns `true` si el usuario fue modificado con exito, `false` si ocurrio un error al setear los datos.
       */
    ], Perfil);
  }
});

export {
  Perfil,
  init_perfil3 as init_perfil
};
//# sourceMappingURL=chunk-LFLRCAUR.js.map
