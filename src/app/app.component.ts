import { Component } from '@angular/core';
import { ProfileServiceService } from './profile-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testBehaviour';
  value:number;
  constructor(private profileService: ProfileServiceService){
  }


  ngOnInit(){
    this.profileService.userBehaviour$.subscribe( info => {
      this.value = info;
    });

    this.profileService.random();

  }
}
