function addSala(){
    var nomeSala=document.getElementById('iptsala').value
    localStorage.setItem('nomeSala',nomeSala)

    firebase.database().ref("/").child(nomeSala).update({
        purpose : "Adicionar Sala "
    });
    document.getElementById('output').innerHTML=nomeSala
}




  function sair(){
    localStorage.removeItem("userName")
    localStorage.removeItem("roomName")
    window.location= "index.html"
  }
  function carregar(){
    var nome1=localStorage.getItem('userName');
    document.getElementById('userName').innerHTML='SEJA BEM VINDO(A)'+nome1;
  }