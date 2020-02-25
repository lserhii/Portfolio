import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventStreamWidgetComponent } from './event-stream-widget.component';

describe('EventStreamWidgetComponent', () => {
  let component: EventStreamWidgetComponent;
  let fixture: ComponentFixture<EventStreamWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventStreamWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventStreamWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
