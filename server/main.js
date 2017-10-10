import { Meteor } from 'meteor/meteor';

//imports de imports/api
import "../imports/api/Anons.js";
import "../imports/api/Chatrooms.js";
import "../imports/api/Posts.js";
import "../imports/api/UserInfo.js";
//El codigo está modularizado y bien organizado, no tienen imports innecesarios
Meteor.startup(() => {
  // code to run on server at startup
});
