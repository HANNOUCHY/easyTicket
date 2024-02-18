import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [MatTableModule,MatIconModule,MatButtonModule,MatDividerModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'img'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1324003, name: 'Dar Al makina / 24-04-2024', weight: "230 Dhs", img: '../../assets/assets/art-cmd.jpg'},
  {position: 696859, name: 'Dar Al makina / 26-04-2024', weight: "300 Dhs", img: '../../assets/assets/art-cmd2.jpg'},
  {position: 39495995, name: 'Dar Al makina / 25-04-2024', weight: "402 Dhs", img: '../../assets/assets/art-cmd3.jpg'}
];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  img: string;
}