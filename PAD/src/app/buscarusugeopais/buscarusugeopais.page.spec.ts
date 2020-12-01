import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscarusugeopaisPage } from './buscarusugeopais.page';

describe('BuscarusugeopaisPage', () => {
  let component: BuscarusugeopaisPage;
  let fixture: ComponentFixture<BuscarusugeopaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarusugeopaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarusugeopaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
