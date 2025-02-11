import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../CORE/model/residence';

@Component({
  selector: 'app-residence-detail',
  templateUrl: './residence-detail.component.html',
  styleUrls: ['./residence-detail.component.css']
})
export class ResidenceDetailComponent {
  id: any;
  res: Residence | undefined;
  listResidences: Residence[] = [
      { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R2.jpg", status: "Disponible" },
      { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg", status: "Disponible" },
      { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg", status: "Vendu" },
      { id: 4, name: "El Anber", address: "inconnu", image: "../../assets/images/R4.jpg", status: "En Construction" }
    ];
  constructor(private act:ActivatedRoute)
  {
    
  }


  ngOnInit()
  {
    //this.id = this.act.snapshot.params['id']
    this.act.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this.res=this.listResidences.filter(res=>res.id==this.id)[0] ; 



  }

}
