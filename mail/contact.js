$(function () {

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            // Construct mailto link
            var targetEmail = "chinmoykumardas37@gmail.com";
            var mailtoLink = "mailto:" + targetEmail +
                "?subject=" + encodeURIComponent(subject + " : " + name) +
                "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append("</button>");
            $('#success > .alert-success')
                .append("<strong>Opening your email client to send the message...</strong>");
            $('#success > .alert-success')
                .append('</div>');
            $('#contactForm').trigger("reset");

            setTimeout(function () {
                $this.prop("disabled", false);
            }, 1000);
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
