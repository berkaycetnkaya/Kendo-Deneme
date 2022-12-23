import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, toODataString } from '@progress/kendo-data-query';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";

@Injectable()
@Injectable({
  providedIn: 'root'
})
export class NorthwindService extends BehaviorSubject<GridDataResult> {

  public loading: boolean;

  private BASE_URL =
    "https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/";

  constructor(private http: HttpClient,@Inject(String) protected tableName:string) {

    super(null);
  }

  public query(state: State): void {
    this.fetch(this.tableName, state).subscribe((x) => super.next(x));
  }

  protected fetch(tableName: string, state: State): Observable<GridDataResult> {
    const queryStr = `${toODataString(state)}&$count=true`;
    this.loading = true;

    return this.http.get(`${this.BASE_URL}${tableName}?${queryStr}`).pipe(
      map(
        (response) =>
          <GridDataResult>{
            data: response.valueOf()

           //total: parseInt(response["@odata.count"], 10),
          }
      ),
      tap(() => (this.loading = false))
    );
  }
}


