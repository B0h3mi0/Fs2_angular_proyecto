import {
  Carrito,
  init_carrito
} from "./chunk-6W3YTF3V.js";
import {
  TestBed,
  init_testing
} from "./chunk-W4OZRNLH.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/home/carrito/carrito.spec.ts
var require_carrito_spec = __commonJS({
  "src/app/pages/home/carrito/carrito.spec.ts"(exports) {
    init_testing();
    init_carrito();
    describe("Carrito", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Carrito]
        }).compileComponents();
        fixture = TestBed.createComponent(Carrito);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_carrito_spec();
//# sourceMappingURL=spec-carrito.spec.js.map
