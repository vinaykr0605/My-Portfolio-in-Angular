import { Component } from '@angular/core';
import { education } from '@data/content';

@Component({
  selector: 'app-education',
  standalone: false,
  template: `
    <div class="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow duration-300">
      <div *ngFor="let e of education; let i = index" class="flex flex-wrap items-center justify-between">
        <div>
          <h3 class="text-lg font-semibold text-primary-800 dark:text-primary-200">{{ e.degree }}</h3>
          <p class="text-secondary-600">{{ e.school }}</p>
        </div>
        <div class="text-sm text-gray-500">
          {{ e.start }} — {{ e.end }}
          <ng-container *ngIf="e.cgpa"> • CGPA {{ e.cgpa }}</ng-container>
          <ng-container *ngIf="e.Percentage"> • Percentage {{ e.Percentage }}</ng-container>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class Education {
  education = education; // Make education accessible in the template
}
