import { Directive, ElementRef, OnInit,HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChanger]'
})
export class ColorChangerDirective implements OnInit {

  constructor(private elements : ElementRef) { 

  }
  ngOnInit(): void {
    
    this.elements.nativeElement.classList.add('highlightMe');

  }
  @HostListener('click')
  private onClick() {;
    this.elements.nativeElement.style.backgroundColor ='red';
    this.elements.nativeElement.style.color ='white';
  }

}
