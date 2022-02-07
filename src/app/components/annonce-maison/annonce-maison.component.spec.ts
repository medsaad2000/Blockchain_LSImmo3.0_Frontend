import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceMaisonComponent } from './annonce-maison.component';

describe('AnnonceMaisonComponent', () => {
  let component: AnnonceMaisonComponent;
  let fixture: ComponentFixture<AnnonceMaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceMaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
