import { useState } from "react";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
        placeholder="Enter your title"
      ></input>
      <br />
      <input
        type="text"
        placeholder="Enter your description"
        onChange={function (e) {
          setDescription(e.target.value);
        }}
      ></input>
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
             "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo created");
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}

export default CreateTodo;
