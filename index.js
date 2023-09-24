function printError(element_id,err_msg)
{
    document.getElementById(element_id).innerHTML = err_msg;
}
function validateForm()
{   
    //retrieving the values of form element
    var name = document.reg_form.name.value;
    var email = document.reg_form.email.value;
    var moNum = document.reg_form.mo_num.value;
    var country = document.reg_form.country.value;
    var gender = document.reg_form.gender.value;
    var password = document.reg_form.password.value;
    var cpassword = document.reg_form.c_password.value;

    var hobbies = [];
    var checkbox  = document.getElementsByName("hobbies[]");
    for (var i=0 ;i<checkbox.length;i++) 
    {
        if(checkbox[i].checked)
        {
            hobbies.push(checkbox[i].value);
        }
    }

    //defining error variables with default value
    var err_name = err_email = err_mo_num = err_country = err_gender = true;
    var err_password = true;
    var err_cpassword = true;

    //validate name
    if(name == "")
    {
        printError("err_name", "Please enter your name");
    }
    else
    {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false)
        {
            printError("err_name", "please enter characters only");
        }
        else
        {
            printError("err_name", "")
            err_name = false;
        }
    }

    //validate email id
    if(email == "")
    {
        printError("err_email", "please enter your E-mail Id");
    }
    else
    {
        //Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false)
        {
            printError("err_email", "please enter valid Email Id")
        }
        else
        {
            printError("err_email", "");
            err_email = false;
        }
    }

    //validate Mobile Number
    if(moNum == "")
    {
        printError("err_mo_num", "please enter your Mobile Number");
    }
    else
    {
        //Regular expression for basic email validation
        var regex = /^[1-9\d{9}$]/;
        if(regex.test(moNum) === false)
        {
            printError("err_mo_num", "please enter a valid 10 digit mobile number");
        }
        else
        {
            printError("err_mo_num", "");
            err_mo_num = false;
        }
    }

    //validate country
    if(country == "Select")
    {
        printError("err_country", "please Select your country");
    }
    else
    {
        printError("err_country", "");
        err_country = false;
    }

    //validate gender
    if(gender == "")
    {
        printError("err_gender", "please Select your Gender");
    }
    else
    {
        printError("err_gender", "");
        err_gender = false;
    }

    //validate password
    if(password == "")
    {
        printError("err_password", "Password is required");
    }
    else if(password.length < 8)
    {
        printError("err_password", "password must be atleast 8 characters.");
    }
    else
    {
        printError("err_password", "")
        err_password = false;
    }

    if(password == "")
    {
        printError("err_cpassword", "Please Confirm your password");
    }
    else if(cpassword !== password)
    {
        printError("err_cpassword", "password doesn't match");
    }
    else
    {
        printError("err_cpassword", "")
        err_cpassword = false;
    }

    // Prevent the form from being submitted if there are any errors
    if((err_name || err_email || err_mo_num || err_country || err_gender || err_password || err_cpassword) == true)
    {
        return false;
    }
    else
    {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details : \n" + 
        "Full name : " + name + "\n" +
        "Email-Id : " + email + "\n" +
        "Mobile Number : " + moNum + "\n" +
        "Country : " + country + "\n" +
        "Gender : " + gender + "\n" +
        "password : " +password + "\n";
        if(hobbies.length)
        {
            dataPreview += "Hobbies: " +hobbies.join(", ");
        }
        //displaying input data in a dialog box before submittinf the form
        window.alert(dataPreview);
        return true;
    }

}