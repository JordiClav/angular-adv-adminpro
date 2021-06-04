import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pan', 'Gaseosas', 'Papa rellena'];
  public data1 = [
    [25, 10, 20]
  ];


}
