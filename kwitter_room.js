
var firebaseConfig = {
      apiKey: "AIzaSyBhMh6ZU2xrfHj6fvrQYksHQdz0kAkglIY",
      authDomain: "kwitter-2b2f0.firebaseapp.com",
      databaseURL: "https://kwitter-2b2f0-default-rtdb.firebaseio.com",
      projectId: "kwitter-2b2f0",
      storageBucket: "kwitter-2b2f0.appspot.com",
      messagingSenderId: "637252464873",
      appId: "1:637252464873:web:88835d328f7112641cc078"
    };

// Initialize Firebase( 
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      //window.location = "Kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
             snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_name = childKey;
                  console.log("roomname is "+Room_name);
                  row="<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+Room_name+"</div><hr>";
                  document.getElementById("output").innerHTML+=row; 

                  
            });
      });
}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";      
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}