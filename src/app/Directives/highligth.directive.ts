import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[appHighligth]'
})
export class HighligthDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = 'green'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = 'red'
  }

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.color = 'red'
  }
}
