async function modify() {
  let data = "";
  var response = await fetch("./data/data.json");
  var body = await response.json();
  console.log(body.data[1].question);
  for (let i = 0; i < body.data.length; i++) {
    data += `
     <article class="card">
        <h1 class="front">${body.data[i].question} ${i + 1}</h1>
        <p class="back">
          ${body.data[i].answer}
        </p>
      </article>`;
  }

  document.getElementById("mainContainer").innerHTML = data;
}

function addQuestionListener() {
  const question = document.getElementsByClassName("questionCard")[0];
  console.log(question);

  question.addEventListener("mouseover", function (e) {
    e.preventDefault();
    question.classList.add("questionCardHover");
    console.log("Enter");
  });
}

function addItem() {
  //TODO: code to add item

  // Remove the class questionCardHover
  const question = document.getElementsByClassName("questionCard")[0];
  question.classList.remove("questionCardHover");
}

modify();
addQuestionListener();
