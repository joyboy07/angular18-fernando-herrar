import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule,TitleComponent],
  template:`
    <app-title title="view transition 1"></app-title>
    <section class="flex fustify-start">
      <img 
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />
      <div
        class="bg-blue-500 w-56 h-56"
      >

      </div>
    </section>
  `
})
export default class ViewTransitionsComponent {

}
