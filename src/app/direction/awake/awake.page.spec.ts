import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwakePage } from './awake.page';

describe('AwakePage', () => {
  let component: AwakePage;
  let fixture: ComponentFixture<AwakePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AwakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
