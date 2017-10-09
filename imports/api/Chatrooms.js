import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {check} from "meteor/check";

export const Chatrooms = new Mongo.Collection("Chatrooms");

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('chats', function postPublication() {
        return Posts.find();
    });
}

eteor.methods({
    'chats.createchat' (chat) {
        check(chat, Object);

        // Make sure the user is logged in before inserting a task
        if (!Meteor.user()) {
            throw new Meteor.Error("not-authorized");
        }

        let searchForChat = Chatrooms.find({keyword : chat.keyword});

        if(searchForChat.count() == 0){
            chat._id = Chatrooms.insert(chat);
        }else {
            
            searchForChat.fetch[]
        }

        
    }
});