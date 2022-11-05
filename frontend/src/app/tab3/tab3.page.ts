import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MotogpService } from '../services/motogp.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  motogp: any = [];
  updateUserFg: FormGroup;
  id: any;
  constructor(private motogpService: MotogpService, private router: Router, private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder) {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.getAllMotogp();
    this.fetchUser(this.id);
    this.updateUserFg = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      categoria: ['']
    })
  }

  getAllMotogp() {
    this.motogpService.getMotogp().subscribe(response => {
      this.motogp = response;
    })
  }

  gotoMotoGP() {
    this.router.navigateByUrl("/pilotos");
  }
  gotoUpdate() {
    this.router.navigateByUrl("/updatepilotos");
  }
  ionViewDidEnter() {
    this.motogpService.getUsers().subscribe((response) => {
      this.motogp = response;
    })
  }

  removeUser(motogp, i) {
    if (window.confirm('Estás seguro de que quieres eliminar este piloto?')) {
      this.motogpService.deleteUser(motogp.id)
        .subscribe(() => {
          this.ionViewDidEnter();
          console.log('¡Usuario eliminado!')
        }
        )
    }
  }
  fetchUser(id) {
    this.motogpService.getUser(id).subscribe((data) => {
      this.updateUserFg.setValue({
        name: data['name'],
        apellido: data['apellido'],
        categoria: data['categoria']
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
          this.router.navigate(['/tabs/tab3']);
        })
    }
  }

}

