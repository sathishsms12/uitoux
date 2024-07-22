import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  images = [
    { src: 'assets/images/brand-1.png', title: 'Aimparts' },
    { src: 'assets/images/brand-2.png', title: 'Image 2' },
    { src: 'assets/images/brand-3.png', title: 'Image 3' },
    { src: 'assets/images/brand-4.png', title: 'Image 4' },
    { src: 'assets/images/brand-5.png', title: 'Image 5' },
    { src: 'assets/images/brand-6.png', title: 'Image 6' },
    { src: 'assets/images/brand-7.png', title: 'Image 7' },
    { src: 'assets/images/brand-8.png', title: 'Image 8' },
    { src: 'assets/images/brand-9.png', title: 'Image 9' },
    { src: 'assets/images/brand-10.png', title: 'Image 10' },
    { src: 'assets/images/brand-11.png', title: 'Image 11' },
    { src: 'assets/images/brand-12.png', title: 'Image 12' },
    { src: 'assets/images/brand-13.png', title: 'Image 13' },
    { src: 'assets/images/brand-14.png', title: 'Image 14' },
    { src: 'assets/images/brand-15.png', title: 'Image 15' },
    { src: 'assets/images/brand-16.png', title: 'Image 16' }
  ];
  ngOnInit(): void {
  }
}
