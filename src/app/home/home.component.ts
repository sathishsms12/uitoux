import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  images:any = [
    { src: 'assets/images/brand-1.png', title: 'AIMPARTS' },
    { src: 'assets/images/brand-2.png', title: 'WINDENGINE' },
    { src: 'assets/images/brand-3.png', title: 'TURBOELECTRIC' },
    { src: 'assets/images/brand-4.png', title: 'STARTONE' },
    { src: 'assets/images/brand-5.png', title: 'BRANDIX' },
    { src: 'assets/images/brand-6.png', title: 'ABSBRAND' },
    { src: 'assets/images/brand-7.png', title: 'GRAETCIRCLE' },
    { src: 'assets/images/brand-8.png', title: 'JUSTROMB' },
    { src: 'assets/images/brand-9.png', title: 'FASTWEELS' },
    { src: 'assets/images/brand-10.png', title: 'STROKYA' },
    { src: 'assets/images/brand-11.png', title: 'MISSION-51' },
    { src: 'assets/images/brand-12.png', title: 'FUELCORP' },
    { src: 'assets/images/brand-13.png', title: 'REDGATE' },
    { src: 'assets/images/brand-14.png', title: 'BLOCKS' },
    { src: 'assets/images/brand-15.png', title: 'BLACKBOX' },
    { src: 'assets/images/brand-16.png', title: 'SQUAREGARAGE' }
  ];
  chunkedImages: string[][] = [];

  ngOnInit(): void {
    
  }
}
