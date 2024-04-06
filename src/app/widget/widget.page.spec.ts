import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetPage } from './widget.page';

describe('WidgetPage', () => {
  let component: WidgetPage;
  let fixture: ComponentFixture<WidgetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
