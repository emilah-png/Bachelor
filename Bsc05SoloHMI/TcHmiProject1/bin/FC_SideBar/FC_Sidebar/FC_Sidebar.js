// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

var TcHmi;
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    let Controls;
    (function (/** @type {globalThis.TcHmi.Controls} */ Controls) {
        let FC_SideBar;
        (function (FC_SideBar) {
            class FC_Sidebar extends TcHmi.Controls.System.TcHmiControl {
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                    this.__region;
                    this.__content;
                    this.__alarm;
                    this.__manuel;
                    this.__menuHeight;
                }
                __previnit() {
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_FC_SideBar_FC_Sidebar-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    super.__previnit();
                }
                __init() {
                    super.__init();
                }
                __attach() {
                    super.__attach();
                    var self = this;
                    //console.log(this.__content);

                    //DOM doldurulur
                    for (var i = 0; i < self.__content.length; i++) {
                        //Buton mu?
                        if (self.__content[i][0].UseDropdown) {
                            //Buton Ana eleman
                            if (self.__content[i][0].IconOptions != "Use custom boxicon") {
                                for (var k = 0; k < $('.sub-btn').length; k++) {
                                    $('.sub-btn:eq(' + k + ')').html(self.__content[i][0].IconOptions + self.__content[i][0].MenuText + "<i class='bx bx-chevron-right dropdown'></i>");
                                }
                            }
                            else {
                                $('.sub-btn:eq(' + k + ')').html(self.__content[i][0].IconOptionsCustom + self.__content[i][0].MenuText + "<i class='bx bx-chevron-right dropdown'></i>");
                            }

                            //buton Alt elemanları
                            for (var j = 1; j < self.__content[i].length; j++) {
                                if (self.__content[i][j].IconOptions != "Use custom boxicon") {
                                    $('.sub-menu .sub-item:eq(' + (j - 1) + ')').html(self.__content[i][j].IconOptions + self.__content[i][j].MenuText);
                                }
                                else {
                                    $('.sub-menu .sub-item:eq(' + (j - 1) + ')').html(self.__content[i][j].IconOptionsCustom + self.__content[i][j].MenuText);
                                }
                            }
                        }
                        //Ana menüler
                        else {
                            if (self.__content[i][0].IconOptions != "Use custom boxicon") {
                                $('.item:eq(' + i + ') a').html(self.__content[i][0].IconOptions + self.__content[i][0].MenuText);
                            }
                            else {
                                $('.item:eq(' + i + ') a').html(self.__content[i][0].IconOptionsCustom + self.__content[i][0].MenuText);
                            }
                        }
                    }

                    $('.sub-btn').click(function () {
                        $(this).next('.sub-menu').slideToggle();
                        $(this).find('.dropdown').toggleClass('rotate');
                    });

                    $('.item').click(function () {
                        if (self.__alarm === false) {
                            $('.bx.bxs-bell').removeClass('bx-tada');
                        }

                        if (self.__manuel === false) {
                            $('.bx.bxs-hand').removeClass('bx-tada');
                        }

                        $('.item').removeClass('active');
                        $('.bx.bxs-cog').removeClass('bx-spin');
                        $('.bx.bxs-circle-three-quarter').removeClass('bx-spin');
                        $(this).addClass('active');

                        /*Linklenen region adını alır ve tıklanan menüe göre target değiştirir */
                        var index = $('.item').index(this);
                        //console.log("Ana menü index'i: " + index);
                        var region = TcHmi.Controls.get(self.__region);
                        if (index === 0)
                            region.setTargetContent(self.__content[0][0].TargetContent);
                        else if (index === 1) {
                            region.setTargetContent(self.__content[1][0].TargetContent);
                            $('.bx.bxs-bell').addClass('bx-tada');
                        }
                        else if (index === 3) {
                            region.setTargetContent(self.__content[3][0].TargetContent);
                            $('.bx.bxs-hand').addClass('bx-tada');
                        }
                        else if (index === 4) {
                            region.setTargetContent(self.__content[4][0].TargetContent);
                            $('.bx.bxs-cog').addClass('bx-spin');
                        }
                        else if (index === 5) {
                            region.setTargetContent(self.__content[5][0].TargetContent);
                            $('.bx.bxs-circle-three-quarter').addClass('bx-spin');
                        }
                        else if (index === 6)
                            region.setTargetContent(self.__content[6][0].TargetContent);
                        else if (index === 7)
                            region.setTargetContent(self.__content[7][0].TargetContent);
                    });

                    $('.item:not(:has(.sub-menu))').click(function () {
                        $('.sub-item').removeClass('active');
                        $('.sub-btn').next('.sub-menu').slideUp();
                        $('.sub-btn').find('.dropdown').removeClass('rotate');
                    });

                    $('.sub-item').click(function () {
                        var region = TcHmi.Controls.get(self.__region);
                        var index = $('.sub-item').index(this);
                        //console.log("Alt menü index'i: " + index);
                        if (index === 0)
                            region.setTargetContent(self.__content[2][1].TargetContent);
                        else if (index === 1)
                            region.setTargetContent(self.__content[2][2].TargetContent);
                        else if (index === 2)
                            region.setTargetContent(self.__content[2][3].TargetContent);
                        else if (index === 3)
                            region.setTargetContent(self.__content[2][4].TargetContent);
                        $('.sub-item').removeClass('active');
                        $(this).addClass('active');
                    });
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
                //Hedef Region
                setTargetContent(val) {
                    this.__region = val;
                    //console.log(this.__region);
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'TargetContent' });
                }
                getTargetContent() {
                    return this.__region;
                }

                //General options
                setGeneralOptions(val) {
                    this.__content = val;
                    //console.log(this.__content);
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'GeneralOptions' });
                }
                getGeneralOptions() {
                    return this.__content;
                }

                //Alarm kontrol
                setCustomAlarmActive(alarmActive) {
                    this.__alarm = alarmActive;
                    var intervalId2;
                    var self = this;

                    setTimeout(() => {
                        if (this.__alarm == true) {
                            $('.bx.bxs-bell').addClass('bx-tada');
                            intervalId2 = setInterval(function () {
                                if (self.__alarm === false) {
                                    clearInterval(intervalId2);
                                }
                                var color = $('.bx.bxs-bell').css('color');
                                if (color === 'rgb(255, 255, 255)') {
                                    $('.bx.bxs-bell').css({
                                        'color': 'red',
                                        'transition': 'color 0.4s ease-in-out'
                                    });
                                } else {
                                    $('.bx.bxs-bell').css({
                                        'color': '',
                                        'transition': 'color 0.4s ease-in-out'
                                    });
                                }
                            }, 400);
                        } else if ((this.__alarm == false) && (!$('.item:eq(1)').hasClass('active'))) {
                            $('.bx.bxs-bell').removeClass('bx-tada');
                            $('.bx.bxs-bell').css('color', '');
                        } else
                            $('.bx.bxs-bell').css('color', '');
                    }, 250);

                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'CustomAlarmActive' });
                }
                getCustomAlarmActive() {
                    return this.__alarm;
                }

                //Manuel kontrol
                setCustomManuelctive(manuelActive) {
                    this.__manuel = manuelActive;
                    var intervalId;
                    var self = this;
                    setTimeout(() => {
                        if (this.__manuel == true) {
                            $('.bx.bxs-hand').addClass('bx-tada');
                            intervalId = setInterval(function () {
                                if (self.__manuel === false) {
                                    clearInterval(intervalId);
                                }
                                var color = $('.bx.bxs-hand').css('color');
                                if (color === 'rgb(255, 255, 255)') {
                                    $('.bx.bxs-hand').css({
                                        'color': 'yellow',
                                        'transition': 'color 0.8s ease-in-out'
                                    });
                                } else {
                                    $('.bx.bxs-hand').css({
                                        'color': '',
                                        'transition': 'color 0.8s ease-in-out'
                                    });
                                }
                            }, 800);
                        }
                        else if ((this.__manuel == false) && (!$('.item:eq(3)').hasClass('active'))) {
                            $('.bx.bxs-hand').removeClass('bx-tada');
                            $('.bx.bxs-hand').css('color', '');
                        }
                        else {
                            $('.bx.bxs-hand').css('color', '');
                        }
                    }, 250);

                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'CustomManuelctive' });
                }
                getCustomManuelctive() {
                    return this.__manuel;
                }

                setMenuHeight(height) {
                    this.__menuHeight = height;
                    var self = this;
                    setTimeout(() => {
                        $('.side-bar .menu .item a').css('line-height', self.__menuHeight + 'px');
                    }, 100);

                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'MenuHeight' });
                }
                getMenuHeight() {
                    return this.__menuHeight;
                }
            }
            FC_SideBar.FC_Sidebar = FC_Sidebar;
        })(FC_SideBar = Controls.FC_SideBar || (Controls.FC_SideBar = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('FC_Sidebar', 'TcHmi.Controls.FC_SideBar', TcHmi.Controls.FC_SideBar.FC_Sidebar);