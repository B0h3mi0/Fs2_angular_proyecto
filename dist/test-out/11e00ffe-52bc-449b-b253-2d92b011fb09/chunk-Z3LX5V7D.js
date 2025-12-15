import {
  LoginForm,
  init_login_form
} from "./chunk-73CNLBJS.js";
import {
  RouterOutlet,
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

// angular:jit:template:src\app\pages\main\main.html
var main_default;
var init_main = __esm({
  "angular:jit:template:src\\app\\pages\\main\\main.html"() {
    main_default = '<div class="container-full py-4 d-flex justify-content-center">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<div id="toast-container" class="toast-container position-fixed top-0 end-0 p-3"></div>\r\n';
  }
});

// angular:jit:style:src\app\pages\main\main.scss
var main_default2;
var init_main2 = __esm({
  "angular:jit:style:src\\app\\pages\\main\\main.scss"() {
    main_default2 = "/* src/app/pages/main/main.scss */\n/*# sourceMappingURL=main.css.map */\n";
  }
});

// src/app/pages/main/main.ts
var Main;
var init_main3 = __esm({
  "src/app/pages/main/main.ts"() {
    "use strict";
    init_tslib_es6();
    init_main();
    init_main2();
    init_core();
    init_login_form();
    init_router();
    Main = class Main2 {
    };
    Main = __decorate([
      Component({
        selector: "app-main",
        standalone: true,
        imports: [RouterOutlet, LoginForm],
        template: main_default,
        styles: [main_default2]
      })
    ], Main);
  }
});

export {
  Main,
  init_main3 as init_main
};
//# sourceMappingURL=chunk-Z3LX5V7D.js.map
