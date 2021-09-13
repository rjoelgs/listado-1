import { Component } from "@angular/core";


@Component({
  selector: 'app-heroe',
  templateUrl: 'Heroe.component.html'
})
export class HeroeComponent{

  nombre: string = 'Ironman';
  edad  : number = 45



  obtenerNombre(): string {
    return `${ this.nombre } - ${ this.edad }`;

  }

  cambiarNombre():void {
    this.nombre = 'spiderman';

  }

  cambiarEdad ():void {
    this.edad = 20
  }

}
