import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestappcomponentPage } from './testappcomponent.page';

describe('TestappcomponentPage', () => {
  let component: TestappcomponentPage;
  let fixture: ComponentFixture<TestappcomponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestappcomponentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestappcomponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
