import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-cardview',
  standalone: true,
  imports: [],
  templateUrl: './cardview.component.html',
  styleUrl: './cardview.component.css'
})
export class CardviewComponent {
  constructor(private routeId: ActivatedRoute, private api:ApiService){}
    data:any=[]

    ngOnInit(){

      this.api.getProducts().subscribe((res:any)=>{
        let id=this.routeId.snapshot.paramMap.get('id')
        let response=res
        let product=response.filter((e:any)=>e.id==id)
        this.data=product[0]
      })
    }
}
