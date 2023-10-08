import { Directive } from '@angular/core';

@Directive({
  selector: '[libFoo]',
  standalone: true,
})
export class FooDirective {
  constructor() {
    console.log('213')
  }
}
