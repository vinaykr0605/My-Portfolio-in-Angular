import { Component } from '@angular/core';
import { profile } from '@data/content';

@Component({
  selector: 'app-hero',
  standalone: false,
  template: `
    <section class="section py-8 sm:py-12">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 class="text-3xl sm:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
            {{ profile.name }}
          </h1>
          <p class="mt-2 text-lg text-primary-600 dark:text-primary-400">{{ profile.title }}</p>
          <p class="mt-6 text-gray-600 dark:text-gray-300">
            {{ profile.summary }}
          </p>
          <div class="mt-8 flex gap-3">
            <a [href]="profile.github" class="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">GitHub</a>
            <a [href]="profile.linkedin" class="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-900">LinkedIn</a>
            <a href="#contact" class="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-50 dark:hover:bg-gray-900">Contact</a>
          </div>
          <div class="mt-6 text-sm text-gray-500">
            Bengaluru (Tumakuru, KA) • {{ profile.email }} • {{ profile.phone }}
          </div>
        </div>
        <div class="rounded-2xl bg-gradient-to-br from-secondary-100/60 to-transparent p-8 border border-gray-200 dark:border-gray-800">
          <ul class="space-y-3 text-sm">
            <li>• Full-stack: .NET Core, Angular, React</li>
            <li>• 700+ Cypress E2E tests authored</li>
            <li>• Performance fixes on embedded hardware</li>
            <li>• Distributed Agile, 6 product lines</li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class Hero {
  profile = profile; // Make profile accessible in the template
}
