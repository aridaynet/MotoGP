import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  motogpForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(

    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private motogpService: MotogpService,
    private photoService: PhotoService
  ) {
    this.motogpForm = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      categoria: ['']
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
  ionViewWillEnter() {
    this.motogpForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() {
    this.motogpForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      categoria: ['', [Validators.required]]

    })
  }
  gotoTab3() {
    this.router.navigateByUrl("/tabs/tab3");
  }
  
  async onSubmit() {
    this.isSubmitted = true;
    if (!this.motogpForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      this.motogpService.createMotogp(this.motogpForm.value, blob).subscribe(data => {
        console.log("Photo sent!");
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          this.router.navigate(["/tabs/tab3"]));
      })
    }
  }
}

    /*async onSubmit() {
      if (!this.userForm.valid) {
        return false;
      } else {
        let blob = null;
        if (this.capturedPhoto != "") {
          const response = await fetch(this.capturedPhoto);
          blob = await response.blob();
        }
        this.motogpService.createUser(this.userForm.value, blob).subscribe(data => {
              this.userForm.reset();
              //this.router.navigate(['/tabs/tab3']);
              this.router.navigateByUrl('/', { skipLocationChange: true}).then(() =>
              this.router.navigate(["/tabs/tab3"]));
            })
          };
      
    }*/

