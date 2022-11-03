import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MotogpService } from '../services/motogp.service';

@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.page.html',
  styleUrls: ['./pilotos.page.scss'],
})
export class PilotosPage implements OnInit {

  userForm: FormGroup;

  constructor(

    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private motogpService: MotogpService   
  ) {
    this.userForm = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      categoria: [''],
    })
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.motogpService.createUser(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
            //this.router.navigate(['/tabs/tab3']);
            this.router.navigateByUrl('/', { skipLocationChange: true}).then(() =>
            this.router.navigate(["/tabs/tab3"]));
          })
        });
    }
  }
  gotoTab3(){
    this.router.navigateByUrl("/tabs/tab3");
  }

}
