import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeorContenidoComponent } from './peor-contenido.component';

describe('PeorContenidoComponent', () => {
  let component: PeorContenidoComponent;
  let fixture: ComponentFixture<PeorContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeorContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeorContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
