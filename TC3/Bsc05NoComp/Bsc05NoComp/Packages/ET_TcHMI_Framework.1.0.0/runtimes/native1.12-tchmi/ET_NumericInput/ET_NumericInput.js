﻿var TcHmi;
! function (TcHmi) {
    let Controls;
    ! function (Controls) {
        let ET_TcHMI_Framework;
        ! function (ET_TcHMI_Framework) {
            class ET_NumericInput extends TcHmi.Controls.System.TcHmiControl {
                constructor(element, pcElement, attrs) {
                    super(element, pcElement, attrs), this.__locked = !1, this.__triggerUIFinishedOnBlur = !0, this.__internalMinValue = null, this.__internalMaxValue = null, this.__localizedInput = {
                        key: "",
                        parameters: []
                    }, this.__localizationReader = void 0, this.__destroyLocalizationWatch = null, this.__onKeydown = event => {
                        if (!0 === TcHmi.Access.checkAccess(this, "operate") && this.getIsEnabled())
                            if (this.__triggerUIFinishedOnBlur = !0, "Escape" === event.key) this.__processValue(), TcHmi.EventProvider.raise(this.__id + ".onUserInteractionCanceled"), this.__triggerUIFinishedOnBlur = !1, this.__autoFocusOut && this.__elementInput.blur();
                            else if ("Enter" === event.key) {
                            if (this.__oldValue = this.__value, this.__triggerUIFinishedOnBlur = !1, this.__autoFocusOut) this.__elementInput.blur(), this.__unlock();
                            else {
                                let newValue = Number(this.__elementInput.value);
                                "" === this.__elementInput.value ? this.__resetToLastValidValue && this.__processValue() : !isNaN(newValue) && (null === this.__internalMaxValue || newValue <= this.__internalMaxValue) && (null === this.__internalMinValue || newValue >= this.__internalMinValue) ? this.__setValue(newValue) : this.__resetToLastValidValue && this.__processValue()
                            }
                            TcHmi.EventProvider.raise(this.__id + ".onUserInteractionFinished"), event.preventDefault()
                        }
                    }, this.__onInput = event => {
                        !0 === TcHmi.Access.checkAccess(this, "operate") && this.getIsEnabled() && (this.__triggerUIFinishedOnBlur = !0, this.__validateInput())
                    }, this.__onPaste = event => {
                        !0 === TcHmi.Access.checkAccess(this, "operate") && this.getIsEnabled() && (this.__triggerUIFinishedOnBlur = !0, window.setTimeout(() => {
                            this.__validateInput()
                        }))
                    }, this.__onCut = event => {
                        !0 === TcHmi.Access.checkAccess(this, "operate") && this.getIsEnabled() && (this.__triggerUIFinishedOnBlur = !0, window.setTimeout(() => {
                            this.__validateInput()
                        }))
                        }, this.__onFocusIn = event => {
                            console.log("onFocusIn");
                        !0 === TcHmi.Access.checkAccess(this, "operate") && this.getIsEnabled() && (this.__triggerUIFinishedOnBlur = !0, this.__oldValue = this.__value, this.__elementInput.classList.add("tchmi-focus"), this.__autoSelectText && (this.__elementInput.setSelectionRange(0, 0), this.__elementInput.select()), TcHmi.EventProvider.raise(this.__id + ".onFocusIn", event), this.__elementInput === document.activeElement && this.__lock())
                    }, this.__onFocusOut = event => {
                        if (!0 !== TcHmi.Access.checkAccess(this, "operate")) return;
                        if (!this.getIsEnabled()) return;
                        this.__unlock(), this.__elementInput.classList.remove("tchmi-focus"), TcHmi.EventProvider.raise(this.__id + ".onFocusOut", event), this.__oldValue = this.__value;
                        let newValue = Number(this.__elementInput.value);
                        "" === this.__elementInput.value ? this.__resetToLastValidValue && this.__processValue() : !isNaN(newValue) && (null === this.__internalMaxValue || newValue <= this.__internalMaxValue) && (null === this.__internalMinValue || newValue >= this.__internalMinValue) ? this.__setValue(newValue) : this.__resetToLastValidValue && this.__processValue(), this.__triggerUIFinishedOnBlur && TcHmi.EventProvider.raise(this.__id + ".onUserInteractionFinished"), this.__triggerUIFinishedOnBlur = !0
                    }, this.__onResolverForContentPaddingWatchCallback = data => {
                        !1 === this.__isAttached && this.__suspendObjectResolver("contentPadding"), data.error === TcHmi.Errors.NONE ? tchmi_equal(data.value, this.__contentPadding) || (this.__contentPadding = data.value, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                            propertyName: "ContentPadding"
                        }), this.__processContentPadding()) : TCHMI_CONSOLE_LOG_LEVEL >= 1 && TcHmi.Log.error("[Source=Control, Module=TcHmi.Controls.ET_TcHMI_Framework.ET_NumericInput, Id=" + this.getId() + ", Attribute=ContentPadding] Resolving symbols from object failed with error: " + TcHmi.Log.buildMessage(data.details))
                    }, this.__onResolverForValueColorWatchCallback = data => {
                        !1 === this.__isAttached && this.__suspendObjectResolver("textColor"), data.error === TcHmi.Errors.NONE ? tchmi_equal(data.value, this.__valueColor) || (this.__valueColor = data.value, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                            propertyName: "ValueColor"
                        }), this.__processValueColor()) : TCHMI_CONSOLE_LOG_LEVEL >= 1 && TcHmi.Log.error("[Source=Control, Module=TcHmi.Controls.ET_TcHMI_Framework.ET_NumericInput, Id=" + this.getId() + ", Attribute=ValueColor] Resolving symbols from object failed with error: " + TcHmi.Log.buildMessage(data.details))
                    }
                }
                __previnit() {
                    if (this.__elementTemplateRoot = this.__element[0].getElementsByClassName("TcHmi_Controls_ET_TcHMI_Framework_ET_NumericInput-template")[0],
                        this.__elementInput = this.__elementTemplateRoot.getElementsByClassName("TcHmi_Controls_ET_TcHMI_Framework_ET_NumericInput-template-input")[0],
                        this.__elementTextContainer = this.__elementTemplateRoot.getElementsByClassName("TcHmi_Controls_ET_TcHMI_Framework_ET_NumericInput-template-text-container")[0],
                        !this.__elementTemplateRoot || !this.__elementInput) throw new Error("Invalid Template.html");
                    if ( 0 === this.__elementTextContainer.length && (this.__elementTextContainer = this.__elementTemplateRoot.find(".tchmi-textblock-template-text-container")), 0 === this.__elementTemplateRoot.length || 0 === this.__elementTextContainer.length) throw new Error("Invalid Template.html");
                    this.__destroyLocalizationWatch = this.__localization.watch(data => {
                        if (data.error === TcHmi.Errors.NONE && data.reader && (this.__localizationReader = data.reader, "" !== this.__localizedInput.key)) {
                            let localizedText = data.reader.get(this.__localizedInput.key);
                            this.__localizedInput.parameters.length > 0 && (localizedText = tchmi_format_string(localizedText, ...this.__localizedInput.parameters)), this.__elementInput.setCustomValidity(tchmi_decode_control_characters(localizedText))
                        }
                    }), super.__previnit()
                }
                __init() {
                    super.__init();
                    const passiveEventOptions = !!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED && {
                            passive: !0,
                            capture: !1
                        },
                        activeEventOptions = !!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED && {
                            passive: !1,
                            capture: !1
                        };
                    this.__elementTemplateRoot.addEventListener("focusin", this.__onFocusIn, passiveEventOptions), this.__elementTemplateRoot.addEventListener("focusout", this.__onFocusOut, passiveEventOptions), this.__elementInput.addEventListener("keydown", this.__onKeydown, activeEventOptions), this.__elementInput.addEventListener("input", this.__onInput, passiveEventOptions), this.__elementInput.addEventListener("paste", this.__onPaste, passiveEventOptions), this.__elementInput.addEventListener("cut", this.__onCut, passiveEventOptions)
                }
                __attach() {
                    super.__attach(), "Content" === this.getHeightMode() && this.__processHeight()
                }
                __detach() {
                    super.__detach()
                }
                destroy() {
                    var _a;
                    if (this.__keepAlive) return;
                    const passiveEventOptions = !!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED && {
                            passive: !0,
                            capture: !1
                        },
                        activeEventOptions = !!TCHMI_EVENT_OPTION_OBJECT_SUPPORTED && {
                            passive: !1,
                            capture: !1
                        };
                    this.__elementTemplateRoot.removeEventListener("focusin", this.__onFocusIn, passiveEventOptions), this.__elementTemplateRoot.removeEventListener("focusout", this.__onFocusOut, passiveEventOptions), this.__elementInput.removeEventListener("keydown", this.__onKeydown, activeEventOptions), this.__elementInput.removeEventListener("input", this.__onInput, passiveEventOptions), this.__elementInput.removeEventListener("paste", this.__onPaste, passiveEventOptions), this.__elementInput.removeEventListener("cut", this.__onCut, passiveEventOptions), null === (_a = this.__destroyLocalizationWatch) || void 0 === _a || _a.call(this), super.destroy()
                }
                __validateInput() {
                    var _a;
                    if (isNaN(Number(this.__elementInput.value))) "-" === this.__elementInput.value && null !== this.__internalMinValue && this.__internalMinValue < 0 ? (this.__setLocalizedInputValidity("ValueNaN"), this.__lastInput = this.__elementInput.value) : this.__elementInput.value = null !== (_a = this.__lastInput) && void 0 !== _a ? _a : "";
                    else {
                        this.__lastInput = this.__elementInput.value;
                        let newValue = Number(this.__elementInput.value);
                        
                        "" === this.__elementInput.value && this.__attributesInitialized ? this.__setLocalizedInputValidity("ValueEmpty") : null !== this.__internalMinValue && newValue < this.__internalMinValue ? this.__setLocalizedInputValidity("ValueOutOfRangeMin", [this.__internalMinValue]) : null !== this.__internalMaxValue && newValue > this.__internalMaxValue ? this.__setLocalizedInputValidity("ValueOutOfRangeMax", [this.__internalMaxValue]) : this.__setLocalizedInputValidity("")
                    }
                }
                __setInternalMinMaxValues() {
                    var _a, _b;
                    void 0 !== this.__minValue && void 0 !== this.__maxValue && null !== this.__minValue && null !== this.__maxValue ? (this.__internalMinValue = this.__minValue > this.__maxValue ? this.__maxValue : this.__minValue, this.__internalMaxValue = this.__maxValue < this.__minValue ? this.__minValue : this.__maxValue) : (this.__internalMinValue = null !== (_a = this.__minValue) && void 0 !== _a ? _a : null, this.__internalMaxValue = null !== (_b = this.__maxValue) && void 0 !== _b ? _b : null), null !== this.__internalMinValue && null !== this.__value && void 0 !== this.__value && this.__value < this.__internalMinValue ? this.__setValue(this.__internalMinValue) : null !== this.__internalMaxValue && null !== this.__value && void 0 !== this.__value && this.__value > this.__internalMaxValue && this.__setValue(this.__internalMaxValue)
                }
                __setLocalizedInputValidity(key, ...parameters) {
                    if (this.__localizedInput.key = key, this.__localizedInput.parameters = parameters, "" === key) this.__elementInput.setCustomValidity("");
                    else if (this.__localizationReader) {
                        let localizedText = this.__localizationReader.get(key);
                        this.__localizedInput.parameters.length > 0 && (localizedText = tchmi_format_string(localizedText, ...this.__localizedInput.parameters)), this.__elementInput.setCustomValidity(tchmi_decode_control_characters(localizedText))
                    }
                }
                setValue(valueNew) {
                    !0 !== this.__locked && (null !== this.__internalMinValue && null !== valueNew && valueNew < this.__internalMinValue || null !== this.__internalMaxValue && null !== valueNew && valueNew > this.__internalMaxValue || this.__setValue(valueNew))
                }
                __setValue(valueNew, process = !0) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("Value")), convertedValue !== this.__value ? null === convertedValue && void 0 !== this.__value || (null !== this.__value && void 0 !== this.__value && (null === this.__internalMinValue || this.__value >= this.__internalMinValue) && (null === this.__internalMaxValue || this.__value <= this.__internalMaxValue) && (this.__lastValidValue = this.__value), this.__value = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "Value"
                    }), TcHmi.EventProvider.raise(this.__id + ".onValueChanged", this.__value), process && this.__processValue()) : null === this.__value || void 0 === this.__value ? "" !== this.__elementInput.value && this.__processValue() : (null !== this.__decimalDigits && void 0 !== this.__decimalDigits && this.__elementInput.value !== this.__value.toFixed(this.__decimalDigits) || this.__elementInput.value !== this.__value.toString()) && this.__processValue()
                }
                getValue() {
                    return this.__value
                }
                setText(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toString(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("Text")), convertedValue !== this.__text && (this.__text = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "Text"
                    }), this.__processText())
                }
                getText() {
                    return this.__text
                }
                __processText() {
                    
                    this.__elementTextContainer.textContent = tchmi_decode_control_characters(this.__text), "Content" === this.getHeightMode() && this.__processHeight()
                }
                __processWidth() {
                    super.__processWidth(), "Content" === this.getHeightMode() && this.__processHeight()
                }
                setHeightMode(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toSizeModeWithContent(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("HeightMode")), convertedValue !== this.__heightMode && (this.__heightMode = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "HeightMode"
                    }), this.__processHeightMode())
                }
                __processHeight() {
                    if ("Content" === this.getHeightMode()) {
                        this.__intHeight = null;
                        const contentPixelSize = this.__getContentHeight();
                        null !== contentPixelSize && (this.__intHeight = contentPixelSize + "px")
                    }
                    super.__processHeight()
                }



                __processValue() {
                    if (isNaN(Number(this.__value)) || void 0 === this.__value || null === this.__value) this.__elementInput.value = "";
                    else if (null !== this.__decimalDigits && void 0 !== this.__decimalDigits) {
                        if (this.__value !== Number(this.__value.toFixed(this.__decimalDigits))) return void this.setValue(Number(this.__value.toFixed(this.__decimalDigits)));
                        this.__elementInput.value = this.__value.toFixed(this.__decimalDigits) 
                    } else this.__elementInput.value = this.__value.toString();
                    this.__validateInput()
                }
                setMinValue(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("MinValue")), convertedValue !== this.__minValue && (this.__minValue = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "MinValue"
                    }), this.__processMinValue())
                }
                getMinValue() {
                    return this.__minValue
                }
                __processMinValue() {
                    this.__setInternalMinMaxValues()
                }
                setMaxValue(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("MaxValue")), convertedValue !== this.__maxValue && (this.__maxValue = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "MaxValue"
                    }), this.__processMinValue())
                }
                getMaxValue() {
                    return this.__maxValue
                }
                __processMaxValue() {
                    this.__setInternalMinMaxValues()
                }
                setDecimalDigits(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("DecimalDigits")), convertedValue !== this.__decimalDigits && (this.__decimalDigits = convertedValue, this.__decimalDigits && this.__decimalDigits < 0 && (this.__decimalDigits = 0), TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "DecimalDigits"
                    }), this.__processDecimalDigits())
                }
                getDecimalDigits() {
                    return this.__decimalDigits
                }
                __processDecimalDigits() {
                    void 0 !== this.__value && this.__processValue()
                }
                setValueHorizontalAlignment(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toHorizontalAlignment(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("ValueHorizontalAlignment")), convertedValue !== this.__valueHorizontalAlignment && (this.__valueHorizontalAlignment = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "ValueHorizontalAlignment"
                    }), this.__processValueHorizontalAlignment())
                }
                getValueHorizontalAlignment() {
                    return this.__valueHorizontalAlignment
                }
                __processValueHorizontalAlignment() {
                    switch (this.__valueHorizontalAlignment) {
                        case "Left":
                            TcHmi.StyleProvider.setSimpleElementStyle(this.__elementInput, "text-align", "left");
                            TcHmi.StyleProvider.setSimpleElementStyle(this.__elementTextContainer, "justify-content", "flex-end");
                            break;
                        case "Center":
                            TcHmi.StyleProvider.setSimpleElementStyle(this.__elementInput, "text-align", "center");
                            TcHmi.StyleProvider.setSimpleElementStyle(this.__elementTextContainer, "justify-content", "flex-end");
                            break;
                        case "Right":
                            TcHmi.StyleProvider.setSimpleElementStyle(this.__elementInput, "text-align", "right");
                            TcHmi.StyleProvider.setSimpleElementStyle(this.__elementTextContainer, "justify-content", "flex-start");
                            break;
                        default:
                            TcHmi.StyleProvider.setSimpleElementStyle(this.__elementInput, "text-align", null)
                            TcHmi.StyleProvider.setSimpleElementStyle(this.__elementTextContainer, "justify-content", "flex-end");

                    }
                }
                setContentPadding(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("ContentPadding"));
                    let resolverInfo = this.__objectResolvers.get("contentPadding");
                    resolverInfo && (resolverInfo.watchDestroyer && resolverInfo.watchDestroyer(), resolverInfo.resolver.destroy());
                    let resolver = new TcHmi.Symbol.ObjectResolver(convertedValue);
                    this.__objectResolvers.set("contentPadding", {
                        resolver: resolver,
                        watchCallback: this.__onResolverForContentPaddingWatchCallback,
                        watchDestroyer: resolver.watch(this.__onResolverForContentPaddingWatchCallback)
                    })
                }
                getContentPadding() {
                    return this.__contentPadding
                }
                __processContentPadding() {
                    TcHmi.StyleProvider.processContentPadding(this.__elementInput, this.__contentPadding)
                    TcHmi.StyleProvider.processContentPadding(this.__elementTextContainer, this.__contentPadding)
               }
                setValueFontSize(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("ValueFontSize")), convertedValue !== this.__valueFontSize && (this.__valueFontSize = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "ValueFontSize"
                    }), this.__processValueFontSize())
                }
                getValueFontSize() {
                    return this.__valueFontSize
                }
                __processValueFontSize() {
                    TcHmi.StyleProvider.processFontSize(this.__elementInput, this.__valueFontSize, this.__valueFontSizeUnit)
                    TcHmi.StyleProvider.processFontSize(this.__elementTextContainer, this.__valueFontSize, this.__valueFontSizeUnit)

                }
                setValueFontSizeUnit(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toFontSizeUnit(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("ValueFontSizeUnit")), convertedValue !== this.__valueFontSizeUnit && (this.__valueFontSizeUnit = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "ValueFontSizeUnit"
                    }), this.__processValueFontSizeUnit())
                }
                getValueFontSizeUnit() {
                    return this.__valueFontSizeUnit
                }
                __processValueFontSizeUnit() {
                    TcHmi.StyleProvider.processFontSize(this.__elementInput, this.__valueFontSize, this.__valueFontSizeUnit)
                    TcHmi.StyleProvider.processFontSize(this.__elementTextContainer, this.__valueFontSize, this.__valueFontSizeUnit)
               }
                setValueFontFamily(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toFontFamily(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("ValueFontFamily")), convertedValue !== this.__valueFontFamily && (this.__valueFontFamily = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "ValueFontFamily"
                    }), this.__processValueFontFamily())
                }
                getValueFontFamily() {
                    return this.__valueFontFamily
                }
                __processValueFontFamily() {
                    TcHmi.StyleProvider.processFontFamily(this.__elementInput, this.__valueFontFamily)
                    TcHmi.StyleProvider.processFontFamily(this.__elementTextContainer, this.__valueFontFamily)
      }
                setValueFontStyle(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toFontStyle(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("ValueFontStyle")), convertedValue !== this.__valueFontStyle && (this.__valueFontStyle = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "ValueFontStyle"
                    }), this.__processValueFontStyle())
                }
                getValueFontStyle() {
                    return this.__valueFontStyle
                }
                __processValueFontStyle() {
                    TcHmi.StyleProvider.processFontStyle(this.__elementInput, this.__valueFontStyle)
                    TcHmi.StyleProvider.processFontStyle(this.__elementTextContainer, this.__valueFontStyle)

                }
                setValueFontWeight(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toFontWeight(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("ValueFontWeight")), convertedValue !== this.__valueFontWeight && (this.__valueFontWeight = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "ValueFontWeight"
                    }), this.__processValueFontWeight())
                }
                getValueFontWeight() {
                    return this.__valueFontWeight
                }
                __processValueFontWeight() {
                    TcHmi.StyleProvider.processFontWeight(this.__elementInput, this.__valueFontWeight)
                    TcHmi.StyleProvider.processFontWeight(this.__elementTextContainer, this.__valueFontWeight)

                }
                setPlaceholder(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toString(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("Placeholder")), convertedValue !== this.__placeholder && (this.__placeholder = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "Placeholder"
                    }), this.__processPlaceholder())
                }
                getPlaceholder() {
                    return this.__placeholder
                }
                __processPlaceholder() {
                    this.__placeholder ? this.__elementInput.setAttribute("placeholder", this.__placeholder) : this.__elementInput.removeAttribute("placeholder")
                }
                setValueColor(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toObject(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("ValueColor"));
                    let resolverInfo = this.__objectResolvers.get("textColor");
                    resolverInfo && (resolverInfo.watchDestroyer && resolverInfo.watchDestroyer(), resolverInfo.resolver.destroy());
                    let resolver = new TcHmi.Symbol.ObjectResolver(convertedValue);
                    this.__objectResolvers.set("textColor", {
                        resolver: resolver,
                        watchCallback: this.__onResolverForValueColorWatchCallback,
                        watchDestroyer: resolver.watch(this.__onResolverForValueColorWatchCallback)
                    })
                }
                getValueColor() {
                    return this.__valueColor
                }
                __processValueColor() {
                    TcHmi.StyleProvider.processTextColor(this.__elementInput, this.__valueColor)
                    TcHmi.StyleProvider.processTextColor(this.__elementTextContainer, this.__valueColor)


                }
                setAutoFocusOut(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("AutoFocusOut")), convertedValue !== this.__autoFocusOut && (this.__autoFocusOut = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "AutoFocusOut"
                    }), this.__processAutoFocusOut())
                }
                getAutoFocusOut() {
                    return this.__autoFocusOut
                }
                __processAutoFocusOut() {}
                __lock() {
                    this.__locked = !0
                }
                __unlock() {
                    this.__locked = !1
                }
                __processControlActivation() {
                    const valueInput = this.__elementInput;
                    TcHmi.Access.checkAccess(this, "operate") && this.getIsEnabled() ? valueInput.disabled = !1 : (valueInput.blur(), valueInput.disabled = !0)
                }
                __processIsEnabled() {
                    super.__processIsEnabled(), this.__processControlActivation()
                }
                __processAccessConfig() {
                    super.__processAccessConfig(), this.__processControlActivation()
                }
                setAutoSelectText(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("AutoSelectText")), convertedValue !== this.__autoSelectText && (this.__autoSelectText = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "AutoSelectText"
                    }))
                }
                getAutoSelectText() {
                    return this.__autoSelectText
                }
                setResetToLastValidValue(valueNew) {
                    let convertedValue = TcHmi.ValueConverter.toBoolean(valueNew);
                    null === convertedValue && (convertedValue = this.getAttributeDefaultValueInternal("ResetToLastValidValue")), convertedValue !== this.__resetToLastValidValue && (this.__resetToLastValidValue = convertedValue, TcHmi.EventProvider.raise(this.__id + ".onPropertyChanged", {
                        propertyName: "ResetToLastValidValue"
                    }), this.__processResetToLastValidValue())
                }
                getResetToLastValidValue() {
                    return this.__resetToLastValidValue
                }
                __processResetToLastValidValue() {
                    void 0 !== this.__value && this.__processValue()
                }
            }
            ET_TcHMI_Framework.ET_NumericInput = ET_NumericInput
        }(ET_TcHMI_Framework = Controls.ET_TcHMI_Framework || (Controls.ET_TcHMI_Framework = {}))
    }(Controls = TcHmi.Controls || (TcHmi.Controls = {}))
}(TcHmi || (TcHmi = {})), TcHmi.Controls.registerEx("ET_NumericInput", "TcHmi.Controls.ET_TcHMI_Framework", TcHmi.Controls.ET_TcHMI_Framework.ET_NumericInput);
