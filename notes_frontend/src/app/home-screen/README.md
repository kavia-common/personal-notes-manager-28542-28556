# HomeScreenComponent

This component integrates the generated static assets for the Notes Home screen.

Key points:
- Template copies markup from src/assets/home-screen-125-171.html (scripts removed).
- Interactions are implemented via Angular methods: search/info/FAB click.
- Global styles included via angular.json: src/assets/common.css and src/assets/home-screen-125-171.css.
- Routes configured in app.routes.ts for '' and 'home' to display this component.
- AppComponent uses router-outlet as the shell for routing.
