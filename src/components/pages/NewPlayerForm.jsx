import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import {addPl}

function NewPlayerForm() {
  const generateId = Math.round(Math.random() * 1000000000);
  console.log(generateId);

  const [form, setForm] = useState({
    id: generateId,
    name: "",
    breed: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="formWrapper">
        <form id="new-player-form" onSubmit={submit}>
          <input type="text" id="formName" name="name" placeholder="Name..." />
          <input
            type="text"
            id="formBreed"
            name="breed"
            placeholder="Breed..."
          />
          <input
            type="text"
            id="formImage"
            name="image"
            placeholder="Link to an image..."
          />
          <button type="submit" value="Submit" id="formSubmit">
            Add your dog
          </button>
        </form>
      </div>
    </>
  );
}

export default NewPlayerForm;
