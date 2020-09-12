import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsFromFileComponent } from './questions-from-file.component';

describe('QuestionsFromFileComponent', () => {
  let component: QuestionsFromFileComponent;
  let fixture: ComponentFixture<QuestionsFromFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsFromFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsFromFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
