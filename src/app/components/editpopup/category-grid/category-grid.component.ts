import { Component, Input, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/northwindService/categoryAndProduct/product.service';



export interface Category {
  CategoryID: number;
  CategoryName: string;
  Discription: string;
  Picture: string;
}
@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.css'],

})
export class CategoryGridComponent implements OnInit {
  @Input() public category: Category;

  public view: Observable<GridDataResult>;
  public isLoading: boolean;
  public skip = 0;

  constructor(private service: ProductService) {}

  public ngOnInit(): void {
    this.view = this.service;
    this.isLoading = this.service.loading;
    /*load products for the given category*/
    this.service.queryForCategory(this.category.CategoryID, {
      skip: this.skip,
      take: 5,
    });
  }

  public pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.service.queryForCategory(this.category.CategoryID, { skip, take });
  }

}
