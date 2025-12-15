import { TestBed } from '@angular/core/testing';
import { Carrito } from './carrito';

describe('Carrito Component', () => {
  let component: Carrito;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carrito] // 👈 standalone component
    }).compileComponents();

    const fixture = TestBed.createComponent(Carrito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Carrito component', () => {
    expect(component).toBeTruthy();
  });
});
