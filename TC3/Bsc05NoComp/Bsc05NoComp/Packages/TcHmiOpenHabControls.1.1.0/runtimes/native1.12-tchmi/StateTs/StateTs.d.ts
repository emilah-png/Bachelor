declare module TcHmi {
    module Controls {
        module TcHmiOpenHabControls {
            interface MapItem {
                state: number;
                stateHumanReadable: string;
                stateIcon: string;
            }
        }
        module TcHmiOpenHabControls {
            class StateTs extends TcHmi.Controls.TcHmiOpenHabControls.BaseControlTs {
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
                protected __switchName: String | null;
                protected __switchState: String | null;
                protected __stateMapping: TcHmiOpenHabControls.MapItem[] | null;
                getName(): String | null;
                getState(): String | null;
                getStateMapping(): TcHmiOpenHabControls.MapItem[] | null;
                setName(valueNew: String): void;
                setState(valueNew: String): void;
                setStateMapping(valueNew: TcHmiOpenHabControls.MapItem[]): void;
                private __state2humanReadable;
                protected __provideFallbackUi(): void;
                protected __processValues(): void;
            }
        }
    }
}
