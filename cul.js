var userList = [];

cb.onDrawPanel( function (user) {

    cb.log( "onDrawPanel called for user: " + user );

    if ( userList.indexOf( user ) == -1 ) {
        userList.push( user );
    }

    return {
        'template': '3_rows_11_21_31',
        'row1_value': '0',
        'row2_value': 'username',
        'row3_value': '0'
    };
} );


function init() {

    cb.chatNotice( "Don't forget to turn /debug on :grin", cb.room_slug );
    cb.setTimeout( getUsers, 60000 );

}

function getUsers() {
    cb.drawPanel();
    cb.log( "Accumulated users:" );
    for ( var i = 0; i < userList.length; i++ ) {
        cb.log( userList[i] );
    }
    cb.setTimeout( getUsers, 60000 );
}

init();



