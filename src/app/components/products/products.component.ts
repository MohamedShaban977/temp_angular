import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProducts } from 'src/app/Models/iproducts';
import { Constants } from 'src/shared/app-managers/constanse';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  orderTotalPrice: number = 0;
  selectedCategoryId: number = 0;
  products: Array<IProducts>;

  categories: ICategory[];

  constructor() {
    this.categories = [{
      id: 1,
      name: 'Laptop'
    },
    {
      id: 2,
      name: 'Tablet'
    },
    {
      id: 3,
      name: 'Mobile'
    }
    ];
    this.products = [
      {
        id: 10,
        name: 'Dell Laptop',
        price: 100,
        quantity: 5,
        imgUrl: new Constants().fakeImage,
        categoryId: 1
      },
      {
        id: 20,
        name: 'Hp Laptop',
        price: 200,
        quantity: 0,
        imgUrl: new Constants().fakeImage,
        categoryId: 1
      },
      {
        id: 30,
        name: 'Lenovo Laptop',
        price: 350,
        quantity: 2,
        imgUrl: new Constants().fakeImage,
        categoryId: 1
      },
      {
        id: 40,
        name: 'Lenovo Tap 2',
        price: 500,
        quantity: 10,
        imgUrl: new Constants().fakeImage,
        categoryId: 2
      },
      {
        id: 50,
        name: 'Samsung Tap ',
        price: 999,
        quantity: 1,
        imgUrl: new Constants().fakeImage,
        categoryId: 2
      },
    ];
  }

  ngOnInit() {
    console.log(this.products);

  }

  bay(price: number, itemCount: string = '1') {
    this.orderTotalPrice = parseInt(itemCount) * price;
  }

  clearCat(event: any) {
    this.selectedCategoryId = 0;
    event.target.value = this.selectedCategoryId;
  }

  getValueSelected(event: any) {
    console.log(`${event.target.value}event Type ${typeof event.target.value}`)
    this.selectedCategoryId = event.target.value;
  }
  trackByFn(index: number, product: IProducts) {
    return product.id;
  }

}
