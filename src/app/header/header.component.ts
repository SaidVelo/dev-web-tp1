import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  path = '../../assets/socials-icons/'
  socialList = [
    {alt: 'Logo Gmail', src: this.path + 'email.png'},
    {alt: 'Logo Facebook', src: this.path + 'facebook.png'},
    {alt: 'Logo Twitter', src: this.path + 'twitter.png'},
    {alt: 'Logo Instagram', src: this.path + 'instagram.png'},
    {alt: 'Logo Youtube', src: this.path + 'youtube.png'},
    {alt: 'Logo Spotify', src: this.path + 'facebook.png'},
  ]
  constructor() { 
  }

  ngOnInit(): void {

  }

}
