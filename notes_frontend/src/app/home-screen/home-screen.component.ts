import { Component, Inject, PLATFORM_ID, ViewEncapsulation, NgZone } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-home-screen',
  standalone: true,
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeScreenComponent {
  private readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private zone: NgZone
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  // Safe accessors for globals without tripping no-undef
  private getDoc(): any | null {
    // globalThis is standardized; guard for SSR
    return typeof globalThis !== 'undefined' && (globalThis as any).document
      ? (globalThis as any).document
      : null;
  }

  private getWin(): any | null {
    return typeof globalThis !== 'undefined' && (globalThis as any).window
      ? (globalThis as any).window
      : null;
  }

  private raf(cb: () => void): void {
    const w = this.getWin();
    const fn = (w && w.requestAnimationFrame) ? w.requestAnimationFrame.bind(w) : (typeof (globalThis as any).requestAnimationFrame !== 'undefined' ? (globalThis as any).requestAnimationFrame : null);
    if (typeof fn === 'function') {
      fn(cb);
    } else if (typeof (globalThis as any).setTimeout === 'function') {
      (globalThis as any).setTimeout(cb, 16);
    }
  }

  // PUBLIC_INTERFACE
  onSearchClick(): void {
    console.log('[HomeScreen] Search clicked');
    if (!this.isBrowser) return;
    const doc = this.getDoc();
    if (doc) {
      const first = doc.querySelector('.card-title') as any;
      if (first && typeof first.scrollIntoView === 'function') {
        first.scrollIntoView({ behavior: 'smooth', block: 'center' } as any);
      }
    }
  }

  // PUBLIC_INTERFACE
  onInfoClick(): void {
    console.log('[HomeScreen] Info clicked');
    if (!this.isBrowser) return;
    const w = this.getWin();
    this.zone.runOutsideAngular(() => {
      if (w && typeof w.alert === 'function') {
        w.alert('Notes App - Home Screen\nOcean Professional theme applied.');
      }
    });
  }

  // PUBLIC_INTERFACE
  onFabClick(event: any): void {
    console.log('[HomeScreen] FAB clicked');
    if (!this.isBrowser) return;

    const fab = event && event.currentTarget as any;
    if (!fab) return;

    const doc = this.getDoc();
    if (!doc) return;

    const r = doc.createElement('span');
    r.style.position = 'absolute';
    r.style.width = '70px';
    r.style.height = '70px';
    r.style.borderRadius = '50%';
    r.style.left = '0';
    r.style.top = '0';
    r.style.background = 'rgba(37,99,235,0.25)';
    r.style.transform = 'scale(0)';
    r.style.transition = 'transform 300ms ease, opacity 500ms ease';
    fab.appendChild(r);

    this.zone.runOutsideAngular(() => {
      this.raf(() => {
        r.style.transform = 'scale(1.4)';
        r.style.opacity = '0';
      });
      const to =
        (typeof (globalThis as any).setTimeout === 'function'
          ? (globalThis as any).setTimeout
          : null);
      if (to) {
        to(() => {
          if (r && r.parentNode) r.parentNode.removeChild(r);
        }, 550);
      }
    });
  }
}
