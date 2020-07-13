import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
profile={
  name:'',
  id:'',
  category:'',
  categoryid:'',
  address:'',
  description:'',
  contact:'',
  empcode:'',
  image:'',

};
  Profiles=[];
  constructor(private service:CommonserviceService,private routes:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getdata().subscribe((data:any)=>{
      this.Profiles=data.Success;
      const id= this.routes.snapshot.paramMap.get('id');
      this.callprofile(id);
    })
  }
  callprofile(id){
    if(this.Profiles && this.Profiles.length){
      for(let i=0;i<this.Profiles.length;i++){
        if(this.Profiles[i].id == id){
          console.log(typeof(this.Profiles[i]));
          this.profile=this.Profiles[i];
          break;
        }
      }
    }
  }

}
