import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class Repeat {

  constructor(private templeteRef : TemplateRef<any>, private viewcontainer : ViewContainerRef) { }

  @Input() set appRepeat(times: number){
    this.viewcontainer.clear();

    for (let i = 0; i < times; i++) {
      this.viewcontainer.createEmbeddedView(this.templeteRef);
    }
  }

}
