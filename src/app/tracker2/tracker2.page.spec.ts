import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tracker2Page } from './tracker2.page';

describe('Tracker2Page', () => {
  let component: Tracker2Page;
  let fixture: ComponentFixture<Tracker2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tracker2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
