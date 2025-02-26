declare module TcHmi {
    module Controls {
        module TcHmiOpenHabControls {
            class SensorHumidityTs extends TcHmi.Controls.TcHmiOpenHabControls.BaseControlTs {
                #private;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                __previnit(): void;
                __init(): void;
                __attach(): void;
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
                protected __humidityValue: number | null;
                setHumidity(valueNew: Number): void;
                getHumidity(): number | null;
                protected __processValue(): void;
            }
        }
    }
}
