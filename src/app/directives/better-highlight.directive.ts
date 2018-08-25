import { ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { Directive, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor:string = 'transparent';
  @Input('appBetterHighlight') highlightColor:string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  //constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#ff00ff');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseOver(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.backgroundColor = this.defaultColor;
  }
}
