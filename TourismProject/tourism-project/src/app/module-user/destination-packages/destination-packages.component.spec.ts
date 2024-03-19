import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationPackagesComponent } from './destination-packages.component';

describe('DestinationPackagesComponent', () => {
  let component: DestinationPackagesComponent;
  let fixture: ComponentFixture<DestinationPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
