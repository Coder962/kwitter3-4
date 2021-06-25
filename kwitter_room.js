
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyALtwu8o5BYubIlHSt9znJJC8rHze4HFTE",
      authDomain: "kwitter-9e107.firebaseapp.com",
      projectId: "kwitter-9e107",
      storageBucket: "kwitter-9e107.appspot.com",
      messagingSenderId: "766067234807",
      appId: "1:766067234807:web:86c17fb6228c094140c0f2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom () {
      room_name = document.getElementById("room_name").value;
  
      firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
      });
      localStorage.setItem("room_name" , room_name)
      window.location = "kwitter_page.html"
  }  
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_Names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}