import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckContainerComponent } from './deck-container.component';

describe('DeckContainerComponent', () => {
  let component: DeckContainerComponent;
  let fixture: ComponentFixture<DeckContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
