import { Directive, ElementRef, Renderer2 ,OnInit } from '@angular/core';

@Directive({
  selector: '[appAppChBgColor]'
})
export class AppChBgColorDirective {

  constructor(private elementref: ElementRef, private renderer2: Renderer2) { 
    this.changeBgColor();
   }

changeBgColor(){
  // this.renderer2.setStyle(this.elementref.nativeElement, 'color', 'red');
  this.elementref.nativeElement.style.color = 'red';


}


}



