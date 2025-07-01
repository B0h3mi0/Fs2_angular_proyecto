import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aside } from './aside';
import { ActivatedRoute } from '@angular/router';

describe('Aside', () => {
  let component: Aside;
  let fixture: ComponentFixture<Aside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aside],
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

    fixture = TestBed.createComponent(Aside);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
