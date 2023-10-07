async function modify() {
  let data = "";
  var response = await fetch('./data/data.json');
  var body = await response.json()
  console.log(body.data[1].question)
  for (let i = 0; i < body.data.length; i++) {
    data += `
     <article class="card">
        <h1 class="front">${body.data[i].question} ${i + 1.}</h1>
        <p class="back">
          ${body.data[i].answer}
        </p>
      </article>`;
  }

  document.getElementById("mainContainer").innerHTML = data;
}

modify();

/* || focus on hover */
var inputField = document.getElementById('question');

inputField.addEventListener('mouseover', function() {
    inputField.focus();
});
