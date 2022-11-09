import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const altura = document.body.scrollHeight - window.innerHeight;
    const fondo:any = document.getElementById('fondo');

    window.onscroll = () => {
      const anchoFondo = (window.pageYOffset / altura) * 700;
      if(anchoFondo <= 100){
        fondo.style.width = anchoFondo + '%';
      }
    }
  }

}
