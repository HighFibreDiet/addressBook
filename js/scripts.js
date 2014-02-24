var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAddress = $("input#new-address").val();
    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;
    newContact.address = inputtedAddress;

    
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#contact-display").show();

      $("#update-contact h2").text(newContact.fullName());
      $("#contact-display h2").text(newContact.fullName());
      $("#existing-first-name").text(newContact.firstName);
      $("#existing-last-name").text(newContact.lastName);
      $("#existing-address").text(newContact.address);

      this.reset();
    });

    $("button#update-button").click(function() {
      $("#contact-display").toggle();
      $("#update-contact").toggle();

      $("input#edit-first-name").val(newContact.firstName);
      $("input#edit-last-name").val(newContact.lastName);
      $("input#edit-address").val(newContact.address);
    });

    $("form#edit-contact").submit(function(event) {
      event.preventDefault();

      newContact.firstName = $("input#edit-first-name").val();
      newContact.lastName = $("input#edit-last-name").val();
      newContact.address = $("input#edit-address").val();
      $("#existing-first-name").text(newContact.firstName);
      $("#existing-last-name").text(newContact.lastName);
      $("#existing-address").text(newContact.address);      

      $("#contact-display").toggle();
      $("#update-contact").toggle();

      this.reset();
    });

  });
});
  
