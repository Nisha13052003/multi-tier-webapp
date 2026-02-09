function getData() {
  fetch("http://localhost:3000/api")
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").innerText = data.message;
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
