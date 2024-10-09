import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../shared/service/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  currentOption!: string;

  authenticated: boolean = false;
  showAccountOptions :boolean = false;

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.isAuthenticated$.subscribe((res) => {
      this.authenticated = res;
    });
  }



  singOut(){
    this.loginService.doSignOut();
  }
}
