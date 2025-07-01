import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForm } from './login-form';
import { ActivatedRoute } from '@angular/router';

describe('LoginForm', () => {
  let component: LoginForm;
  let fixture: ComponentFixture<LoginForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginForm],
      providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get: (key: string) => 'valor-ficticio' // simula obtener un parámetro de la ruta
            }
          }
        }
      }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
