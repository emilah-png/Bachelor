declare module TcHmi {
    module Controls {
        module TcHmiOpenHabControls {
            class SensorHeatingTs extends TcHmi.Controls.TcHmiOpenHabControls.BaseControlTs {
                #private;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                __previnit(): void;
                __init(): void;
                __listOfCtrl: {
                    id: string;
                    cmd: string | number | undefined;
                    instance: JQuery<HTMLElement> | undefined;
                    instanceHmi: TcHmi.Controls.System.baseTcHmiControl | undefined;
                }[];
                private __listOfDestroyFunctions;
                private __isDialogInitialized;
                __attach(): void;
                __updateButtonHighlight(): void;
                __changeEnableState(state: boolean): void;
                __sendHeatBoost(state: boolean): void;
                __sendHeatCommand(setPoint: string | number): void;
                __sendHeatMode(mode: number): void;
                __detach(): void;
                destroy(): void;
                /** ###############################################################################
                 *
                 * S T A R T
                 *
                 * implementation of the state handling
                 */
                protected __heatingValue: number | null;
                setHeat(valueNew: Number): void;
                getHeat(): number | null;
                protected __processValue(): void;
                /**
                 * implementation of the state handling
                 *
                 * E N D
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T
                 *
                 * implementation of the heating mode handling
                 */
                protected __heatingMode: number | null;
                setMode(valueNew: Number): void;
                getMode(): number | null;
                protected __processValue_Mode(): void;
                /**
                 * implementation of the state handling
                 *
                 * E N D
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T
                 *
                 * implementation of the boost state handling
                 */
                protected __heatingBoostState: boolean | null;
                setBoost(valueNew: boolean): void;
                getBoost(): boolean | null;
                protected __processValue_BoostState(): void;
                /**
                 * implementation of the state handling
                 *
                 * E N D
                 *
                 *



                /** ###############################################################################
                 *
                 * S T A R T
                 *
                 * implementation of the boost counter handling
                 */
                protected __heatingBoostCounter: number | null;
                setBoostCounter(valueNew: Number): void;
                getBoostCounter(): number | null;
                protected __processValueBoostCounter(): void;
                /**
                 * implementation of the state handling
                 *
                 * E N D
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T
                 *
                 * implementation of the temperature handling
                 */
                protected __heatingTemperature: number | null;
                setTemperature(valueNew: Number): void;
                getTemperature(): number | null;
                protected __processTemperature(): void;
            }
        }
    }
}
