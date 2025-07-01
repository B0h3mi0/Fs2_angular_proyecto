import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Registro } from './registro';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('Registro', () => {
  let component: Registro;
  let fixture: ComponentFixture<Registro>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') }; /** @param {routerSpy} - Con este parametro simulamos la navegacion */

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registro, ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: routerSpy,},
        
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Registro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => { /** @description  */
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    component.registroForm.setValue({
      email: '',
      name: '',
      username: '',
      password: '',
      repeatPassword: '',
      birthdate: '',
      phone: ''
    });
    expect(component.registroForm.invalid).toBeTrue();
  });

  it('should mark form as valid with correct data', () => {
    component.registroForm.setValue({
      email: 'test@example.com',
      name: 'Sebastián',
      username: 'seba123',
      password: 'Passw0rd!',
      repeatPassword: 'Passw0rd!',
      birthdate: '2000-01-01',
      phone: '123456789'
    });
    expect(component.registroForm.valid).toBeTrue();
  });

  it('should show alert if passwords do not match', () => {
    spyOn(window, 'alert');
    component.registroForm.setValue({
      email: 'test@example.com',
      name: 'Sebastián',
      username: 'seba123',
      password: 'Passw0rd!',
      repeatPassword: 'AnotherPass!',
      birthdate: '',
      phone: ''
    });

    component.onSubmit();

    expect(window.alert).toHaveBeenCalledWith('Las contraseñas no coinciden.');
  });

  it('should register user and navigate to home on success', () => {
    spyOn(window, 'alert');
    component.registroForm.setValue({
      email: 'nuevo@example.com',
      name: 'Nuevo Usuario',
      username: 'nuevoUser',
      password: 'Test1234!',
      repeatPassword: 'Test1234!',
      birthdate: '',
      phone: ''
    });

    component.onSubmit();

    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const registrado = usuariosGuardados.find((u: any) => u.email === 'nuevo@example.com');

    expect(registrado).toBeTruthy();
    expect(window.alert).toHaveBeenCalledWith('Usuario registrado exitosamente.');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should not allow duplicate users', () => {
    spyOn(window, 'alert');
    
    // Forzar usuario existente
    const usuarioExistente = {
    email: 'repetido@example.com',
    username: 'usuario1',
    name: 'X',
    password: 'X',
    birthdate: '',
    phone: ''
  };

  // Simula que el usuario ya está guardado
  localStorage.setItem('usuarios', JSON.stringify([usuarioExistente]));

  // Forzar sincronización con lo que hace el constructor del componente
  component.usuarios = [usuarioExistente];

    component.registroForm.setValue({
      email: 'repetido@example.com',
      name: 'Repetido',
      username: 'usuario1',
      password: 'Test1234!',
      repeatPassword: 'Test1234!',
      birthdate: '',
      phone: ''
    });

    component.onSubmit();

    expect(window.alert).toHaveBeenCalledWith('El usuario ya existe.');
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  afterEach(() => {
  localStorage.removeItem('usuarios');
  });
});

