declare module TcHmi {
    module Controls {
        module TcHmiOpenHabControls {
            enum BatteryState {
                Idle = "Idle",
                Charging = "Charging",
                Discharging = "Discharging"
            }
            export class BatteryTs extends TcHmi.Controls.TcHmiOpenHabControls.BaseControlTs {
                #private;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                protected __elementContainerBatteryState: JQuery | null;
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                /** ###############################################################################
                 * S T A R T
                 */
                protected __batteryLevel: number | null;
                setLevel(valueNew: Number): void;
                getLevel(): number | null;
                protected __processValue(): void;
                protected __batteryState: BatteryState | null;
                setState(valueNew: BatteryState): void;
                getState(): BatteryState | null;
                protected __processState(): void;
            }
            export {};
        }
    }
}
