(function () {
  /** @var {array} labels for the comments controls checkboxes */
  var labels = [
    'All',
    'To Do',
    'To Approve',
  ];

  /** @var {string} html for the comments controls checkboxes */
  var checkboxes = labels.reduce(function (last, current) {
    return last + checkbox(current, current == 'All');
  }, '');

  /**
   * Creates a checkbox div for the comments controls sidebar.
   *
   * @param {string} The label and value for the checkbox.
   */
  function checkbox(label, checked) {
    return '' +
      '<div>' +
        '<label>' +
          '<input ' +
            'type="radio" ' +
            'name="comments" ' +
            'value="' + label + '" ' +
            (checked ? ' checked' : '') +
          '>' +
          label
        '</label>' +
      '</div>';
  }

  /**
   * Provides the name of the user currently signed into Github.
   *
   * @return {string} the Github username.
   */
  function getUserName() {
    return $('.header-nav-current-user').text()
      .replace('Signed in as', '').trim();
  }

  /**
   * Builds the sidebar widget for showing/hiding various comments.
   */
  function buildCommentsControls() {
    $('.discussion-sidebar-item:last-child').after(
      '<div id="github-comments-controls" class="discussion-sidebar-item">' +
        '<div class="participation">' +
          '<h3 class="discussion-sidebar-heading">Discussions</h3>' +
          '<div class="participation-avatars">' + checkboxes + '</div>' +
        '</div>' +
      '</div>'
    );

    $( "#github-comments-controls" ).on("change", "input", function( event ) {
        console.log('change event detected');
        console.log( $( this ).val() );
    });
  }

  buildCommentsControls();
})();
