"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapGrowlModule = void 0;
var core_1 = require("@angular/core");
var bootstrap_growl_component_1 = require("./bootstrap-growl.component");
var bootstrap_growl_service_1 = require("./bootstrap-growl.service");
var common_1 = require("@angular/common");
var i0 = require("@angular/core");
var BootstrapGrowlModule = /** @class */ (function () {
    function BootstrapGrowlModule() {
    }
    BootstrapGrowlModule.ɵfac = function BootstrapGrowlModule_Factory(t) { return new (t || BootstrapGrowlModule)(); };
    BootstrapGrowlModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: BootstrapGrowlModule });
    BootstrapGrowlModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            bootstrap_growl_service_1.BootstrapGrowlService
        ], imports: [[
                common_1.CommonModule
            ]] });
    return BootstrapGrowlModule;
}());
exports.BootstrapGrowlModule = BootstrapGrowlModule;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BootstrapGrowlModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    bootstrap_growl_component_1.BootstrapGrowlComponent
                ],
                providers: [
                    bootstrap_growl_service_1.BootstrapGrowlService
                ],
                exports: [
                    bootstrap_growl_component_1.BootstrapGrowlComponent
                ],
                schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BootstrapGrowlModule, { declarations: [bootstrap_growl_component_1.BootstrapGrowlComponent], imports: [common_1.CommonModule], exports: [bootstrap_growl_component_1.BootstrapGrowlComponent] }); })();
//# sourceMappingURL=bootstrap-growl.module.js.map