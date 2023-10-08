async function modify() {
  let html = "";
  const data = JSON.parse(localStorage.getItem("quickMemo"));
  for (let i = 0; i < data.length; i++) {
    html += `
     <article class="card">
        <h1 class="front">${data[i].question}</h1>
        <p class="back">
          ${data[i].answer}
        </p>
      </article>`;
  }

  document.getElementById("mainContainer").innerHTML = html;
}

function addQuestionListener() {
  const question = document.getElementsByClassName("questionCard")[0];
  const addImage = document.getElementById("addImage");
  const dataFieldSet = document.getElementById("data__fieldset");

  question.addEventListener("mouseover", function (e) {
    e.preventDefault();
    question.classList.add("questionCardHover");
    setTimeout(function () {
      addImage.style.display = "none";
      dataFieldSet.style.display = "block";
    }, 1000);
  });
}

function addItem() {
  const questionAdd = document.getElementById("question");
  const answer = document.getElementById("answer");
  const addButton = document.getElementById("submit");

  addButton.addEventListener("click", function () {
    let list = [];
    var HTMLdata = {
      question: questionAdd.value,
      answer: answer.value,
    };
    const data = localStorage.getItem("quickMemo");
    const id = localStorage.getItem("counter");
    if (id) {
      const num = parseInt(id);
      localStorage.setItem("counter", num + 1);
    } else {
      localStorage.setItem("counter", 1);
    }
    if (data) {
      const allData = JSON.parse(data);
      list = [...allData, HTMLdata];
    } else {
      list.push(HTMLdata);
    }
    localStorage.setItem("quickMemo", JSON.stringify(list));
    const question = document.getElementsByClassName("questionCard")[0];
    console.log("KINNIaddButton", question);
    question.classList.remove("questionCardHover");
    window.location.reload();
  });
  // Remove the class questionCardHover
}

modify();
addQuestionListener();
addItem();
