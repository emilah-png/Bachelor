declare module TcHmi {
    module Controls {
        module TcHmiOpenHabControls {
            class SwitchTs extends TcHmi.Controls.TcHmiOpenHabControls.BaseControlTs {
                #private;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                /** ###############################################################################
                 * S T A R T
                 */
                protected __sendToggleCommand(): void;
                protected __switchName: String | null;
                protected __switchState: String | null;
                protected __switchStateEnabled: String | string | null;
                protected __switchStateDisabled: String | string | null;
                protected __switchIconEnabled: String | string | null;
                protected __switchIconDisabled: String | string | null;
                protected __switchClickable: boolean | Boolean | null;
                getName(): String | null;
                getState(): String | null;
                getStateEnabled(): String | null;
                getIconEnabled(): String | null;
                getStateDisabled(): String | null;
                getIconDisabled(): String | null;
                getClickable(): boolean | Boolean | null;
                setName(valueNew: String): void;
                setState(valueNew: String): void;
                setStateEnabled(valueNew: string): void;
                setIconEnabled(valueNew: string): void;
                setStateDisabled(valueNew: string): void;
                setIconDisabled(valueNew: string): void;
                setClickable(valueNew: boolean): void;
                protected __isValidConfiguration(): boolean;
                protected __processValues(): void;
            }
            /**
             * E N D
             */
        }
    }
}
