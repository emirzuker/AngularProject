import { Component } from '@angular/core';
import { Residence } from '../CORE/model/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
  ];

  address: string | undefined;
  favorites: Residence[] = [];
  searchQuery: string = '';  // Property for the search query
  filteredResidences: Residence[] = this.listResidences;  // Property to hold the filtered list

  showLocation(address: string) {
    if (address === 'inconnu') {
      return alert("Address is unknown");
    } else {
      this.address = address;
    }
  }

  toggleFavorite(res: Residence) {
    const index = this.favorites.indexOf(res);
    if (index === -1) {
      this.favorites.push(res);
    } else {
      this.favorites.splice(index, 1);
    }
  }

  isFavorite(res: Residence): boolean {
    return this.favorites.includes(res);
  }

  filterResidences() {
    if (this.searchQuery.trim() === '') {
      this.filteredResidences = this.listResidences;  
    } else {
      this.filteredResidences = this.listResidences.filter(res =>
        res.address.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}
