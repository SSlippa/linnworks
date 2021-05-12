import {Component, OnInit, ViewChild} from '@angular/core';
import {DashboardService} from './dashboard.service';
import {TabsComponent} from '../../shared/tabs/tabs.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(TabsComponent, {static: true}) tabsComponent;

  @ViewChild('inventory', {static: true}) inventoryTemplate;
  @ViewChild('orders', {static: true}) ordersTemplate;
  @ViewChild('shipping', {static: true}) shippingTemplate;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {

    this.dashboardService.openTab$.subscribe(tabName => {
      switch (tabName) {
        case 'Inventory':
          this.add('Inventory', this.inventoryTemplate);
          break;
        case 'Orders':
          this.add('Orders', this.ordersTemplate);
          break;
        case 'Shipping':
          this.add('Shipping', this.shippingTemplate);
          break;
      }
    });
  }

  add(title, openTemplate): void {
    this.tabsComponent.openTab(title, openTemplate);
  }

}
