import { Component } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { HeavyLoadersSlowComponent } from "../../../shared/heavy-loaders/heavy-loaders-slow.component";

@Component({
  standalone: true,
  imports: [AppComponent, HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
  styles: ``
})
export default class DeferViewsComponent {

}
