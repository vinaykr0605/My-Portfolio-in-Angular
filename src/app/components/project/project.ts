import { Component } from '@angular/core';
import { projects } from '@data/content';

@Component({
  selector: 'app-project',
  standalone: false,
  template: `
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article *ngFor="let p of projects; let i = index" class="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow duration-300">
        <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-200">{{ p.name }}</h3>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">{{ p.description }}</p>
        <div class="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
          <span *ngFor="let s of p.stack; let k = index" class="px-2 py-1 rounded bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 border border-secondary-200 dark:border-secondary-800">{{ s }}</span>
        </div>
        <ul class="mt-3 text-sm list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
          <li *ngFor="let h of p.highlights; let k = index">{{ h }}</li>
        </ul>
        <a *ngIf="p.link" class="mt-4 inline-block text-secondary-600 hover:underline" [href]="p.link">
          View project
        </a>
      </article>
    </div>
  `,
  styles: ``
})
export class Project {
  projects = projects; // Make projects accessible in the template
}
