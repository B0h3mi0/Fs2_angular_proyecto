import { TestBed } from '@angular/core/testing';
import { Main } from './main';

describe('Main Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Main] // 👈 CLAVE
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Main);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
