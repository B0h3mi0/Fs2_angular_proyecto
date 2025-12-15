import {
  Aside,
  init_aside
} from "./chunk-O7VAQYDD.js";
import {
  ActivatedRoute,
  init_router
} from "./chunk-QP2D5CGL.js";
import "./chunk-G3ED4NYO.js";
import {
  TestBed,
  init_testing
} from "./chunk-W4OZRNLH.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/home/aside/aside.spec.ts
var require_aside_spec = __commonJS({
  "src/app/pages/home/aside/aside.spec.ts"(exports) {
    init_testing();
    init_aside();
    init_router();
    describe("Aside", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Aside],
          providers: [
            {
              provide: ActivatedRoute,
              useValue: {
                snapshot: {
                  paramMap: {
                    get: (key) => "valor-ficticio"
                    // simula obtener un parámetro de la ruta
                  }
                }
              }
            }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Aside);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_aside_spec();
//# sourceMappingURL=spec-aside.spec.js.map
