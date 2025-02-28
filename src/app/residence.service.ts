import { Injectable } from '@angular/core';
import { Residence } from './CORE/model/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  listResidences: Residence[] = [
      { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R2.jpg", status: "Disponible" },
      { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
      { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
      { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
    ];



    getlist() 
    {
      return this.listResidences ;
    }

  constructor() { }
}
