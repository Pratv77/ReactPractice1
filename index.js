import React from "react"

const page = (
  <div>
      <h1>My awesome website in React</h1>
      <h3>Reasons I love React</h3>
      <ol>
          <li>It's composable</li>
          <li>It's declarative</li>
          <li>It's a hireable skill</li>
          <li>It's actively maintained by skilled people</li>
      </ol>
  </div>
)

document.getElementById("root").append(JSON.stringify(page))