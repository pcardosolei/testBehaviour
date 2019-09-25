import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  value: number;
  constructor(private profileService: ProfileServiceService) { }

  
  ngOnInit(){
    this.profileService.userBehaviour$.subscribe( info => {
      this.value = info;
    });
  }

}
