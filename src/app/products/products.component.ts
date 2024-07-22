import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = [
    {
      image: 'assets/images/product-1.jpeg',
      name: 'SKU: A43-44328-B',
      description: 'Glossy Gray 19 Aluminium  Wheel AR-19',
      amount: '$589.00',
      rating: 4,
      reviewcount : 29
    },
    {
      image: 'assets/images/product-2.jpeg',
      name: 'SKU: 729-51203-B',
      description: 'Twin Exhaust Pipe From Brandix Z54',
      amount: '$749.00',
      rating: 4,
      reviewcount : 9
    },
    {
      image: 'assets/images/product-3.jpeg',
      name: 'SKU: 7573-49386-C',
      description: 'Motor OIL level 5',
      amount: '$100',
      rating: 5,
      reviewcount : 2
    },
    {
      image: 'assets/images/product-4.jpeg',
      name: 'SKU: 729-573-B',
      description: 'Brandix Engine Block Z4',
      amount: '$542.00',
      rating: 0,
      reviewcount : 'No'
    },
    {
      image: 'assets/images/product-5.jpeg',
      name: 'SKU: 7573-49386-B',
      description: 'Brandix Clitch Discs Z175',
      amount: '$100',
      rating: 3, 
      reviewcount : 7
    }
  ];

  isZoomed = false;
  zoomedImage = '';

  constructor() { }

  ngOnInit(): void {
  }
  zoomImage(image: string) {
    this.zoomedImage = image;
    this.isZoomed = true;
  }
}
