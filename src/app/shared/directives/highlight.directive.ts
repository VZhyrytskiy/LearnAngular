import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('class')
  attrClass = 'highlighting';

  private color = 'lightgreen';

  constructor(private el: ElementRef) { console.log('Hi'); }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight(this.color);
    console.log('1');
  }

  @HostListener('mouseleave')
  leave(): void {
    this.highlight(null);
    console.log('2');
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
