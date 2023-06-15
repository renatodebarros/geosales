import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerMapComponent } from './spinner-map.component';

describe('SpinnerMapComponent', () => {
  let component: SpinnerMapComponent;
  let fixture: ComponentFixture<SpinnerMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
