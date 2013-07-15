/**
 * Created with JetBrains WebStorm
 * User: brandonxavier
 * Date: 7/14/13
 *

 Copyright 2013 Brandon Xavier (brandonxavier421@gmail.com)

 This file is part of CreateUserList.

 CreateUserList is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 CreateUserList is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with CreateUserList.  If not, see <http://www.gnu.org/licenses/>.

 */


var userList[];

cb.onDrawPanel(function(user) {

    if (userList.indexOf(user) == -1 ){
        userList.push(user);
    }

    return {
        'template': '3_rows_11_21_31',
        'row1_value': '0',
        'row2_value': 'username',
        'row3_value': '0'
    };
});


function init(){

    setTimeout( getUsers(), 30000);

}

function getUsers() {
    cb.drawPanel();
    cb.log("Accumulated users:");
    for (var i = 0; i < userList.length; i++ ) {
        cb.log(userList[i]);
    }
}

init();


