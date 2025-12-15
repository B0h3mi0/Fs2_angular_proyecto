import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-laboratorios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './laboratorios.html',
  styleUrl: './laboratorios.scss'
})
export class Laboratorios {

  laboratorios = [
    { 
      id: 1, 
      nombre: 'Laboratorio Central', 
      direccion: 'Av. Siempre Viva 123', 
      telefono: '987654321', 
      tipoAnalisis: 'Clínico' 
    },
    { 
      id: 2, 
      nombre: 'Laboratorio BioPlus', 
      direccion: 'Calle Los Robles 540', 
      telefono: '945678233', 
      tipoAnalisis: 'Genético' 
    },
    { 
      id: 3, 
      nombre: 'LabSalud Premium', 
      direccion: 'Diagonal Oriente 221', 
      telefono: '998877665', 
      tipoAnalisis: 'Hematología' 
    },
    { 
      id: 4, 
      nombre: 'Laboratorio VidaLab', 
      direccion: 'Av. Las Condes 4421', 
      telefono: '912345678', 
      tipoAnalisis: 'Toxicología' 
    }
  ];

}
