import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogletranslateComponent } from './googletranslate.component';

describe('GoogletranslateComponent', () => {
  let component: GoogletranslateComponent;
  let fixture: ComponentFixture<GoogletranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogletranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogletranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
