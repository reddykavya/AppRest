import { Component, OnInit,ElementRef,Renderer2,HostListener,HostBinding } from '@angular/core';

@Component({
  selector: 'app-host-directives',
  templateUrl: './host-directives.component.html',
  styleUrls: ['./host-directives.component.css']
})
export class HostDirectivesComponent implements OnInit {

  constructor(private el:ElementRef,private renderer:Renderer2) { }

  @HostBinding('style.color')colorChange: any;

  @HostListener('click')onclick(){
    this.colorChange="red"
    // alert('clicked');
  }
  @HostListener('mouseover')onmouseover(){
    // this.changeBgColor('green')
    this.colorChange = "yellow";
    console.log('mouseover')
  }
  // changeBgColor(color:string){
  //  this.renderer.setStyle(this.el.nativeElement,'color',color)
  // }
  @HostListener('mouseleave')onmouseleave(){
    // this.changeBgColor('red')
    this.colorChange = "green";
   
  }

  ngOnInit(): void {
  }

}
