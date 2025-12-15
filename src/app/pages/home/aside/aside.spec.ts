import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Aside } from './aside';

describe('Aside Component', () => {
  let component: Aside;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Aside,               
        RouterTestingModule  
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(Aside);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Aside component', () => {
    expect(component).toBeTruthy();
  });

  it('should be instance of Aside', () => {
    expect(component instanceof Aside).toBeTrue();
  });
});
