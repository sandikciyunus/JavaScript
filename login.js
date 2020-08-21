function login(){
    var eposta=document.getElementById("eposta").value;
    var sifre=document.getElementById("sifre").value;

    if(eposta=="e.yunussandikcii@gmail.com" && sifre=="123456"){
        document.getElementById("container").innerHTML="Giriş başarılı"
    }
    else{
        document.getElementById("container").innerHTML="Lütfen giriş kriterlerinizi kontrol edin"
    }
}