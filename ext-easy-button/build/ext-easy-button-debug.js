Ext.define('EasyButton.button.Easy', {
    // extend: 'Ext.Button',
    xtype: 'easybutton',
    scale: 'large',
    ui: 'easy-default',
    text: 'Easy',
    handler: function() {
        Ext.Msg.alert('Easy', 'That was easy!');
    }
});

