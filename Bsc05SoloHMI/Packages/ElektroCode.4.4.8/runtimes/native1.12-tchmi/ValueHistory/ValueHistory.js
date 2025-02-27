// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

/*
 * Generated 19.04.2023 08:58:03
 * Copyright (C) 2023
 */
var TcHmi;
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    let Controls;
    (function (/** @type {globalThis.TcHmi.Controls} */ Controls) {
        let ElektroCode;
        (function (ElektroCode) {
            class ValueHistory extends TcHmi.Controls.System.TcHmiControl {
                constructor(element, pcElement, attrs) {
                    super(element, pcElement, attrs);
                    this.__ctx;
                    this.__value;
                    this.__header;
                    this.__createText_Baslik;

                    this.__hist1;
                    this.__hist2;
                    this.__hist3;
                    this.__histTemp;
                }
                __previnit() {
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_ElektroCode_ValueHistory-Template');
                    this.__ctx = this.__element.find('.flex-item');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    super.__previnit();
                }
                
                __attach() {
                    super.__attach();
                        this.__ctx[0].style.opacity = 0.30;
                        this.__ctx[1].style.opacity = 0.35;
                        this.__ctx[2].style.opacity = 0.40;
                        this.__ctx[3].style.opacity = 0.45;
                        this.__ctx[4].style.opacity = 0.50;
                        this.__ctx[5].style.opacity = 0.55;
                        this.__ctx[6].style.opacity = 0.60;
                }
                __detach() {
                    super.__detach();
                }
                destroy() {
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                }

                setHistoryData(val) {
                    this.__value = val;
                    if (this.__histTemp != val) {
                        this.__hist3 = this.__hist2;
                        this.__hist2 = this.__hist1;
                        this.__hist1 = this.__histTemp;
                        this.__histTemp = val;
                        this.__setDisplay();
                    }
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'HistoryData' });
                }

                getHistoryData() {
                    return this.__value;
                }

                setHeaderHistory(val) {
                    this.__header = val;
                    this.__ctx[0].innerText = val;
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'HeaderHistory' });
                }

                getHeaderHistory() {
                    return this.__header;
                }

                __setDisplay() {
                    if (this.__hist3 != null) {

                        this.__ctx[6].innerText = this.__hist1;
                        this.__ctx[4].innerText = this.__hist2;
                        this.__ctx[2].innerText = this.__hist3;

                        this.__ctx[0].style.display = "flex";
                        this.__ctx[1].style.display = "flex";
                        this.__ctx[2].style.display = "flex";
                        this.__ctx[3].style.display = "flex";
                        this.__ctx[4].style.display = "flex";
                        this.__ctx[5].style.display = "flex";
                        this.__ctx[6].style.display = "flex";
                    }
                    else if (this.__hist2 != null) {
                        this.__ctx[4].innerText = this.__hist1;
                        this.__ctx[2].innerText = this.__hist2;

                        this.__ctx[0].style.display = "flex";
                        this.__ctx[1].style.display = "flex";
                        this.__ctx[2].style.display = "flex";
                        this.__ctx[3].style.display = "flex";
                        this.__ctx[4].style.display = "flex";
                    }
                    else if (this.__hist1 != null) {
                        this.__ctx[2].innerText = this.__hist1;
                        this.__ctx[0].style.display = "flex";
                        this.__ctx[1].style.display = "flex";
                        this.__ctx[2].style.display = "flex";
                    }
                }
            }
            ElektroCode.ValueHistory = ValueHistory;
        })(ElektroCode = Controls.ElektroCode || (Controls.ElektroCode = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('ValueHistory', 'TcHmi.Controls.ElektroCode', TcHmi.Controls.ElektroCode.ValueHistory);
