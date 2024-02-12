let input = document.getElementById("search");

function isValidUrl(url) {
  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  const regex = new RegExp(expression);

  if (url.match(regex)) {
    return true;
  } else {
    return false;
  }
}

input.addEventListener("keyup", function (event) {
  // if the user presses the enter key, redirect to the search page
  if (event.key == "Enter") {
    let value = input.value;
    if (isValidUrl(value)) {
      // check if starts  witth https if not prepend https
      if (value.startsWith("http") || value.startsWith("https")) {
        window.location.href = value;
      } else {
        window.location.href = "https://" + value;
      }
    } else {
      window.location.href =
        "https://www.bing.com/search?q=" + encodeURIComponent(value);
    }
  }
});
