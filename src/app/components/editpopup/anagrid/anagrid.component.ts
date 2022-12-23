import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GridDataResult } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/northwindService/categoryAndProduct/category.service';

@Component({
  selector: 'app-anagrid',
  templateUrl: './anagrid.component.html',
  styleUrls: ['./anagrid.component.css'],

})
export class AnagridComponent implements OnInit, AfterViewInit {
  public view: Observable<GridDataResult>;
  public isLoading: boolean;

  // For Angular 8
  // @ViewChild(GridComponent, { static: false })
  // public grid: GridComponent;

  @ViewChild(GridComponent) grid: GridComponent;

  constructor(private service: CategoryService) {}

  public ngOnInit(): void {
    // Bind directly to the service as it is a Subject
    this.view = this.service;
    this.isLoading = this.service.loading;

    // Fetch the data with the initial state
    this.loadData();
  }

  public ngAfterViewInit(): void {
    // Expand the first row initially
    this.grid.expandRow(0);
  }

  private loadData(): void {
    this.service.query({
      skip: 0,
      take: 8,
    });
  }

}
