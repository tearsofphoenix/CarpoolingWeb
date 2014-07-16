/*global kitchensink*/

kitchensink.Views = kitchensink.Views || {};

(function() {
    'use strict';

    kitchensink.Views.FormsView = M.View.extend({
        // The view should be in a grid
        grid: 'col-xs-12'
    }, {

        textfieldViews: M.View.extend({
            grid: 'row',
            value: 'M.TextfielView'
        }, {

            textfieldExample: M.TextfieldView.extend({
                grid: 'col-xs-12',
                label: 'Label',
                value: '',
                type: 'text',
                placeholder: 'Placeholder'
            }),

            cleartextfieldExample: M.TextfieldView.extend({
                grid: 'col-xs-12',
                label: 'Clearbutton (if exists)',
                value: '',
                placeholder: 'Placeholder'
            }),

            backgroundLeftTextfieldExample: M.TextfieldView.extend({
                grid: 'col-xs-12',
                label: 'Icon left',
                value: '',
                type: 'text',
                icon: 'fa-dot-circle-o',
                placeholder: 'Placeholder'
            }),

            backgroundLeftWithDeleteTextfieldExample: M.TextfieldView.extend({
                grid: 'col-xs-12',
                label: 'Icon left and clear button (if exists)',
                value: '',
                icon: 'fa-rocket',
                placeholder: 'Rocket'
            }),

            backgroundRightTextfieldExample: M.TextfieldView.extend({
                grid: 'col-xs-12',
                label: 'Icon right',
                value: '',
                type: 'text',
                cssClass: 'right',
                icon: 'fa-dot-circle-o',
                placeholder: 'Placeholder'
            }),

            backgroundRightWithDeleteTextfieldExample: M.TextfieldView.extend({
                grid: 'col-xs-12',
                label: 'Icon right with clear button (if exists)',
                value: '',
                cssClass: 'right',
                icon: 'fa-rocket',
                placeholder: 'Rocket'
            }),

            clearTextfieldExample: M.TextfieldView.extend({
                grid: 'col-xs-12',
                label: 'Custom clear',
                type: 'clear',
                placeholder: 'clear me',
                value: M.Model.create({
                    value: ''
                })
            }),

            date1: M.TextfieldView.extend({
                label: 'Date example',
                grid: 'col-xs-12',
                scopeKey: 'person.birthday',
                type: 'date',
                cssClass: 'right',
                icon: 'fa-calendar',
                onGet: function( value ) {
                    var date = M.Date.create(parseInt(value, 10)).format('YYYY-MM-DD');
                    return date;
                },
                onSet: function( value ) {
                    return M.Date.create(value).unix() * 1000;
                }
            }),

            date2: M.TextfieldView.extend({
                grid: 'col-xs-12',
                scopeKey: 'person',
                template: '<label>Date example with custom template</label><input type="date" value="<%= birthday %>" />',
                onGet: function( value ) {
                    var date = M.Date.create(parseInt(value, 10)).format('YYYY-MM-DD');
                    return date;
                },
                onSet: function( value ) {
                    return M.Date.create(value).unix() * 1000;
                }
            }),

            datePlain: M.View.extend({
                grid: 'col-xs-12',
                scopeKey: 'person.birthday'
            })

        }),

        passwordsView: M.View.extend({
            grid: 'row',
            value: 'M.TextfielView password input'
        },{
            clearTextfieldExample: M.TextfieldView.extend({
                grid: 'col-xs-12',
                label: 'Custom clear',
                type: 'password',
                useCustomClear: YES,
                placeholder: 'clear me',
                value: M.Model.create({
                    value: ''
                })
            })
        }),

        radiolistView: M.View.extend({

            grid: 'row',
            value: 'M.RadiolistView'
        }, {

            radioButton: M.RadiolistView.extend({
                grid: 'col-xs-12',
                scopeKey: 'selectionListModel.water',
                selectOptions: {
                    collection: [
                        {id: 1, name: 'fountain'},
                        {id: 2, name: 'evian'},
                        {id: 3, name: 'dasina'}
                    ],
                    labelPath: 'name',
                    valuePath: 'name'
                }
            }),

            rb: M.RadiolistView.extend({
                grid: 'col-xs-12',
                scopeKey: 'selectionListModel.water',
                selectOptions: {
                    collection: [
                        {id: 1, name: 'fountain'},
                        {id: 2, name: 'evian'},
                        {id: 3, name: 'dasina'}
                    ],
                    labelPath: 'name',
                    valuePath: 'name'
                }
            })

        }),

        checkboxlistView: M.View.extend({

            grid: 'row',
            value: 'M.CheckboxlistView'
        }, {
            rb1: M.CheckboxlistView.extend({
                grid: 'col-xs-12',
                scopeKey: 'multipleSelectionListModel.water',
                selectOptions: {
                    collection: [
                        {id: 1, name: 'fountain'},
                        {id: 2, name: 'evian'},
                        {id: 3, name: 'dasina'}
                    ],
                    labelPath: 'name',
                    valuePath: 'name'
                }
            }),

            rb2: M.CheckboxlistView.extend({
                grid: 'col-xs-12',
                scopeKey: 'multipleSelectionListModel.water',
                selectOptions: {
                    collection: [
                        {id: 1, name: 'fountain'},
                        {id: 2, name: 'evian'},
                        {id: 3, name: 'dasina'}
                    ],
                    labelPath: 'name',
                    valuePath: 'name'
                }
            })
        }),

        selectView: M.View.extend({

            grid: 'row',
            value: 'M.SelectView'
        }, {
            selectionlistExample: M.SelectView.extend({
                grid: 'col-xs-12',
                scopeKey: 'selectionListModel.water',
                selectOptions: {
                    collection: [
                        {id: 1, name: 'fountain'},
                        {id: 2, name: 'evian'},
                        {id: 3, name: 'dasina'}
                    ],
                    labelPath: 'name',
                    valuePath: 'name'
                }
            })
        }),


        multipleSelectView: M.View.extend({

            grid: 'row',
            value: 'M.SelectView isMultiple:YES'
        }, {
            mulitpleSelectionListViewExample: M.SelectView.extend({
                isMultiple: YES,
                grid: 'col-xs-12',
                scopeKey: 'multipleSelectionListModel.water',
                selectOptions: {
                    collection: [
                        {id: 1, name: 'fountain'},
                        {id: 2, name: 'evian'},
                        {id: 3, name: 'dasina'}
                    ],
                    labelPath: 'name',
                    valuePath: 'name'
                }

            })

        }),

        toggle: M.ToggleSwitchView.extend({
            grid: 'col-xs-6',
            label: 'Wifi settings: ',
            offLabel: 'Offline',
            onLabel: 'Online',
            scopeKey: 'wifi',
            extendTemplate: '<%= wifi  %>',
            onValue: 'online',
            offValue: 'offline'
        }),

        toggle2: M.ToggleSwitchView.extend({
            grid: 'col-xs-6',
            offLabel: 'Off',
            onLabel: 'On',
            scopeKey: 'wifi',
            extendTemplate: '<%= wifi  %>',
            onValue: 'online',
            offValue: 'offline'
        })


    });

})();
