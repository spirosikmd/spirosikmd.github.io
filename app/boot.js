System.register(['angular2/platform/browser', './profile.component'], function(exports_1) {
    var browser_1, profile_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(profile_component_1.ProfileComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map