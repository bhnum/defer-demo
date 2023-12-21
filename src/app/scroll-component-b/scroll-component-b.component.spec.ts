import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollComponentBComponent } from './scroll-component-b.component';

describe('ScrollComponentBComponent', () => {
  let component: ScrollComponentBComponent;
  let fixture: ComponentFixture<ScrollComponentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollComponentBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollComponentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
