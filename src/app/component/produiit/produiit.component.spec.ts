import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduiitComponent } from './produiit.component';

describe('ProduiitComponent', () => {
  let component: ProduiitComponent;
  let fixture: ComponentFixture<ProduiitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduiitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduiitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
