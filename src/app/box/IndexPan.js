Ext.define('Tool.box.IndexPan', {
    extend: 'Ext.panel.Panel',
    id: 'box-index-pan',
    title: '@box',
    alias: 'widget.box-index-pan',
    layout: 'vbox',
    border: false,
    bodyBorder: false,
    defaults: {
        padding: '0 50 0 50'
    },
    initComponent: function () {


        let data = {
            pixiv: {
                text: 'pixiv',
                buttons: [
                    {
                        "icon": __dirname + '/box/pixiv/res/index.png',
                        "text": '本地',
                        "toModule": "box-pixiv_member-pan",
                        "dto": {
                            controller: 'Tool.box.pixiv.controller.MemberController',
                            "useCache": false,
                            "record": null
                        }
                    }, {
                        "icon": __dirname + '/box/pixiv/res/index.png',
                        "text": '辅助',
                        "toModule": "box-pixiv_illust-helper-pan",
                        "dto": {
                            controller: 'Tool.box.pixiv.controller.MemberController',
                            "useCache": false,
                            "record": null
                        }
                    }
                ]
            }
        };
        ExtUtil.initIndexView(this, data, 3);

        this.items.items.unshift({
            xtype: 'form',
            border: false,
            bodyBorder: false,
            layout: {type: 'vbox', align: 'center'},
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    defaults: {
                        margin: '10 0 0 0'
                    },
                    items: [
                        {
                            xtype: 'box',
                            action: 'face',
                            width: 100,
                            height: 100,
                            autoEl: {
                                tag: 'img',
                                src: __dirname + '/box/pixiv/res/user.png'
                            }
                        }
                    ]

                },
                {
                    xtype: 'container',
                    layout: {type: 'hbox', align: 'middle', pack: 'center'},
                    width: '100%',
                    defaults: {
                        margin: '10 0 0 5'
                    },

                    items: [
                        {
                            xtype: 'box',
                            action: 'facePixiv',
                            width: 25,
                            height: 25,
                            autoEl: {
                                tag: 'img',
                                src: __dirname + '/box/pixiv/res/pixiv.ico'
                            }
                        }, {
                            xtype: 'label',
                            style: 'font-weight:bold;color:#666;padding-top:40;cursor:pointer',
                            doAction: 'showLoginPixiv',
                            action: 'infoPixiv',
                            text: '(未登入)',
                            listeners: {
                                mouseleave: {
                                    element: 'el',
                                    fn: function (e, t, eOpts) {
                                        t.style.color = "#222";
                                    }
                                },
                                mouseenter: {
                                    element: 'el',
                                    fn: function (e, t, eOpts) {
                                        t.style.color = "#ff8f42";
                                    }
                                },
                                click: {
                                    element: 'el',
                                    fn: function (e, t, eOpts) {
                                        let component_ = this.component;
                                        component_.fireEvent('click', component_, e, eOpts);
                                    }
                                },
                            },
                        }
                    ]

                }
            ]
        });

        this.callParent(arguments);
    }
});
