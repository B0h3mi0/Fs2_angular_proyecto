import {
  Productos,
  init_productos
} from "./chunk-2GNIORGL.js";
import {
  TestBed,
  init_testing
} from "./chunk-W4OZRNLH.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/pages/home/productos/productos.spec.ts
var require_productos_spec = __commonJS({
  "src/app/pages/home/productos/productos.spec.ts"(exports) {
    init_testing();
    init_productos();
    describe("Productos", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Productos]
        }).compileComponents();
        fixture = TestBed.createComponent(Productos);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_productos_spec();
//# sourceMappingURL=spec-productos.spec.js.map
