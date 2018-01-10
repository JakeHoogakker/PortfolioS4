
    $(function() {


   var people = [];

   $.getJSON('client_id.json', function(data) {
       $.each(data.person, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.client_id + "</td>" +
           "<td>" + f.project_id + "</td>" + "<td>" + f.auth_uri + "</td>" + "<td>" + f.token_uri + "</td>" + "<td>" + f.auth_provider_x509_cert_url + "</td>" + "<td>" + f.client_secret + "</td>" + "<td>" + f.redirect_uris + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata tbody");
     });

   });

});

    
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '239294603273367',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
    });
      
    FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    var accessToken = response.authResponse.accessToken;
}); 
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
    
function statusChangeCallback(response)
    {
        if (response.status === "connected"){
            console.log('logged in');
        }
        else{
            console.log('not logged in');
            
    
        }
    }

    
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
      
      FB.api('/me', {fields: 'name, picture, age_range, context, cover, devices, email, installed, link, locale, short_name, third_party_id, updated_time, verified'}, function(response) {
  console.log(response);
      
      });
        
    
  });
}
    
function logout(){
    FB.logout(function(){
        console.log("logged out");
    })
    
}

//html elements


 function appendText() {
     FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
      
      FB.api('/me', {fields: 'name, picture, age_range, context, cover, devices, email, installed, link, locale, short_name, third_party_id, updated_time, verified'}, function(response) {
  console.log(response);
      
      });
        
    
  });
    var txt1 = "<button type='button' onclick='logout()'>log out</button>";               // Create element with HTML  
    var txt2 = "<fb:login-button scope='public_profile' onlogin='checkLoginState();'> </fb:login-button>";   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text.";
    $("body").append(txt1, txt2, response);      // Append the new elements 
}