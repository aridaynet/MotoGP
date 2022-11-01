import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MotogpService } from '../services/motogp.service';

@Component({
  selector: 'app-updatepilotos',
  templateUrl: './updatepilotos.page.html',
  styleUrls: ['./updatepilotos.page.scss'],
})
export class UpdatepilotosPage implements OnInit {

  updateUserFg: FormGroup;
  id: any;

  constructor(
    private motogpService: MotogpService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchUser(this.id);
    this.updateUserFg = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      categoria: [''],
    })
  }

  fetchUser(id) {
    this.motogpService.getUser(id).subscribe((data) => {
      this.updateUserFg.setValue({
        nombre: data['nombre'],
        apellido: data['apellido'],
        categoria: data['categoria'],
      });
    });
  }

  onSubmit() {
    if (!this.updateUserFg.valid) {
      return false;
    } else {
      this.motogpService.updateUser(this.id, this.updateUserFg.value)
        .subscribe(() => {
          this.updateUserFg.reset();
          this.router.navigateByUrl("/tabs/tab3");
        })
    }
  }

}