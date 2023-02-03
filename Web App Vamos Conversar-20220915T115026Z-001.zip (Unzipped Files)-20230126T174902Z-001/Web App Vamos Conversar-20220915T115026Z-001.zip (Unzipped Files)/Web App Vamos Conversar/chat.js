
const firebaseConfig = {
  apiKey: "AIzaSyAjliv99tWYOSoY7X9ATWe_5Oah3AYx3pk",
  authDomain: "kwisterpr001.firebaseapp.com",
  databaseURL: "https://kwisterpr001-default-rtdb.firebaseio.com",
  projectId: "kwisterpr001",
  storageBucket: "kwisterpr001.appspot.com",
  messagingSenderId: "519335195084",
  appId: "1:519335195084:web:3007ecbb617dae5442ad69",
  measurementId: "G-0E5QWZ19BL"
};
  
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "Adicionar Sala "
    });
    /*
    Armazene o nome de usuário em localStorage

    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
   localStorage.setItem('user_name',user_name)
   window.location='indexII.html'
}




