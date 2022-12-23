import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagridComponent } from './anagrid.component';

describe('AnagridComponent', () => {
  let component: AnagridComponent;
  let fixture: ComponentFixture<AnagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnagridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
