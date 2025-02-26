declare module TcHmi {
    module Controls {
        module TcHmiOpenHabControls {
            class LampSwitchTs extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                /**
                 *
                 * S T A R T
                 *
                 * implementation of the state handling
                 */
                protected __state: boolean | null;
                setState(valueNew: boolean): void;
                getState(): boolean | null;
                protected __processValue(): void;
            }
        }
    }
}
