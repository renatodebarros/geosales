import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistematicaComponent } from './sistematica.component';

describe('SistematicaComponent', () => {
  let component: SistematicaComponent;
  let fixture: ComponentFixture<SistematicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistematicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistematicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
