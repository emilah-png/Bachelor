declare module TcHmi {
    module Controls {
        module TcHmiOpenHabControls {
            class SwipeRegionTs extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                /** ###############################################################################
                 *
                 * S T A R T
                 *
                 * implementation of the content files
                 */
                protected __contentFiles: string[] | null;
                protected __contentInstances: System.baseTcHmiControl[] | null;
                setContentList(valueNew: TcHmi.Controls.System.TcHmiRegion[]): void;
                getContentList(): string[] | null;
                protected __processContentFiles(): void;
                private __owlIsCalled;
                protected __cleanUpMemory(): void;
                /**
                 * implementation of the content files
                 *
                 * E N D
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T
                 *
                 * implementation of the content files
                 */
                protected __contentStartIndex: number | null;
                setContentStart(valueNew: number): void;
                getContentStart(): number | null;
                /**
                 * implementation of the content files
                 *
                 * E N D
                 *
                 */
                /** ###############################################################################
                 *
                 * S T A R T
                 *
                 * implementation of show navigation
                 */
                protected __showNavigation: boolean | null;
                protected __showNavigationDots: boolean | null;
                setShowNavigation(valueNew: number): void;
                getShowNavigation(): boolean | null;
                setShowNavigationDots(valueNew: number): void;
                getShowNavigationDots(): boolean | null;
            }
        }
    }
}
