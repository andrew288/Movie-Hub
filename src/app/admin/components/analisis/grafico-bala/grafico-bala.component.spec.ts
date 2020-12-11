import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoBalaComponent } from './grafico-bala.component';

describe('GraficoBalaComponent', () => {
  let component: GraficoBalaComponent;
  let fixture: ComponentFixture<GraficoBalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoBalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoBalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
