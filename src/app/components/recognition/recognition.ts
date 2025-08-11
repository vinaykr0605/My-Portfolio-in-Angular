import { Component } from '@angular/core';
import { recognitions } from '@data/content';

@Component({
  selector: 'app-recognition',
  standalone: false,
  template: `
    <ul class="space-y-3">
      <li *ngFor="let r of recognitions; let i = index" class="rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:shadow-lg transition-shadow duration-300">
        {{ r }}
      </li>
    </ul>
  `,
  styles: ``
})
export class Recognition {
  recognitions = recognitions; // Make recognitions accessible in the template
}
