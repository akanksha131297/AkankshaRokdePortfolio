import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Girlanimation } from './girlanimation';

describe('Girlanimation', () => {
  let component: Girlanimation;
  let fixture: ComponentFixture<Girlanimation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Girlanimation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Girlanimation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
