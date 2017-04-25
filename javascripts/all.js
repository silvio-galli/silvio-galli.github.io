// This is where it all goes :)

//TODO add "thank you sender name" to modal window
//FIXME why "Please fill in this field" bootstrap error message do not appear

// on form submit stop default action and call validateForm
$(document).ready(function() {
  $(".submit").click(function(event) {
    event.preventDefault();
    validateForm();
  })
});


// validate presence of values in form input fields
function validateForm() {
  $(document).ready(function() {
    var list_input = [];
    // get a list of values from form fields
    $("form").find('textarea,input').each(function() {
      list_input.push( this.value.trim() )
    });
    // if all required values are set correctly
    // show a modal message to user and on
    // modal close send form
    if ( list_input.every( x => x !== "" ) ) {
      $("#my-modal").modal('show');
      $("#my-modal").on('hidden.bs.modal', function() {
        $("#contact-form").submit();
      });
    }
    // otherwise if one or more reuired fields are empty
    // sending is aborted
    else {
      return false;
    }
  });
}
