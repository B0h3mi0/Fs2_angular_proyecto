import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { LoginForm } from './login-form';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { ElementRef } from '@angular/core';

describe('LoginForm Component', () => {
  let component: LoginForm;
  let fixture: ComponentFixture<LoginForm>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginForm, RouterTestingModule],
      providers: [FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginForm);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    // Mock ElementRef (toast)
    (component as any).el = {
      nativeElement: {
        querySelector: () => ({
          appendChild: () => {}
        })
      }
    } as ElementRef;

    // Mock Bootstrap
    (window as any).bootstrap = {
      Toast: function () {
        return { show: () => {}, hide: () => {} };
      }
    };

    // Mock localStorage
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([
      { email: 'test@test.com', username: 'testuser', password: '1234' }
    ]));

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.valid).toBeFalse();
  });

  it('should login successfully', () => {
    spyOn(router, 'navigate');
    const result = component.iniciarSesion('test@test.com', '1234');

    expect(result).toBeTrue();
    expect(router.navigate).toHaveBeenCalledWith(['/home/productos']);
  });

  it('should fail login with wrong credentials', () => {
    const result = component.iniciarSesion('bad@test.com', 'bad');
    expect(result).toBeFalse();
  });

  it('should submit valid form and reset', () => {
    spyOn(component, 'iniciarSesion').and.returnValue(true);

    component.loginForm.setValue({
      emailOrUsername: 'test@test.com',
      password: '1234'
    });

    component.onSubmit();

    expect(component.loginForm.pristine).toBeTrue();
  });

  it('should show error when form is invalid', () => {
    spyOn(component, 'showToast');
    component.onSubmit();

    expect(component.showToast).toHaveBeenCalledWith(
      'Formulario no válido.',
      'danger'
    );
  });

  it('should navigate to register page without reloading', fakeAsync(() => {
  const navigateSpy = spyOn(router, 'navigateByUrl')
    .and.returnValue(Promise.resolve(true));

  spyOn(window.location, 'reload').and.callFake(() => {});

  component.navigateToRegister();
  tick();

  expect(navigateSpy).toHaveBeenCalledWith('/registro');
}));
});
