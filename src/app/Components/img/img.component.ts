import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass']
})
export class ImgComponent implements OnInit {
  /*
  An alternative to avoid the use ngOnchanges tou can use
  the setters to perform some action when a specific input changes
  */
  image?: string

  @Input('image')
  set setImage(newImage: string) {
    this.image = newImage
  }
  constructor() {}

  ngOnInit(): void {}
}
