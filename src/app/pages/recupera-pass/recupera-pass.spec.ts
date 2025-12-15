import { TestBed } from '@angular/core/testing';
import { RecuperaPass } from './recupera-pass';
import Swal from 'sweetalert2';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecuperaPass Component', () => {
  let component: RecuperaPass;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RecuperaPass,
        RouterTestingModule
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(RecuperaPass);
    component = fixture.componentInstance;
  });

  it('should create the RecuperaPass component', () => {
    expect(component).toBeTruthy();
  });

  it('should show error alert when form is invalid', () => {
    const swalSpy = spyOn(Swal, 'fire');

    const fakeForm = {
      invalid: true,
      value: {
        email: ''
      }
    };

    component.enviarCorreo(fakeForm);

    expect(swalSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({
        icon: 'error',
        title: 'Correo inválido'
      }) as any
    );
  });

  it('should show success alert when form is valid', () => {
    const swalSpy = spyOn(Swal, 'fire');

    const fakeForm = {
      invalid: false,
      value: {
        email: 'test@test.com'
      }
    };

    component.enviarCorreo(fakeForm);

    expect(swalSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({
        icon: 'success',
        title: 'Correo enviado'
      }) as any
    );
  });
});
