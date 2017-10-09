import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {check} from "meteor/check";

export const Posts = new Mongo.Collection("Posts");

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('posts', function postPublication() {
        return Posts.find();
    });
}

Meteor.methods({
    'posts.insert' (post) {
        check(post, Object);

        // Make sure the user is logged in before inserting a task
        if (!Meteor.user()) {
            throw new Meteor.Error("not-authorized");
        }

        Posts.insert(post);
    },
    'posts.animo' (postId) {
        check(postId, String);
        if (!Meteor.user()) {
            throw new Meteor.Error("not-authorized");
        }
        Posts.update(postId, {
            $inc: {
                animos: 1
            }
        });
    },
    'posts.noGive' (postId) {
        check(postId, String);
        if (!Meteor.user()) {
            throw new Meteor.Error("not-authorized");
        }
        Posts.update(postId, {
            $inc: {
                nogive: 1
            }
        });
    },
    'posts.better' (postId) {
        check(postId, String);
        if (!Meteor.user()) {
            throw new Meteor.Error("not-authorized");
        }
        Posts.update(postId, {
            $inc: {
                better: 1
            }
        });
    }
});