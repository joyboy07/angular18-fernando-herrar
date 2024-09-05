import { Component } from '@angular/core';
import { AppComponent } from "../../../app.component";
import { HeavyLoadersSlowComponent } from "../../../shared/heavy-loaders/heavy-loaders-slow.component";
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  standalone: true,
  imports: [AppComponent, HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
  styles: ``
})
export default class DeferViewsComponent {

}
