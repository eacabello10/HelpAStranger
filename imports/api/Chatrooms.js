import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {check} from "meteor/check";

export const Chatrooms = new Mongo.Collection("Chatrooms");

import {UserInfo} from "./UserInfo.js";

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish("chats", function chatsPublication() {
        return Chatrooms.find();
    });
}

Meteor.methods({
    "chats.createchat" (chat) {
        check(chat, Object);

        // Make sure the user is logged in before inserting a task
        if (!Meteor.user()) {
            throw new Meteor.Error("not-authorized");
        }

        let searchForChat = Chatrooms.find({keywords : chat.keywords});

        if(searchForChat.count() == 0){
            chat._id = Chatrooms.insert(chat);
            return chat;
        }else {
            var randomChat = Math.floor(Math.random()*searchForChat.count());
            chat = searchForChat.fetch()[randomChat];
            return chat;
        } 
    }, 
    "chats.addme" (user ,chat) {
        check(user, Object);
        check(chat, Object);

        // Make sure the user is logged in before inserting a task
        if (!Meteor.user()) {
            throw new Meteor.Error("not-authorized");
        }
        user.chatrooms = user.chatrooms.concat(chat);
        UserInfo.update(user._id, {
            $set : {
                chatrooms : user.chatrooms
            }
        });
        Chatrooms.update(chat._id, {
            $push : {
                participants : user
            }
        });
        return Chatrooms.findOne(chat._id);
    },
    "chats.send" (message ,chat) {
        check(message, Object);
        check(chat, Object);

        // Make sure the user is logged in before inserting a task
        if (!Meteor.user()) {
            throw new Meteor.Error("not-authorized");
        }

        Chatrooms.update(chat._id, {
            $push : {
                messages : message
            }
        });
        return Chatrooms.findOne(chat._id);
    },
});