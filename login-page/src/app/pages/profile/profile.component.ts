import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  data: any;
  address: any = {};
  editMode: boolean = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.auth.getProfile().subscribe(
      (res) => {
        console.log(res);
        if (res.success) {
          this.data = res.data;
          if (this.data.address) {
            this.address = this.data.address;
          }
        } else {
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/dashboard']);
  }

  addAddress() {
    console.log('addAddress() called');

    this.auth.addAddress(this.address).subscribe(
      (res) => {
        if (res.success) {
          this.getProfile();
        } else {
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editAddress() {
    this.auth.editAddress(this.address).subscribe(
      (res) => {
        if (res.success) {
          this.getProfile();
          this.editMode = false;
        } else {
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
