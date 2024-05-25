import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  user = {
    username: 'User123',
    description: 'This is a description',
    address: ''
  };
  editingUsername = false;
  editingDescription = false;

  constructor() { }

  ngOnInit() { }

  changeAvatar() {
    // Functionality to change avatar
  }

  editUsername() {
    this.editingUsername = true;
  }

  saveUsername() {
    this.editingUsername = false;
    // Functionality to save username
  }

  editDescription() {
    this.editingDescription = true;
  }

  saveDescription() {
    this.editingDescription = false;
    // Functionality to save description
  }

  locate() {
  
   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
     this.user.address = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
     });
     }
  }
}
