import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'goku', 'ironman', 'hulk'];
  borrado: string = '';
  status: boolean = false;
  constructor() {}

  BorrarHeroe() {
    this.borrado = this.heroes.shift() || '';
    if (this.borrado == '') {
      this.status = false;
    } else {
      this.status = true;
    }
    console.log(this.borrado);
  }
}
