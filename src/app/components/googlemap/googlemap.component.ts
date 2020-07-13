import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/service/commonservice.service';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  lat:Number;
  long:Number;
  mapTypeId = 'hybrid';
  locations=[];
  constructor(private service:CommonserviceService) { }

  ngOnInit(): void {
    console.log(this.service.fun());
    this.service.getdata().subscribe((data:any)=>{
      this.locations=data.location;
      console.log(this.locations);
      this.lat=data.location[0].lat;
      this.long=data.location[0].longg;
    })

  }
}
