import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMoviesComponent } from './crear-movies.component';

describe('CrearMoviesComponent', () => {
  let component: CrearMoviesComponent;
  let fixture: ComponentFixture<CrearMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
