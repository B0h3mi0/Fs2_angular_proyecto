import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Productos } from './productos';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Producto } from '../../../models/producto.models';
import { CommonModule } from '@angular/common';

describe('Productos', () => {
  let component: Productos;
  let fixture: ComponentFixture<Productos>;
  let httpMock: HttpTestingController;

  const mockProductos: Producto[] = [
    {
      id: '1',
      nom_producto: 'Ajedrez',
      precio: '$12.000',
      imagen: '/images/mejoradas/producto_ajedrez.webp'
    },
    {
      id: '2',
      nom_producto: 'Basta',
      precio: '$8.000',
      imagen: '/images/mejoradas/producto_basta.jpg'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CommonModule, Productos]
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(Productos);
    component = fixture.componentInstance;
    
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya requests pendientes
  });

  it('Debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería cargar los productos desde el JSON', () => {
  fixture.detectChanges(); // Primero disparamos ngOnInit y la llamada HTTP

  const req = httpMock.expectOne('https://b0h3mi0.github.io/Json_pruebas_fs2/productos.json');
  expect(req.request.method).toBe('GET');

  req.flush(mockProductos); // Respondemos la petición

  // Ya con la respuesta aplicada, verificamos que el array se actualizó
  expect(component.producto.length).toBe(2);
  expect(component.producto[0].nom_producto).toBe('Ajedrez');
  expect(component.producto[1].precio).toBe('$8.000');
  });
});
