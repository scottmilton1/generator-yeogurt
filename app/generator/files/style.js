/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  // client/styles

  if (this.useKss) {
    this.template('client/styles/styleguide.md', 'client/styles/styleguide.md');
  }

  if (this.cssOption !== 'css') {
    if (this.cssOption === 'less') {
      this.template('client/styles/main.less', 'client/styles/main.less');
      if (this.jsFramework === 'angular') {
        this.template('client/scripts/angular/app/home/home.less', 'client/app/home/home.less');
      }
    }
    if (this.cssOption === 'sass') {
      if (this.sassSyntax === 'sass') {
        this.template('client/styles/main.sass', 'client/styles/main.sass');
        if (this.jsFramework === 'angular') {
          this.template('client/scripts/angular/app/home/home.sass', 'client/app/home/home.sass');
        }
      }
      else {
        this.template('client/styles/main.scss', 'client/styles/main.scss');
        if (this.jsFramework === 'angular') {
          this.template('client/scripts/angular/app/home/home.scss', 'client/app/home/home.scss');
        }
      }
    }
    if (this.cssOption === 'stylus') {
      this.template('client/styles/main.styl', 'client/styles/main.styl');
      if (this.jsFramework === 'angular') {
        this.template('client/scripts/angular/app/home/home.styl', 'client/app/home/home.styl');
      }
    }
  }
  else {
    this.template('client/styles/main.css', 'client/styles/main.css');
    if (this.jsFramework === 'angular') {
      this.template('client/scripts/angular/app/home/home.css', 'client/app/home/home.css');
    }
  }
};

module.exports = styleFiles;
