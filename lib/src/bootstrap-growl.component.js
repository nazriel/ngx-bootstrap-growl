"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bootstrap_growl_service_1 = require("./bootstrap-growl.service");
var BootstrapGrowlComponent = /** @class */ (function () {
    function BootstrapGrowlComponent(growlService) {
        this.growlService = growlService;
    }
    BootstrapGrowlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.growlService.configure(this.alertCount, this.autoClose);
        this.growlService.alerts.subscribe(function (alerts) {
            _this.alerts = alerts;
        });
    };
    BootstrapGrowlComponent.prototype.closeAlert = function (alert) {
        // service is automatically notified!
        if (alert.dismissable) {
            this.growlService.removeAlert(alert);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], BootstrapGrowlComponent.prototype, "alertCount", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], BootstrapGrowlComponent.prototype, "autoClose", void 0);
    BootstrapGrowlComponent = __decorate([
        core_1.Component({
            selector: "bootstrap-growl",
            template: "<div *ngFor=\"let alert of alerts\">\n        <div class=\"alert alert-{{alert.type}}\" [ngClass]=\"{'alert-dismissible': alert.dismissable}\" role=\"alert\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeAlert(alert)\" *ngIf=\"alert.dismissable\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <span [innerHtml]=\"alert.message\"></span>\n        </div>\n    </div>"
        }),
        __metadata("design:paramtypes", [bootstrap_growl_service_1.BootstrapGrowlService])
    ], BootstrapGrowlComponent);
    return BootstrapGrowlComponent;
}());
exports.BootstrapGrowlComponent = BootstrapGrowlComponent;
//# sourceMappingURL=bootstrap-growl.component.js.map