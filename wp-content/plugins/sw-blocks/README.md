# SW Blocks

Examples for extending
[Gutenberg](https://github.com/WordPress/gutenberg)
with plugins which create blocks.

See also:
[Gutenberg developer documentation](https://wordpress.org/gutenberg/handbook/)

## Installation

SW Blocks are distributed as WordPress plugin.

1. [Download a pre-built zip archive of the latest release](https://github.com/shandyw/WordPress/sw-blocks/releases).
   > Do not download from the "Clone or download" GitHub button, as this includes the source material only. Read the [Development](#development) instructions below if you’re interested in building your own copy of the plugin.
2. Navigate to the __Plugins > Add new__ screen in your WordPress administrative dashboard.
3. Click __Add New__ at the top of the page.
3. Click __Upload Plugin__ at the top of the page.
4. Click __Choose File__, then find and __Upload__ the downloaded zip file.
5. After the plugin finishes installing, click __Activate__.
6. You’re done!

## Development

First, you need a WordPress Environment to run the plugin on. The quickest way to get up and running is to use the provided docker setup. Install [docker-ce](https://store.docker.com/search?type=edition&offering=community) and [docker-compose](https://docs.docker.com/compose/install/) by following the most recent instructions on the docker site.

In the folder of your preference, clone this project and enter the working directory:

```
git clone git@github.com:shandyw/WordPress/sw-blocks.git
cd sw-blocks
```


For each of the examples that include an esnext example the following commands are required to build the plugins:

To install the node packages
```
npm install
```

To build the production version of the plugin
```
npm run build
```

To build a development version of the plugin and watch changes for automatic rebuild
```
npm start
```

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
