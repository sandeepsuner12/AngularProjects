import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInformationSectionComponent } from './student-information-section.component';

describe('StudentInformationSectionComponent', () => {
  let component: StudentInformationSectionComponent;
  let fixture: ComponentFixture<StudentInformationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInformationSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentInformationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
