import { Component } from '@angular/core';
import { experiences } from '@data/content';

@Component({
  selector: 'app-experience',
  standalone: false,
  template: `
    <div class="space-y-10">
      <div *ngFor="let exp of experiences; let i = index" class="rounded-xl border border-gray-200 dark:border-gray-800 p-6">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 class="text-xl font-semibold">{{ exp.role }}</h3>
            <p class="text-brand-600">{{ exp.company }} • {{ exp.location }}</p>
          </div>
          <div class="text-sm text-gray-500">{{ exp.start }} — {{ exp.end }}</div>
        </div>
        <ul class="mt-4 space-y-2 list-disc pl-5">
          <li *ngFor="let b of exp.bullets; let j = index">{{ b }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: ``
})
export class Experience {
  experiences = experiences; // Make experiences accessible in the template
}
