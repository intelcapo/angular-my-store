import { Component, OnInit } from '@angular/core'
import { StoreService } from 'src/app/Services/store.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  showMobileMenu: boolean
  counter: number
  constructor(private storeService: StoreService) {
    //do nothing
    this.showMobileMenu = false
    this.counter = 0
  }

  ngOnInit(): void {
    //do nothing
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length
    })
  }

  toggleMenuMobile() {
    this.showMobileMenu = !this.showMobileMenu
  }
}
