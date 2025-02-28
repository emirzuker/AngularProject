import { Component } from '@angular/core';
import { Residence } from '../CORE/model/residence';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {


  constructor (private rs:ResidenceService) { }

  address: string | undefined;
  favorites: Residence[] = [];
  searchQuery: string = '';  
  filteredResidences: Residence[] = this.rs.getlist();  

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
      this.filteredResidences = this.rs.getlist();  
    } else {
      this.filteredResidences = this.rs.getlist().filter(res =>
        res.address.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}
