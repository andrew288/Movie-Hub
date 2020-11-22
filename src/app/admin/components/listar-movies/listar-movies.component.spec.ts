import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMoviesComponent } from './listar-movies.component';

describe('ListarMoviesComponent', () => {
  let component: ListarMoviesComponent;
  let fixture: ComponentFixture<ListarMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
