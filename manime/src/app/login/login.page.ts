import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../projects/api/service/firebase.service';
import { user } from 'src/models/user-data.model';
import { UtilsService } from '../projects/api/service/utils.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  loginData = { email: '', password: '' };

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  /* ======FORM GROUP======= */
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit() {}
  async submit() {
    if(this.form.valid){
      const loading = await this.utilsSvc.loading();
      await loading.present();
      this.firebaseSvc.signIn(this.form.value as user)
      .then(res => {
        console.log(res);
      }).catch(error =>{
        console.log(error);
        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2000,
          color: "primary",
          position: "middle",
          icon: "alert-circle-outline"
        });
      }).finally(()=>{
        loading.dismiss();
      })
    }
  }
}

