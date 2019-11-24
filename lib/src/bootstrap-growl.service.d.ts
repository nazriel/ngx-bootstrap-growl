import { BootstrapAlertType } from "./bootstrap-alert-type.enum";
import { BootstrapAlert } from "./bootstrap-alert.model";
import { Subject } from "rxjs";
export declare class BootstrapGrowlService {
    alerts: Subject<BootstrapAlert[]>;
    alertHolder: BootstrapAlert[];
    alertCount: number;
    autoClose: number;
    constructor();
    configure(alertCount: number, autoClose: number): void;
    addAlert(message: string, type: BootstrapAlertType, autoClose?: number, dismissable?: boolean): void;
    removeAlert(alert: BootstrapAlert): void;
    private _removeAlert;
    private _scheduleAlertHide;
    private _convertTypeToCssClass;
    private _removeAlertById;
}
