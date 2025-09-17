import { Directive ,ElementRef ,Renderer2 , HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShowMessage]'
})
export class ShowMessage {
  @Input('appShowMessage') message!: string;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    this.el.nativeElement.innerHTML = this.message;
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

}
