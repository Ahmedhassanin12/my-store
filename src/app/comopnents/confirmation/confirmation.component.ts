import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  yourName: {}  | undefined
  price:{}| undefined
  constructor(private router: Router) {
    this.yourName = this.router.getCurrentNavigation()?.extras.state?.['yourName'];
    this.price = this.router.getCurrentNavigation()?.extras.state?.['price'];


   }

  ngOnInit(): void {

  }

}
