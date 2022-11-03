import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MotogpService } from '../services/motogp.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-pilotos',
  templateUrl: './pilotos.page.html',
  styleUrls: ['./pilotos.page.scss'],
})
export class PilotosPage implements OnInit {

  userForm: FormGroup;
  capturedPhoto: string = "";

  constructor(

    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private motogpService: MotogpService, 
    private photoService: PhotoService
  ) {
    this.userForm = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      categoria: [''],
    })
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
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
