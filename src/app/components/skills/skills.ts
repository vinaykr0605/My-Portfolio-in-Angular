import { Component } from '@angular/core';
import { skills } from '@data/content';

@Component({
  selector: 'app-skills',
  standalone: false,
  template: `
    <div class="grid md:grid-cols-2 gap-6">
      <div class="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow duration-300">
        <h3 class="font-semibold text-primary-800 dark:text-primary-200">Backend</h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <span *ngFor="let item of skills.backend" class="px-2 py-1 rounded bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 border border-secondary-200 dark:border-secondary-800 text-sm">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow duration-300">
        <h3 class="font-semibold text-primary-800 dark:text-primary-200">Frontend</h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <span *ngFor="let item of skills.frontend" class="px-2 py-1 rounded bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 border border-secondary-200 dark:border-secondary-800 text-sm">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow duration-300">
        <h3 class="font-semibold text-primary-800 dark:text-primary-200">Database</h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <span *ngFor="let item of skills.database" class="px-2 py-1 rounded bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 border border-secondary-200 dark:border-secondary-800 text-sm">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow duration-300">
        <h3 class="font-semibold text-primary-800 dark:text-primary-200">Version Control</h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <span *ngFor="let item of skills.versionControl" class="px-2 py-1 rounded bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 border border-secondary-200 dark:border-secondary-800 text-sm">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow duration-300">
        <h3 class="font-semibold text-primary-800 dark:text-primary-200">Concepts</h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <span *ngFor="let item of skills.concepts" class="px-2 py-1 rounded bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 border border-secondary-200 dark:border-secondary-800 text-sm">
            {{ item }}
          </span>
        </div>
      </div>
      <div class="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow duration-300">
        <h3 class="font-semibold text-primary-800 dark:text-primary-200">Certifications</h3>
        <div class="mt-3 flex flex-wrap gap-2">
          <span *ngFor="let item of skills.certifications" class="px-2 py-1 rounded bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200 border border-secondary-200 dark:border-secondary-800 text-sm">
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class Skills {
  skills = skills; // Make skills accessible in the template
}
