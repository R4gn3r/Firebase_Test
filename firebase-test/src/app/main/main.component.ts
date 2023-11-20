import { Component } from '@angular/core';
import { AuthService } from '../_Service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  username: string | null = null;

  constructor(private authService: AuthService) {
    authService.getCurrentUser().subscribe(user => {
      this.username = user ? user.email : null;
    });
  }

  onLogout(): void {
    this.authService.logout();
  }
}
