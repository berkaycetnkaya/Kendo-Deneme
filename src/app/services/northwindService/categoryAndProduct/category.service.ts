import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { NorthwindService } from '../northwind.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends NorthwindService {


  constructor(http: HttpClient) {
    super(http, "Categories");
  }

  queryAll(st?: State): Observable<GridDataResult> {
    const state = Object.assign({}, st);
    delete state.skip;
    delete state.take;

    return this.fetch(this.tableName, state);
  }

}
