import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        // { titulo: 'Main', url: '/' },
        { titulo: 'Blog', url: 'blog' },
        { titulo: 'Categorias', url: 'categorias' },
        { titulo: 'Ajustes', url: 'ajustes' },
        // { titulo: 'ProgressBar', url: 'progress' },
      ]
      
    },
    
  ];
  menu2: any[] = [
    {
      titulo: 'Categorias',
      // icono: 'mdi mdi-gauge',
      submenu: [
        // { titulo: 'Main', url: '/' },
        // { titulo: 'Costa', url: 'blog' },
        // { titulo: 'Sierra', url: 'categorias' },
        // { titulo: 'Oriente', url: 'ajustes' },
        // { titulo: 'Galapagos', url: 'ajustes' },
        // { titulo: 'ProgressBar', url: 'progress' },
      ]
      
    },
    
  ];

  constructor() { }
}
