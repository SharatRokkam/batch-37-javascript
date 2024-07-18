document.addEventListener("DOMContentLoaded", () => {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector("#table-data tbody");

      data.forEach((post) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = post.id;
        row.appendChild(idCell);

        const titleCell = document.createElement("td");
        titleCell.textContent = post.title;
        row.appendChild(titleCell);

        const completedCell = document.createElement("td");
        completedCell.textContent = post.completed;
        row.appendChild(completedCell);

        tableBody.appendChild(row);
      });
    });
});
