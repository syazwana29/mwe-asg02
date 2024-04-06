import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StopPage } from './stop.page';

describe('StopPage', () => {
  let component: StopPage;
  let fixture: ComponentFixture<StopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
