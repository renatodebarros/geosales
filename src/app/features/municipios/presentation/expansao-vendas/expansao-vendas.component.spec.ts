import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansaoVendasComponent } from './expansao-vendas.component';

describe('ExpansaoVendasComponent', () => {
  let component: ExpansaoVendasComponent;
  let fixture: ComponentFixture<ExpansaoVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansaoVendasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansaoVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
