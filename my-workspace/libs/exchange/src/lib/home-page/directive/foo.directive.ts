import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[libFoo]',
  standalone: true,
})
export class FooDirective {
 @Input() color = '#ccc'
 @HostBinding('style.backgroundColor') bgc = '';

 @HostListener('mouseenter')
 enter(){
  this.bgc = this.color
}
 @HostListener('mouseleave')
  leave(){
    this.bgc = '';
 }
}
