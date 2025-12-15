import { TestBed } from '@angular/core/testing';
import { Perfil } from './perfil';

describe('Perfil Component', () => {
  let component: Perfil;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perfil] // 👈 standalone component
    }).compileComponents();

    const fixture = TestBed.createComponent(Perfil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Perfil component', () => {
    expect(component).toBeTruthy();
  });

  it('should be an instance of Perfil', () => {
    expect(component instanceof Perfil).toBeTrue();
  });
});
