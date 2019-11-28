function validateName() {
    var validName = false;
    var firstName = $('#first_name').val();
    var lastName = $('#last_name').val();

    if ((firstName != '') && (lastName != '')) {
        validName = true
    }

    return validName;
};

function validateEmail() {
    var validEmail = false;
    var validEmailFormat = /^[A-Za-z0-9.]{1,64}@[A-Za-z0-9.]{1,64}$/;
    var email = $('#email').val();

    if (validEmailFormat.test(email)) {
        validEmail = true;
    }

    return validEmail;
};

function validateCompany() {
    var validCompany = false;
    var company = $('#company_name').val();

    if (company != '') {
        validCompany = true;
    }
    return validCompany;
};

function validatePhone() {
    var validPhone = false;
    var phone = $('#phone').val();
    var validPhoneFormat = /^\d*[-\d]*\d*$/;

    if (validPhoneFormat.test(phone)) {
        var digitsOnlyPhone = phone.replace(/[^0-9]/g, "");
        if (digitsOnlyPhone.length >= 6) {
            validPhone = true;
        }
    }
    return validPhone;
};

function solution() {
    // write your code in JavaScript (Node.js 8.9.4)
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementById
    // or using jQuery:
    //    $('some_tag')
    //
    // you can write to stdout for debugging purposes, e.g.
    // console.log('this is a debug message');

    var valid = false;

    if ($('#type_person').is(':checked')) {
        if (validateName() && validateEmail()) {
            valid = true
        }
    } else if ($('#type_company').is(':checked')) {
        if (validateCompany() && validatePhone()) {
            valid = true;
        }
    }

    return valid;
}