import { OnInit } from "@angular/core";
import { BootstrapGrowlService } from "./bootstrap-growl.service";
import { BootstrapAlert } from "./bootstrap-alert.model";
import * as i0 from "@angular/core";
export declare class BootstrapGrowlComponent implements OnInit {
    private growlService;
    alertCount: number;
    autoClose: number;
    alerts: BootstrapAlert[];
    constructor(growlService: BootstrapGrowlService);
    ngOnInit(): void;
    closeAlert(alert: BootstrapAlert): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BootstrapGrowlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BootstrapGrowlComponent, "bootstrap-growl", never, { "alertCount": "alertCount"; "autoClose": "autoClose"; }, {}, never, never>;
}
