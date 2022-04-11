import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  host: {
    '(click)':'applyLogic()'
  }
})
export class CustomDirective {
  private el!: ElementRef;
  
  @Input() number = 0;
  @Input() divisibileBy =1;
  constructor(el:ElementRef) { 
    this.el=el;
  }

  applyLogic(){
    if(this.number % this.divisibileBy === 0){
      if(this.el){
        this.el.nativeElement.style.color ='green';
      }

    }
    else{
      if(this.el){
        this.el.nativeElement.style.color ='red';
      }
    }
  }
  



}
