import { Component, OnInit } from '@angular/core';

interface tarjeta{
  titulo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyectoX';
  public arregloTarjetas: tarjeta[]=[]

  ngOnInit():void{
    this.arregloTarjetas = [
      {titulo:'video1'},
      {titulo:'video2'}
    ]
  }
}
