import {Mongo} from "meteor/mongo";

export const UserInfo = new Mongo.Collection("userInfo");

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish("userInfo", function postPublication() {
        return Anons.find();
    });
}

Meteor.methods({
    "user.create" () {

        // Make sure the user is logged in before inserting a task
        if (!Meteor.user()) {
            throw new Meteor.Error("not-authorized");
        }

        let randonName = Math.floor((Math.random()*15)+1);


        Anons.findOne(randonName);
    },
    "user.find" (username) {
        check(username, String);


    },
    "user.addChat"(chatId){
        if (!Meteor.user()) {
            throw new Meteor.Error("not-authorized");
        }
    }
});