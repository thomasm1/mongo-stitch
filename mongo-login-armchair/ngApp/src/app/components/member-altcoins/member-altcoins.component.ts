import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../services/coin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-member-altcoins',
  templateUrl: './member-altcoins.component.html',
  styleUrls: ['./member-altcoins.component.css']
})
export class MemberAltcoinsComponent implements OnInit {
  memberAltcoins = []
  constructor(private _coinService: CoinService, private _router: Router) { }

  ngOnInit() {
    this._coinService.getMemberAltcoins()
      .subscribe(
        res => this.memberAltcoins = res,
        err => {
          if( err instanceof HttpErrorResponse ) {
            if (err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )
  }

}
