import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceGarageComponent } from './annonce-garage.component';

describe('AnnonceGarageComponent', () => {
  let component: AnnonceGarageComponent;
  let fixture: ComponentFixture<AnnonceGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceGarageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
