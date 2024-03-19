import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPacakgeComponent } from './book-pacakge.component';

describe('BookPacakgeComponent', () => {
  let component: BookPacakgeComponent;
  let fixture: ComponentFixture<BookPacakgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPacakgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPacakgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
