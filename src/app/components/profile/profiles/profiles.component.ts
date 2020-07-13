import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/service/commonservice.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  Profiles=[];
  constructor(private service:CommonserviceService) { }

  ngOnInit(): void {
    this.service.getdata().subscribe((data:any)=>{
      this.Profiles=data.Success;
      console.log(this.Profiles)
    })
  }

}
