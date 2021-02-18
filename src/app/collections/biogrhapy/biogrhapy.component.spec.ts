import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiogrhapyComponent } from './biogrhapy.component';

describe('BiogrhapyComponent', () => {
  let component: BiogrhapyComponent;
  let fixture: ComponentFixture<BiogrhapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiogrhapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiogrhapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
