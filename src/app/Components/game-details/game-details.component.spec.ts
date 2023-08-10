import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameDetailsComponent } from './game-details.component';
import { HttpService } from '../../services/http.service';

describe('GameDetailsComponent', () => {
  let component: GameDetailsComponent;
  let fixture: ComponentFixture<GameDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ GameDetailsComponent ],
      providers: [HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have gameDetails defined after ngOnInit', () => {
    component.ngOnInit();
    expect(component.gameDetails).toBeDefined();
  });
  
  it('should call httpService.getGameDetails on ngOnInit', () => {
    spyOn(component.httpService, 'getGameDetails');
    component.ngOnInit();
    expect(component.httpService.getGameDetails).toHaveBeenCalled();
  });
});