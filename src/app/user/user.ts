import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  username = '';
  password = '';

  
  constructor(private router: Router) {}


  login() {
    if (this.username === 'admin' && this.password === '1234') {
      // store flag to simulate login
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/book']);
    } else {
      alert('Invalid credentials');
    }
  }

  logout(){
    localStorage.setItem('isLoggedIn', 'false');
  }
}
