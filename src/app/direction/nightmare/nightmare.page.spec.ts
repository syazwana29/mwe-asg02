import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NightmarePage } from './nightmare.page';

describe('NightmarePage', () => {
  let component: NightmarePage;
  let fixture: ComponentFixture<NightmarePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NightmarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
