import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSpaceTop]'
})
export class SpaceTopDirective {

  @HostBinding('style.margin-top')
  padding = '20px';

  constructor() { }

}
