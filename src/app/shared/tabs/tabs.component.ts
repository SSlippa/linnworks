import {Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {TabComponent} from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @ViewChild('container', {read: ViewContainerRef, static: true}) dynamicTabPlaceholder;

  dynamicTabs: TabComponent[] = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) {
  }

  ngOnInit(): void {
  }

  openTab(title: string, template): void {
    const tabIndex = this.dynamicTabs.findIndex(element => element.title === title);
    if (tabIndex >= 0) {
      this.setActive(this.dynamicTabs[tabIndex]);
      return;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TabComponent);

    // create a component instance
    const componentRef = componentFactory.create(this.injector);

    // set the according properties on our component instance
    const instance: TabComponent = componentRef.instance;
    instance.title = title;
    instance.template = template;
    instance.viewRef = componentRef.hostView;

    this.dynamicTabs.push(componentRef.instance);

    this.setActive(componentRef.instance);
  }

  setActive(newTab: TabComponent): void {
    this.dynamicTabs.forEach(tab => (tab.active = tab.title === newTab.title));
    if (!(this.dynamicTabPlaceholder.indexOf(newTab.viewRef) >= 0)) {
      // if the view doesn't exists then remove the current one and display the new one
      this.dynamicTabPlaceholder.detach(this.dynamicTabPlaceholder[0]);
      this.dynamicTabPlaceholder.insert(newTab.viewRef);
    }
  }

  closeTab(tab: TabComponent): void {
    for (let i = 0; i < this.dynamicTabs.length; i++) {
      if (this.dynamicTabs[i] === tab) {
        this.dynamicTabs = this.dynamicTabs.filter((tabs, index) => i !== index);
        this.removeFromView(tab);
        // set tab index to 1st one
        this.selectTab(this.dynamicTabs[0]);
        break;
      }
    }
  }

  private removeFromView(tab): void {
    if (this.dynamicTabPlaceholder.indexOf(tab.viewRef) >= 0) {
      this.dynamicTabPlaceholder.remove(0);
    } else {
      tab.viewRef.destroy();
    }
  }

  selectTab(tab: TabComponent): void {
    if (tab && tab.template) {
      this.openTab(tab.title, tab.template);
    }
  }


}
