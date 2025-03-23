import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolNewsComponent } from './symbol-news.component';

describe('SymbolNewsComponent', () => {
  let component: SymbolNewsComponent;
  let fixture: ComponentFixture<SymbolNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SymbolNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymbolNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
