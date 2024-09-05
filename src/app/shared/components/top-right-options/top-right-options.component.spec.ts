import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRightOptionsComponent } from './top-right-options.component';

describe('TopRightOptionsComponent', () => {
  let component: TopRightOptionsComponent;
  let fixture: ComponentFixture<TopRightOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRightOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRightOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
