import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car';
import { ListResponseModel } from '../model/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
apiUrl= "https://localhost:7214/api/"
  constructor(private http:HttpClient) { }

  //https://localhost:7214/api/Cars/getallDetail
  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getallDetail"
 return this.http.get<ListResponseModel<Car>>(newPath)
  }
}
