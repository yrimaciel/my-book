import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { HeaderComponent } from '../header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GoogleApiService } from '../service/google-api.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
        HeaderComponent,
      ],
      imports: [
        NgxPaginationModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        GoogleApiService,
        ToastrService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
