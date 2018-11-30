/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    // map tells the System loader where to look for things
    var googleLoaded = false;
    var map = {
      'app': 'dist/build', // 'dist',
      '@angular': 'node_modules/@angular',
      '@angular/platform-browser/animations':'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.min.js'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
      'app': {main: 'main.js', defaultExtension: 'js', meta: {'./*.ts': {loader: 'systemjs-angular-loader.js'}}},
    };
    var ngPackageNames = [
      'common',
      'compiler',
      'core',
      'forms',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'router'
    ];
    
    // Individual files (~300 requests):
    function packIndex(pkgName) {
      packages['@angular/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
    }
  
    // Bundled (~40 requests):
    function packUmd(pkgName) {
      packages['@angular/' + pkgName] = {main: 'bundles/' + pkgName + '.umd.min.js', defaultExtension: 'js'};
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
      bundles: { rxjs : ['@angular', 'rxjs']},
      defaultJSExtensions: true,
      map: map,
      packages: packages,
    };
    System.config(config);
  })(this);
  