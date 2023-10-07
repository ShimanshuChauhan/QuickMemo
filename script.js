function modify() {
  let data = "";

  for (let i = 0; i < 10; i++) {
    data += `
     <article class="card">
        <h1 class="front">Question ${i+1}</h1>
        <p class="back">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia facere
          ex sint excepturi ullam laboriosam dolorum cumque modi officiis sequi
          omnis, repudiandae, a mollitia vero magni iure hic. Earum, nisi!
        </p>
      </article>`;
  }

  document.getElementById("mainContainer").innerHTML = data;
}

modify();
