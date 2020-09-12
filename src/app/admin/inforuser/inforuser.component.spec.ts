import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InforuserComponent } from './inforuser.component';

describe('InforuserComponent', () => {
  let component: InforuserComponent;
  let fixture: ComponentFixture<InforuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InforuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InforuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
