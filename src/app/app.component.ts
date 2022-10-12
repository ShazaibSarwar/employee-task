import {Component} from '@angular/core';
import {SidebarItems} from "../core/_sidebar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  isCollapsed = false;

  public get sidebarItems() {
    return SidebarItems
  }
}
