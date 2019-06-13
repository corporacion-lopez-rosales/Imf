import { ChangeDetectorRef, Component, OnDestroy ,OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  x;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,public AuthService:AuthService) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngOnInit() {
  }

  salir(){
    window.location.reload();
  }

}
