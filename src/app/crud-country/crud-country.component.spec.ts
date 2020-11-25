import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCountryComponent } from './crud-country.component';

describe('CrudCountryComponent', () => {
  let component: CrudCountryComponent;
  let fixture: ComponentFixture<CrudCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
