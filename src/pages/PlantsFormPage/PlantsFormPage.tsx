const PlantsFormPage = () => {
  return (
    <html>
      <body className="bg-lightgray min-h-screen ">
        <header>
          <p>header</p>
        </header>

        <main>
          <p>main</p>
          <div className="grid grid-cols-2">
            <div>
              <div>
                <h1 className="font-inter-semibold text-2xl text-lunargreen">
                  Plant registration
                </h1>
              </div>
              <form>
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <label htmlFor="name" className="font-Inter-medium text-lg">
                      Plant name
                    </label>
                    <br />
                    <input
                      className="py-1.5 rounded-md max-w-100"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Echinocereus Cactus"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subtitle"
                      className="font-Inter-medium text-lg"
                    >
                      Plant subtitle
                    </label>
                    <br />
                    <input
                      type="text"
                      name="subtitle"
                      id="subtitle"
                      placeholder="A majestic addition to your plant collection"
                    />
                  </div>

                  <div>
                    <label htmlFor="type" className="font-Inter-medium text-lg">
                      Plant type
                    </label>
                    <br />
                    <input
                      type="text"
                      name="type"
                      id="type"
                      placeholder="Cactus"
                    />
                  </div>

                  <div className="flex flex-row max-w-100">
                    <div>
                      <label
                        htmlFor="price"
                        className="font-Inter-medium text-lg"
                      >
                        Price
                      </label>
                      <br />
                      <input
                        type="number"
                        name="price"
                        id="price"
                        placeholder="$139.99"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="discountPercentage"
                        className="font-Inter-medium text-lg"
                      >
                        Discount percentage
                      </label>
                      <br />
                      <input
                        type="number"
                        name="discountPercentage"
                        id="discountPercentage"
                        placeholder="20%"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="label"
                      className="font-Inter-medium text-lg"
                    >
                      Label:{" "}
                    </label>
                    <div>
                      <div className="flex flex-row max-w-xl gap-3 justify-center items-center">
                        <div className=" font-Inter-medium text-base flex flex-row max-w-xl gap-1 justify-center items-center">
                          <input type="checkbox" name="label" id="label" />
                          <label htmlFor="indoor" defaultChecked>
                            Indoor
                          </label>
                        </div>
                        <div className=" font-Inter-medium text-base flex flex-row max-w-xl gap-1 justify-center items-center">
                          <input type="checkbox" name="label" id="label" />
                          <label htmlFor="outdoor">Outdoor</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="features"
                      className="font-Inter-medium text-lg"
                    >
                      Features
                    </label>
                    <br />
                    <input
                      type="text"
                      name="features"
                      id="features"
                      placeholder="Species: Echinocereus..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="font-Inter-medium text-lg"
                    >
                      Description
                    </label>
                    <br />
                    <input
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Ladyfinger cactus..."
                    />
                  </div>
                </div>
                <button>Register</button>
              </form>
            </div>
            <div>image</div>
          </div>
        </main>

        <footer>
          <p>footer</p>
        </footer>
      </body>
    </html>
  );
};

export default PlantsFormPage;
