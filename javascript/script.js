function modify() {
  let html = "";
  const data =
    JSON.parse(localStorage.getItem("quickMemo"));


  if (!data || data.length == 0) {
    const fText = 'Welcome to QuickMemo!<br><br>Hover to learn more'
    const bText = ''
    html += `
     <article class="card">
        <div class="front"><h1>${fText}</h1></div>
        <div class="back">${bText}<p> hi </p></div>
      </article>`;
  }
  else {
    for (let i = 0; i < data.length; i++) {
      html += `
     <article class="card">
        <div class = "front"><h1>${data[i].question}</h1></div>
        <div class="back"><p>
          ${data[i].answer}
        </p></div>
        <button class = "card__button" id = "delete" onclick="deleteItem(${data[i].id})"> Delete </button>
      </article>`;
    }
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

    if (questionAdd.value == 0 || answer.value == 0) {
      alert("Kya kar rha hai bhai tu, value to de")
      return;
    }

    let list = [];
    const id = localStorage.getItem("counter");
    if (id) {
      const num = parseInt(id);
      localStorage.setItem("counter", num + 1);
    } else {
      localStorage.setItem("counter", 1);
    }
    const newId = localStorage.getItem("counter");
    const newNum = parseInt(newId)

    var HTMLdata = {
      question: questionAdd.value,
      answer: answer.value,
      id: newNum
    };
    const data = localStorage.getItem("quickMemo");
    if (data) {
      const allData = JSON.parse(data);
      list = [...allData, HTMLdata];
    } else {
      list.push(HTMLdata);
    }
    localStorage.setItem("quickMemo", JSON.stringify(list));
    const question = document.getElementsByClassName("questionCard")[0];

    question.classList.remove("questionCardHover");
    window.location.reload();
  });
  // Remove the class questionCardHover
}

function deleteItem(id) {
  console.log(localStorage.getItem("quickMemo"));
  const data = JSON.parse(localStorage.getItem("quickMemo"))
  const newList = data.filter((d) => d.id != id);
  localStorage.setItem("quickMemo", JSON.stringify(newList));

  window.location.reload();
}

modify();
addQuestionListener();
addItem();
