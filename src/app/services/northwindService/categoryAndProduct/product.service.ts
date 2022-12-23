import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { State } from '@progress/kendo-data-query';
import { NorthwindService } from '../northwind.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends NorthwindService {

  constructor(http: HttpClient) {
    super(http, "Products");
  }


  public queryForCategory(categoryId: number, state?: State): void {
    this.query(
      Object.assign({}, state, {
        filter: {
          filters: [
            {
              field: "CategoryID",
              operator: "eq",
              value: categoryId,
            },
          ],
          logic: "and",
        },
      })
    );
  }

  public queryForProductName(ProductName: string, state?: State): void {
    this.query(
      Object.assign({}, state, {
        filter: {
          filters: [
            {
              field: "ProductName",
              operator: "contains",
              value: ProductName,
            },
          ],
          logic: "and",
        },
      })
    );
  }
}
