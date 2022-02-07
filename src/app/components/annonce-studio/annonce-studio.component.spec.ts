import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceStudioComponent } from './annonce-studio.component';

describe('AnnonceStudioComponent', () => {
  let component: AnnonceStudioComponent;
  let fixture: ComponentFixture<AnnonceStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceStudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
