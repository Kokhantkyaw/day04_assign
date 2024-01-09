function validateForm(){
                let first_name = document.getElementById("first_name");
                let last_name = document.getElementById("last_name");
                let user_id = document.getElementById("user_id");
                let email = document.getElementById("email");
                let password= document.getElementById("password");
                let confirm_password= document.getElementById("confirm_password");
                if(first_name.value == null || first_name.value == ""){
                    document.getElementById("first_name_warning").style.display="block";
                }
                else{
                    document.getElementById("first_name_warning").style.display="none";
                }
                if(last_name.value == null || last_name.value == ""){
                    document.getElementById("last_name_warning").style.display="block";
                }
                else{
                    document.getElementById("last_name_warning").style.display="none";
                }
                if(user_id.value == null || user_id.value == ""){
                    document.getElementById("user_id_warning").style.display="block";
                }
                else{
                    document.getElementById("user_id_warning").style.display="none";
                }
                if(email.value == null || email.value == ""){
                    document.getElementById("email_warning").style.display="block";
                }
                else{
                    document.getElementById("email_warning").style.display="none";
                }
                if(password.value == null || password.value == ""){
                    document.getElementById("password_warning").style.display="block";
                }
                else{
                    document.getElementById("password_warning").style.display="none";
                }
                if(confirm_password.value == null || confirm_password.value == ""){
                    document.getElementById("confirm_password_warning").style.display="block";
                }
                else{
                    document.getElementById("confirm_password_warning").style.display="none";
                }
            }