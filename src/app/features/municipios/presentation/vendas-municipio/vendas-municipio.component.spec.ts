import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasMunicipioComponent } from './vendas-municipio.component';

describe('VendasMunicipioComponent', () => {
  let component: VendasMunicipioComponent;
  let fixture: ComponentFixture<VendasMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendasMunicipioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendasMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
