declare module TcHmi {
    module Controls {
        module TcHmiOpenHabControls {
            class SurveillanceTs extends TcHmi.Controls.Beckhoff.TcHmiImage {
                #private;
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                __previnit(): void;
                __init(): void;
                __attach(): void;
                __detach(): void;
                destroy(): void;
                showCameraInFront(): void;
                hideCameraInFront(): void;
            }
        }
    }
}
