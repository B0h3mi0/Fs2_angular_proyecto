import {
  Main,
  init_main
} from "./chunk-HLEGQ3HL.js";
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

// src/app/pages/main/main.spec.ts
var require_main_spec = __commonJS({
  "src/app/pages/main/main.spec.ts"(exports) {
    init_testing();
    init_main();
    describe("Main", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Main]
        }).compileComponents();
        fixture = TestBed.createComponent(Main);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_main_spec();
//# sourceMappingURL=spec-main.spec.js.map
