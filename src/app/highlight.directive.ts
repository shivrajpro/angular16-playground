import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() textColor = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.color = this.textColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.color = '';
  }
}
