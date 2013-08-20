# T<img src="https://raw.github.com/MinnPost/tulip/master/dist/images/tulip.png" width="22px" alt="U">lip

Tulip is a customizable application for creating static or D3 based maps.  Named for the [Impossible Black Tulip](http://en.wikipedia.org/wiki/Kunyu_Wanguo_Quantu).

You can use Tulip at [code.minnpost.com/tulip](http://code.minnpost.com/tulip/).  The project is still under heavy development and many features are still planned.

## About

Tulip is a web interface built on top of [Simple Map D3](http://code.minnpost.com/simple-map-d3/).  It allows you to make a custom map using any GeoJSON or TopoJSON data source.  If you data source has numerical properties, you can create a "choropleth" style map.

(coming soon)  Tulip is fully customizable so that it can be deployed for an organization or individual with specific configuration options already set or removed so that the design of maps can be controlled.

Inspiration take from [ChartBuilder](https://github.com/Quartz/Chartbuilder).

## Examples

(coming soon)

## Deployment

The idea is that you should not fork the project; you should use it as a library in your own app.

Install with bower:

    bower install https://github.com/MinnPost/tulip.git
    
Create an `index.html` page otherwise put the following in your existing page.  First add the CSS.

    <link rel="stylesheet" href="bower_components/tulip/dist/tulip.libs.css">
    <link rel="stylesheet" href="bower_components/tulip/dist/tulip.css">

Then add the Javascript.

    <script src="bower_components/tulip/dist/tulip.libs.js"></script>
    <script src="bower_components/tulip/dist/tulip.js"></script>

Add a container for the application.

    <div class="tulip-app"></div>

Then configure and start the application.

    <script>
      (function() {
        var thisTulip = new Tulip({
          el: '.tulip-app'
        });
      })();
    </script>

## Development

### Prerequisites

1. Install [Git](http://git-scm.com/).
1. Install [NodeJS](http://nodejs.org/).
1. Install [Grunt](http://gruntjs.com/): `npm install -g grunt-cli`
1. Install [Bower](http://bower.io/): `npm install -g bower`

### Install

1. Check out this code with [Git](http://git-scm.com/): `git clone https://github.com/MinnPost/tulip.git`
1. Go into the template directory: `cd tulip`
1. Install NodeJS packages: `npm install`
1. Install Bower components: `bower install`

### Run Locally

* Run: `grunt server`
   * This will run a local webserver for development and you can view the application in your web browser at [http://localhost:8765](http://localhost:8765).
   * This will also watch for JS changes and JSHint the files.
   * Utilize `index.html` for development, while `index-dist.html` is used for basically testing of the built version.

### Build

1. Run: `grunt`

## Attribution

* [Paint Palette](http://thenounproject.com/noun/paint-palette/#icon-No4098) designed by [Samuel Q. Green](http://thenounproject.com/squintongreen) from The Noun Project.
