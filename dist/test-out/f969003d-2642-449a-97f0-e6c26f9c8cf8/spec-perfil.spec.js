import {
  Perfil,
  init_perfil
} from "./chunk-LFLRCAUR.js";
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

// src/app/pages/home/perfil/perfil.spec.ts
var require_perfil_spec = __commonJS({
  "src/app/pages/home/perfil/perfil.spec.ts"(exports) {
    init_testing();
    init_perfil();
    describe("Perfil", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Perfil]
        }).compileComponents();
        fixture = TestBed.createComponent(Perfil);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_perfil_spec();
//# sourceMappingURL=spec-perfil.spec.js.map
