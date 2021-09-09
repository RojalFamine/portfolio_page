// Contact form functionality 

jQuery(document).ready(function() {
     
    /*
        Fullscreen background
    */
    
     
    /*
    Contact form
    */
    $('.contact-me form input[type="text"], .contact-me form textarea').on('focus', function() {
        $('.contact-me form input[type="text"], .contact-me form textarea').removeClass('input-error');
    });
    $('.contact-me form').submit(function(e) {
        e.preventDefault();
        $('.contact-me form input[type="text"], .contact-me form textarea').removeClass('input-error');
        var postdata = $('.contact-me form').serialize();
        $.ajax({
            type: 'POST',
            url: 'https://skola-comment.000webhostapp.com/contact.php',
            data: postdata,
            dataType: 'json',
            success: function(json) {
				if(json.nameMessage != '') {
                    $('.contact-me form .contact-name').addClass('input-error');
                }
                if(json.emailMessage != '') {
                    $('.contact-me form .contact-email').addClass('input-error');
                }
                if(json.subjectMessage != '') {
                    $('.contact-me form .contact-subject').addClass('input-error');
                }
                if(json.messageMessage != '') {
                    $('.contact-me form textarea').addClass('input-error');
                }
                if(json.antispamMessage != '') {
                    $('.contact-me form .contact-antispam').addClass('input-error');
                }
                if(json.nameMessage == '' && json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '' && json.antispamMessage == '') {
                    $('.contact-me form').fadeOut('fast', function() {
                        $('.contact-me').append('<p>Thanks for contacting us! We will get back to you very soon.</p>');
                        
                    });
                }
            }
        });
    });
     
});