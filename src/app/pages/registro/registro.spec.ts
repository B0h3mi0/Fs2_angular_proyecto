import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Registro } from './registro';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('Registro Component', () => {
  let component: Registro;
  let fixture: ComponentFixture<Registro>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Registro,
        ReactiveFormsModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Registro);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    // Mock localStorage
    spyOn(localStorage, 'getItem').and.returnValue(null);
    spyOn(localStorage, 'setItem');

    // Mock alert
    spyOn(window, 'alert');

    fixture.detectChanges();
  });

  it('should create the Registro component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize registroForm', () => {
    expect(component.registroForm).toBeTruthy();
  });

  it('passwordsMatch should return null when passwords match', () => {
    component.registroForm.patchValue({
      password: '12345678',
      repeatPassword: '12345678'
    });

    const result = component.passwordsMatch(component.registroForm);
    expect(result).toBeNull();
  });

  it('passwordsMatch should return error when passwords do not match', () => {
    component.registroForm.patchValue({
      password: '12345678',
      repeatPassword: '87654321'
    });

    const result = component.passwordsMatch(component.registroForm);
    expect(result).toEqual({ passwordMismatch: true });
  });

  it('should register a new user successfully', () => {
    const result = component.registrarUsuario(
      'test@test.com',
      'Test User',
      '12345678',
      'testuser',
      '',
      ''
    );

    expect(result).toBeTrue();
    expect(window.alert).toHaveBeenCalledWith('Usuario registrado exitosamente.');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('should not register user if email already exists', () => {
    component.usuarios = [
      { email: 'test@test.com', username: 'testuser' }
    ];

    const result = component.registrarUsuario(
      'test@test.com',
      'Otro',
      '12345678',
      'otro',
      '',
      ''
    );

    expect(result).toBeFalse();
    expect(window.alert).toHaveBeenCalledWith('El usuario ya existe.');
  });

  it('should not submit form when passwords do not match', () => {
    component.registroForm.patchValue({
      email: 'test@test.com',
      name: 'Test',
      username: 'test',
      password: '12345678',
      repeatPassword: '87654321'
    });

    component.onSubmit();

    expect(window.alert).toHaveBeenCalledWith('Las contraseñas no coinciden.');
  });

  it('should submit form and navigate on successful registration', () => {
    spyOn(router, 'navigate');

    component.registroForm.patchValue({
      email: 'test@test.com',
      name: 'Test',
      username: 'test',
      password: '12345678',
      repeatPassword: '12345678'
    });

    component.onSubmit();

    expect(router.navigate).toHaveBeenCalledWith(['/']);
    expect(component.submitted).toBeFalse();
  });
});
