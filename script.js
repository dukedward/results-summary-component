const fieldColors = {
  Reaction: { bg: "#FFF6F5", color: "#FF5757", id: "reaction" },
  Memory:   { bg: "#FFFBF2", color: "#FFB21E", id: "memory" },
  Verbal:   { bg: "#F2FBFA", color: "#00BB8F", id: "verbal" },
  Visual:   { bg: "#F3F3FD", color: "#1125D6", id: "visual" }
};

fetch("./data.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("summary-list");
    list.innerHTML = ""; // clear any static markup

    data.forEach(item => {
      const styles = fieldColors[item.category];

      const listItem = document.createElement("li");
      listItem.className = "summary-item";
      listItem.id = styles.id;
      listItem.style.backgroundColor = styles.bg;

      listItem.innerHTML = `
        <div class="summary-name">
          <img class="summary-icon" src="${item.icon}" alt="${item.category}">
          <p style="color:${styles.color};">${item.category}</p>
        </div>
        <p>
          ${item.score}
          <span style="color:#7D889E;"> / 100</span>
        </p>
      `;

      list.appendChild(listItem);
    });
  })
  .catch(err => console.error("Failed to load summary data:", err));
