document.addEventListener("DOMContentLoaded", function () {
  const addGameForm = document.getElementById("addGameForm");
  addGameForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addGame();
  });
});

const addGame = async () => {
  const stock = document.getElementById("gameStock").value;
  const name = document.getElementById("gameTitle").value;
  const price = document.getElementById("gamePrice").value;
  const status = document.getElementById("gameStock").value;
  const category = document.getElementById("gameGenre").value;
  const platform = document.getElementById("gamePlatform").value;
  const dateRelease = document.getElementById("gameReleaseDate").value;
  const description = document.getElementById("gameDescription").value;

  const data = {
    name,
    price,
    platform,
    dateRelease,
    status,
    stock,
    category,
    description,
  };

  const response = await fetch(
    "http://localhost:3000/api/v1/product/add_new_game",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (response.status === 201) {
    alert("Game added successfully");
  } else {
    alert("An error occurred");
  }
};




const addCart = async (id) => {
  const idCarrito = "66c6ac35248b54c3ce3495d6";
  const quantity = document.getElementById(id).value;
  
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/carrito/${idCarrito}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: id,
          quantity: quantity || 1,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Error adding product to cart");
    }

    const data = await response.json();
    // Handle successful response
    console.log(data);
    alert("Product added to cart");
  } catch (error) {
    console.log(error);
    alert("An error occurred");
  }
};
