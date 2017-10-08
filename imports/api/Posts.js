import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const Posts = new Mongo.Collection("Posts");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('posts', function postPublication() {
    return Posts.find();
  });
}

Meteor.methods({
    "Posts.insert"(post) {
    check(posts, object);
 
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
 
    Posts.insert(post);
  },{
        "Posts.animo"(postId){
            check(postId, String);
            if (! Meteor.userId()) {
                throw new Meteor.Error("not-authorized");
            }
            Posts.update(postId, {$inc:{animos : 1}});
      }
  },{
        "Posts.noGive"(postId){
            check(postId, String);
            if (! Meteor.userId()) {
                throw new Meteor.Error("not-authorized");
            }
            Posts.update(postId, {$inc:{nogive : 1}});
      }
  },{
        "Posts.better"(postId){
            check(postId, String);
            if (! Meteor.userId()) {
                throw new Meteor.Error("not-authorized");
            }
            Posts.update(postId, {$inc:{better : 1}});
      }
  }
});
