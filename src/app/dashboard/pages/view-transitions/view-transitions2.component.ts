import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule,TitleComponent],
  template:`
    <app-title title="transition 2"></app-title>
    <section class="flex fustify-end">
      <img 
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />
      <div
        class="bg-blue-800 w-32 h-32 rounded"
      >

      </div>
    </section>
  `
})
export default class ViewTransitionsComponent {

}
