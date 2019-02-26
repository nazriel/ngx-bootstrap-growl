"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bootstrap_growl_component_1 = require("./bootstrap-growl.component");
var bootstrap_growl_service_1 = require("./bootstrap-growl.service");
var common_1 = require("@angular/common");
var BootstrapGrowlModule = /** @class */ (function () {
    function BootstrapGrowlModule() {
    }
    BootstrapGrowlModule = __decorate([
        core_1.NgModule({
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
        })
    ], BootstrapGrowlModule);
    return BootstrapGrowlModule;
}());
exports.BootstrapGrowlModule = BootstrapGrowlModule;
//# sourceMappingURL=bootstrap-growl.module.js.map