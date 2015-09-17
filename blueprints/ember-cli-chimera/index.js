module.exports = {
  afterInstall: function() {
    const _this = this;

    return this.addBowerPackageToProject('pretender').then(function() {
      return _this.addPackagesToProject([
        { name: 'ember-lodash', target: '0.0.5' }
      ]);
    });
  }
};
