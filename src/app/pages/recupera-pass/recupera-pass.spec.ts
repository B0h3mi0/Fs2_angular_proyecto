import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperaPass } from './recupera-pass';
import { ActivatedRoute } from '@angular/router';

describe('RecuperaPass', () => {
  let component: RecuperaPass;
  let fixture: ComponentFixture<RecuperaPass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperaPass],
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

    fixture = TestBed.createComponent(RecuperaPass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
