import {
  Main,
  init_main
} from "./chunk-Z3LX5V7D.js";
import "./chunk-73CNLBJS.js";
import "./chunk-R2WPECNJ.js";
import {
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

// angular:jit:template:src\app\app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src\\app\\app.html"() {
    app_default = "<app-main></app-main>\r\n\r\n";
  }
});

// angular:jit:style:src\app\app.scss
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src\\app\\app.scss"() {
    app_default2 = "/* src/app/app.scss */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_common();
    init_main();
    App = class App2 {
      title = "AngularProyecto";
      isLoggedIn = false;
      toggleLogin() {
        this.isLoggedIn = !this.isLoggedIn;
      }
    };
    App = __decorate([
      Component({
        selector: "app-root",
        standalone: true,
        imports: [RouterModule, CommonModule, Main],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
