import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllannonceComponent } from './all-annonce.component';

describe('AllAnnonceComponent', () => {
  let component: AllannonceComponent;
  let fixture: ComponentFixture<AllannonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllannonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllannonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
