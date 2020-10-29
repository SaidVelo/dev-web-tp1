import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    const path = '../../assets/socials-icons/'
    const socialList = [
      {alt: 'Logo Gmail', src: path + 'email.png'},
      {alt: 'Logo Facebook', src: path + 'facebook.png'},
      {alt: 'Logo Twitter', src: path + 'twirrer.png'},
      {alt: 'Logo Instagram', src: path + 'instagram.png'},
      {alt: 'Logo Youtube', src: path + 'youtube.png'},
      {alt: 'Logo Spotify', src: path + 'facebook.png'},
    ]
  }

}
