import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../CORE/model/residence';
import { ResidenceService } from '../residence.service';

@Component({
  selector: 'app-residence-detail',
  templateUrl: './residence-detail.component.html',
  styleUrls: ['./residence-detail.component.css']
})
export class ResidenceDetailComponent {
  id: any;
  res: Residence | undefined;

  constructor(private act:ActivatedRoute, private rs:ResidenceService)
  {
    
  }


  ngOnInit()
  {
    //this.id = this.act.snapshot.params['id']
    this.act.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this.res=this.rs.getlist().filter(res=>res.id==this.id)[0] ; 



  }

}
