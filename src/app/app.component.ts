import { Component, OnInit } from '@angular/core';
import postresList from 'src/assets/json/postres.json';

@Component({
  selector: 'app-root',
  template: `
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
      <tbody *ngFor="let p of postres;">
        <tr>
          <td>{{p.id}}</td>
          <td>{{p.nombre}}</td>
          <td>{{p.stock}}</td>
          <td>{{p.precio}}€</td>
          <td>{{p.url}}</td>
          <td><img src="../assets/img/{{p.img}}" alt="{{p.nombre}}"></td>
          <td>{{p.fecha}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  postres: any = postresList

  ngOnInit(): void {
    console.log(this.postres)
  }
}
