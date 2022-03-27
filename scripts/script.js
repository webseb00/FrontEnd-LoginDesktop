$(document).ready(function() {
  // handle login tooltip
  $('#icon-password').mouseover(function() {
    passwordTooltip = new bootstrap.Tooltip($(this));
    passwordTooltip.show();
  })

  // handle user login
  $('#submit-btn').click(function(e) {
    const loader = `<div class="spinner-border text-white" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>`;

    $(this).html(`<div class="login__spinner d-flex align-items-center">${loader}</div>`);
    
    setTimeout(() => {
      const toast = new bootstrap.Toast($('#login-toast'));
      toast.show();

      $(this).text(`Zaloguj się`);
    }, 3000);
  })
})