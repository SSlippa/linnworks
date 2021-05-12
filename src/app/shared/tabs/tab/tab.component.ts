import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() title: string;
  @Input() viewRef: any;
  @Input() active = false;
  @Input() template;

  constructor() {
  }

  ngOnInit(): void {
  }


}
