import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Menú',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Blog', url: 'blog' },
        // { titulo: 'Categorias', url: 'categorias' }
        { titulo: 'Ajustes', url: 'ajustes' },
      ]
    },
  ];

  menu2: any[] = [
    {
      titulo: 'Categorias',
      submenu: [
      ]
    },
  ];

  constructor() { }
}
