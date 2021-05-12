import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../features/dashboard/dashboard.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  links = [
    { label: 'Inventory', icon: 'pi pi-sitemap' },
    { label: 'Orders', icon: 'pi pi-shopping-cart' },
    { label: 'Shipping', icon: 'pi pi-send' },
  ];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  onClick(name: string): void {
    this.dashboardService.openTab$.next(name);
  }

}
