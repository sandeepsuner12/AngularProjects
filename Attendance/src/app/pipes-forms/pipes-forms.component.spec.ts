import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesFormsComponent } from './pipes-forms.component';

describe('PipesFormsComponent', () => {
  let component: PipesFormsComponent;
  let fixture: ComponentFixture<PipesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
