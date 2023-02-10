import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color = 'red';
  private _mensajeErr = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

   @Input() set color( valor: string ) {
    this._color = valor;
    this.setColor();
   };

   @Input() set mensajeErr ( valor: string ) {
    this._mensajeErr = valor;
    this.setMensaje();
   };

   @Input() set noValido ( valor: boolean ) {
    if ( valor ) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
   };

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  ngOnChanges (changes: SimpleChanges): void {
    // if ( changes['mensajeErr'] ) {
    //   const mensaje = changes['mensajeErr'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    // if ( changes['color'] ) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
    // console.log(changes);
  }

  setEstilo (): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor (): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje (): void {
    this.htmlElement.nativeElement.innerText = this._mensajeErr;
  }

}
