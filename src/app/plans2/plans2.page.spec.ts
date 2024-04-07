import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Plans2Page } from './plans2.page';

describe('Plans2Page', () => {
  let component: Plans2Page;
  let fixture: ComponentFixture<Plans2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Plans2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
