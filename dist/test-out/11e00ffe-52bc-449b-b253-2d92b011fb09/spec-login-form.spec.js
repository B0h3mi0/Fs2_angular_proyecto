import {
  LoginForm,
  init_login_form
} from "./chunk-73CNLBJS.js";
import "./chunk-R2WPECNJ.js";
import "./chunk-QP2D5CGL.js";
import "./chunk-G3ED4NYO.js";
import {
  TestBed,
  init_testing
} from "./chunk-W4OZRNLH.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/login-form/login-form.spec.ts
var require_login_form_spec = __commonJS({
  "src/app/pages/login-form/login-form.spec.ts"(exports) {
    init_testing();
    init_login_form();
    describe("LoginForm", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [LoginForm]
        }).compileComponents();
        fixture = TestBed.createComponent(LoginForm);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_form_spec();
//# sourceMappingURL=spec-login-form.spec.js.map
