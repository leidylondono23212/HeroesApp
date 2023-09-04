import { Component } from '@angular/core';

@Component({
  selector: 'app-leyout-page',
  templateUrl: './leyout-page.component.html',
  styles: [
  ]
})
export class LeyoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-hero' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ]

}
