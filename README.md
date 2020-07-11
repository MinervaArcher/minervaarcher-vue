# Minerva Archer - Personal Site

After building my own site from scratch in 2015 and basically ignoring it, I decided it was time for a redesign using more recent technologies and better conventions. You can view the code for the old site [here](https://github.com/MinervaArcher/minervaarcher).

The current site uses Vue for templating & rendering, Vue Router for routing and dynamic link updates, and module-specific CSS written in SCSS. It was scaffolded using vue-cli in 2018; in 2020, I reverse engineered the vue-cli Webpack config and removed vue-cli as a dependency for greater control and flexibility.

## TODO
- Add Storybook stories for each component
- Write unit tests
- Enable service workers

## FAQ

### Why is this site built as a single-page app?
Good question! Since I do very little work in public repos, and since many websites today are written as SPAs since they're fairly dynamic, I've written this site as an SPA as well to show how I would structure one. There's absolutely no technical benefit to making this particular site single-page vs. multipage.

### Why Vue?
For personal projects, I prefer Vue because it's a more lightweight library than React. (Plus, I get to write React all the time and this site it an excuse to keep my Vue skills somewhat up to date.)