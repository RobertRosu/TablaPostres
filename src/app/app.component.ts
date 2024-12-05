import { Component, OnInit } from '@angular/core';
import postresList from 'src/assets/json/postres.json';
import { FormCrearComponent } from './components/form-crear/form-crear.component';

@Component({
  selector: 'app-root',
  template: `
    <ng-container *ngIf="!isAgregarNuevoPostreClicked;else formCrear">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>URL Amigable</th>
          <th>Imagen</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody *ngFor="let p of postres; trackBy:trackById">
        <tr>
          <td>{{p.id}}</td>
          <td>{{p.nombre}}</td>
          <td>{{p.stock}}</td>
          <td>{{p.precio}}€</td>
          <td>{{p.url}}</td>
          <td><img src={{p.img}} alt="{{p.nombre}}"></td>
          <td>{{p.fecha}}</td>
        </tr>
      </tbody>
    </table>
    <button (click)="agregarNuevoPostreIsClicked()">Agregar nuevo postre</button>
    </ng-container>

    <ng-template #formCrear>
      <app-form-crear />
    </ng-template>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  postres: any = postresList
  isAgregarNuevoPostreClicked: boolean = false

  ngOnInit(): void {
    console.log(this.postres)
  }

  agregarNuevoPostreIsClicked(){
    this.isAgregarNuevoPostreClicked = true
  }

  trackById(index: number, item: any){
    return item.id
  }
}
