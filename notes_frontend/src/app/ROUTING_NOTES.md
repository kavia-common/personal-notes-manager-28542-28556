# Routing Notes

- Routes are defined in src/app/app.routes.ts using Angular standalone routing.
- '' (empty) and 'home' both route to HomeScreenComponent.
- AppComponent is standalone and imports RouterOutlet; its template is just <router-outlet></router-outlet>.
- Global styles are added via angular.json under styles and assets mapping includes src/assets -> /assets.
