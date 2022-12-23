import { Component, OnInit } from '@angular/core';
import { Car } from './model/car';
import { Product } from './model/product';
import { CarServiceService } from './services/car-service.service';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { CreateFormGroupArgs } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kendo-angular-app';
 car:Car[]=[]
  b:Car[]=[]
  c:string[

  ]=[]
  dropdown="";
  currentBrand:string;

 formGroup: FormGroup;






  constructor(private carService:CarServiceService,private formBuilder: FormBuilder) {


 }



  ngOnInit(): void {
    this.getCars();
    this.createFormGroup = this.createFormGroup.bind(this);


  }
  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.car=response.data
      this.b=response.data

      for (const car of response.data) {
       if(!this.c.includes(car.brandName)){
        this.c.push(car.brandName)
       }


       // console.log(car.brandName+"bu car.brandname")
      }
      console.log(this.c+"bu c")
return this.b;



      console.log(response.message)
      console.log(response.success)
      console.log(this.car)

    })
    //console.log(this.b+"bu 2. return")
    return this.b;




  }
  getCurrentBrand(brand:string){
this.currentBrand=brand
  }


  public createFormGroup(args: CreateFormGroupArgs): FormGroup {
    const item = args.isNew ? this.car : args.dataItem;

    this.formGroup = this.formBuilder.group({
      ProductID: item.ProductID,
      ProductName: [item.ProductName, Validators.required],
      UnitPrice: item.UnitPrice,
      UnitsInStock: [
        item.UnitsInStock,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]{1,3}"),
        ]),
      ],
      Discontinued: item.Discontinued,
    });

    return this.formGroup;
  }






  public gridData: Product[] = [
    {
      ProductID: 1,
      ProductName: "Chai",
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 2,
      ProductName: "Chang",
      UnitPrice: 19,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 3,
      ProductName: "Aniseed Syrup",
      UnitPrice: 10,
      Category: {
        CategoryID: 2,
        CategoryName: "Condiments",
      },
    },
  ];




}
