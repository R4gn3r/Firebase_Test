import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private dialog: MatDialog, private router: Router) {
    this.user$ = afAuth.authState;
  }

  async login(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.dialog.open(DialogComponent, {
        data: { message: 'Login Successful' }
      });
      this.router.navigate(['/main']);
    } catch (error: unknown) {
      let errorMessage = 'An error occurred';
      if (typeof error === 'object' && error !== null && 'message' in error) {
        errorMessage = 'Login Failed: ' + error.message;
      }
      this.dialog.open(DialogComponent, {
        data: { message: errorMessage }
      });
    }
  }

  async logout(): Promise<void> {
    await this.afAuth.signOut();
    this.dialog.closeAll();
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    return this.user$;
  }
}
