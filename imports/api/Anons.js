import {Mongo} from "meteor/mongo";

export const Anons = new Mongo.Collection("Anons");

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish("anons", function postPublication() {
        return Anons.find();
    });
}