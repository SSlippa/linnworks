import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  openTab$ = new Subject();

  constructor() { }
}
