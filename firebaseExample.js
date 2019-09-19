return Promise.resolve().then(function () {

const firebase = require('firebase');
var rootRef;
var firebaseConfig = {
    apiKey: "AIzaSyB7v7x-5unGh0fJCzLBERz7WFWWb1i7Dt0",
    authDomain: "practisefirebase-859df.firebaseapp.com",
    databaseURL: "https://mailreader-e3e0e.firebaseio.com",
    projectId: "practisefirebase-859df",
    storageBucket: "",
    messagingSenderId: "713751283706",
    appId: "1:713751283706:web:f4492bd0bdd585da030643"
  };
 firebase.initializeApp(firebaseConfig)
	rootRef = firebase.database().ref();
	return rootRef.once("value").then(function(snapshot) {
        console.log(snapshot.val())
  }).then(function () {
        rootRef = firebase.database().ref("/user2");
        rootRef.push({'userj': {'firstname':'peeyush','lastname':'jain'}}, function (err) {
            console.log(err+"ddd")
        })
    }).then(function () {
        rootRef = firebase.database().ref("/user2");
        rootRef.push({'user444': {'firstname':'achal','lastname':'jain'}}, function (err) {
            console.log(err+"ddd")
        })
    }).then(function () {
        rootRef = firebase.database().ref("/user2");
        rootRef.push({'userggg': {'firstname':'himanshu','lastname':'jain'}}, function (err) {
            console.log(err+"ddd")
        })
    }).then(function () {
        rootRef = firebase.database().ref();
        return rootRef.once("value").then(function(snapshot) {
            console.log(snapshot.val())
        })
    })
})