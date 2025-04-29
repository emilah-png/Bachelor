declare module TcHmi {
    module Controls {
        module TcHmiOpenHabControls {
            interface LookupItem {
                resolvedValue: number;
                rangeStart: number;
                rangeEnd: number;
            }
        }
        module TcHmiOpenHabControls {
            class BlindsTs extends TcHmi.Controls.System.TcHmiControl {
                #private;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                protected __clickEventInstances: Array<any>;
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __sendBlindCommand(cmd: string): void;
                __sendBlindState(stateValue: number): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                /** ###############################################################################
                 *
                 * S T A R T
                 *
                 * implementation of the state handling
                 */
                protected __levelValue: number | null;
                protected __levelValueMapping: TcHmiOpenHabControls.LookupItem[] | null;
                setLevel(valueNew: Number): void;
                getLevel(): number | null;
                protected __processValue(): void;
                setLevelMapping(valueNew: TcHmiOpenHabControls.LookupItem[]): void;
                getLevelMapping(): TcHmiOpenHabControls.LookupItem[] | null;
                protected __processValueMapping(): void;
            }
        }
    }
}
