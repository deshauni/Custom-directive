import { Directive, ElementRef, Renderer2 , HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppChBgColor]'
})
export class AppChBgColorDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = 'yellow';
  }
 @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'blue';
  }  constructor(private elementref: ElementRef, private renderer2: Renderer2) { 
    // this.changeBgColor();  custome directive
   }
//code for custom directive
// changeBgColor(){
//   // this.renderer2.setStyle(this.elementref.nativeElement, 'color', 'red');
//   this.elementref.nativeElement.style.color = 'red';


//}


}



