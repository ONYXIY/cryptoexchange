import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[libBorder]',
  standalone: true,
})
export class BorderDirective {
//   @Input() color = 'yellow'
//   @HostBinding('style.border') border = '';
 
//   @HostListener('mouseenter')
//   enter(){
//    this.border = `1px solid ${this.color}`
//  }
//   @HostListener('mouseleave')
//    leave(){
//      this.border = '';
//   }
}
