import { Component } from '@angular/core';
import { profile } from '@data/content';

@Component({
  selector: 'app-footer',
  standalone: false,
  template: `
    <footer class="border-t border-primary-200 dark:border-primary-900">
      <div class="section py-8 text-sm text-gray-500 flex items-center justify-between">
        <p>© {{ currentYear }} {{ profile.name }}. All rights reserved.</p>
        <p>Built with Angular + Tailwind CSS.</p>
      </div>
    </footer>
  `,
  styles: ``
})
export class Footer {
  profile = profile; // Make profile accessible in the template
  currentYear: number = new Date().getFullYear();
}
