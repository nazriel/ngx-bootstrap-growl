"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapGrowlComponent = void 0;
var core_1 = require("@angular/core");
var bootstrap_growl_service_1 = require("./bootstrap-growl.service");
var i0 = require("@angular/core");
var i1 = require("./bootstrap-growl.service");
var i2 = require("@angular/common");
function BootstrapGrowlComponent_div_0_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function BootstrapGrowlComponent_div_0_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); var alert_r1 = i0.ɵɵnextContext().$implicit; var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.closeAlert(alert_r1); });
    i0.ɵɵelementStart(1, "span", 5);
    i0.ɵɵtext(2, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var _c0 = function (a0) { return { "alert-dismissible": a0 }; };
function BootstrapGrowlComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵtemplate(2, BootstrapGrowlComponent_div_0_button_2_Template, 3, 0, "button", 2);
    i0.ɵɵelement(3, "span", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var alert_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("alert alert-", alert_r1.type, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(6, _c0, alert_r1.dismissable));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", alert_r1.dismissable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHtml", alert_r1.message, i0.ɵɵsanitizeHtml);
} }
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
    BootstrapGrowlComponent.ɵfac = function BootstrapGrowlComponent_Factory(t) { return new (t || BootstrapGrowlComponent)(i0.ɵɵdirectiveInject(i1.BootstrapGrowlService)); };
    BootstrapGrowlComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BootstrapGrowlComponent, selectors: [["bootstrap-growl"]], inputs: { alertCount: "alertCount", autoClose: "autoClose" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["role", "alert", 3, "ngClass"], ["type", "button", "class", "close", "data-dismiss", "alert", 3, "click", 4, "ngIf"], [3, "innerHtml"], ["type", "button", "data-dismiss", "alert", 1, "close", 3, "click"], ["aria-hidden", "true"]], template: function BootstrapGrowlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BootstrapGrowlComponent_div_0_Template, 4, 8, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.alerts);
        } }, directives: [i2.NgForOf, i2.NgClass, i2.NgIf], encapsulation: 2 });
    return BootstrapGrowlComponent;
}());
exports.BootstrapGrowlComponent = BootstrapGrowlComponent;
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BootstrapGrowlComponent, [{
        type: core_1.Component,
        args: [{
                selector: "bootstrap-growl",
                template: "<div *ngFor=\"let alert of alerts\">\n        <div class=\"alert alert-{{alert.type}}\" [ngClass]=\"{'alert-dismissible': alert.dismissable}\" role=\"alert\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeAlert(alert)\" *ngIf=\"alert.dismissable\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <span [innerHtml]=\"alert.message\"></span>\n        </div>\n    </div>"
            }]
    }], function () { return [{ type: i1.BootstrapGrowlService }]; }, { alertCount: [{
            type: core_1.Input
        }], autoClose: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=bootstrap-growl.component.js.map