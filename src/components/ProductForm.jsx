import { useState } from "react";

function ProductForm() {
  const [nameInput, setNameInput] = useState("");
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  return (
    <form className="post-form">
      <h1>Create Product Form</h1>

      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={nameInput}
            onChange={(event) => {
              setNameInput(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={imageUrlInput}
            onChange={(event) => {
              setImageUrlInput(event.target.value);
              console.log(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={priceInput}
            onChange={(event) => {
              setPriceInput(event.target.value);

              console.log(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={descriptionInput}
            onChange={(event) => {
              setDescriptionInput(event.target.value);
              console.log(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button
          type="submit"
          onClick={() => {
            let objectData = {};
            objectData.name = nameInput;
            objectData.price = priceInput;
            objectData.imageUrl = imageUrlInput;
            objectData.description = descriptionInput;
            console.log(objectData);
            alert(JSON.stringify(objectData));
          }}
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
