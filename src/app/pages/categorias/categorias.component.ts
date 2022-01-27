import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {}

  irBebidas(){
    this.router.navigate(['/bebidas'])
  }
  irSnaks(){
    this.router.navigate(['/snaks'])
  }
  irVerduras(){
    this.router.navigate(['/verduras'])
  }
  irLimpieza(){
    this.router.navigate(['/limpieza'])
  }

}
