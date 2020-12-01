import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscarusugeoPage } from './buscarusugeo.page';

describe('BuscarusugeoPage', () => {
  let component: BuscarusugeoPage;
  let fixture: ComponentFixture<BuscarusugeoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarusugeoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarusugeoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
