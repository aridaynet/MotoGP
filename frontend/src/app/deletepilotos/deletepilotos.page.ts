import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotogpService } from '../services/motogp.service';

@Component({
  selector: 'app-deletepilotos',
  templateUrl: './deletepilotos.page.html',
  styleUrls: ['./deletepilotos.page.scss'],
})
export class DeletepilotosPage implements OnInit {

  motogp: any = [];

  constructor( 
    private motogpService: MotogpService,
    private router: Router
  ) { }

  ngOnInit() {  }

  ionViewDidEnter() {
    this.motogpService.getMotogp().subscribe((response) => {
      this.motogp = response;
    })
  }

  removeUser(user, i) {
    if (window.confirm('Are you sure')) {
      this.motogpService.deleteUser(user.id)
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('User deleted!')
        }
      )
    }
  }

}
