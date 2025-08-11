import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: false,
  template: `
    <section [attr.id]="id" class="section py-12 sm:py-16">
      <h2 class="text-2xl sm:text-3xl font-semibold text-primary-800 dark:text-primary-200">{{ title }}</h2>
      <div class="mt-8">
        <ng-content></ng-content>
      </div>
    </section>
  `,
  styles: ``
})
export class Section {
  @Input() id: string = '';
  @Input() title: string = '';
}
