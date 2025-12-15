import { TestBed } from '@angular/core/testing';
import { Laboratorios } from './laboratorios';

describe('Laboratorios Component', () => {
    let component: Laboratorios;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [Laboratorios] // 👈 standalone component
        }).compileComponents();

        const fixture = TestBed.createComponent(Laboratorios);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the Laboratorios component', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize laboratorios array with data', () => {
        expect(component.laboratorios).toBeDefined();
        expect(component.laboratorios.length).toBeGreaterThan(0);
    });

    it('should contain exactly 4 laboratorios', () => {
        expect(component.laboratorios.length).toBe(4);
    });

    it('each laboratorio should have required properties', () => {
        component.laboratorios.forEach(lab => {
        expect(lab.id).toBeDefined();
        expect(lab.nombre).toBeTruthy();
        expect(lab.direccion).toBeTruthy();
        expect(lab.telefono).toBeTruthy();
        expect(lab.tipoAnalisis).toBeTruthy();
        });
    });

    it('should contain a laboratorio with tipoAnalisis Clínico', () => {
        const existe = component.laboratorios.some(
        lab => lab.tipoAnalisis === 'Clínico'
        );
        expect(existe).toBeTrue();
    });
});
