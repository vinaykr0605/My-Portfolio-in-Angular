import { Component } from '@angular/core';
import { profile } from '@data/content';

@Component({
  selector: 'app-contact',
  standalone: false,
  template: `
    <div class="grid md:grid-cols-2 gap-8">
      <div class="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow duration-300">
        <p>Email: <a class="text-primary-600 dark:text-primary-400" [href]="'mailto:' + profile.email">{{ profile.email }}</a></p>
        <p class="mt-2">Phone: {{ profile.phone }}</p>
        <p class="mt-2">LinkedIn: <a class="text-primary-600 dark:text-primary-400" [href]="profile.linkedin">Profile</a></p>
        <p class="mt-2">GitHub: <a class="text-primary-600 dark:text-primary-400" [href]="profile.github">Profile</a></p>
      </div>
    </div>
  `,
  styles: ``
})
export class Contact {
  profile = profile; // Make profile accessible in the template
}
