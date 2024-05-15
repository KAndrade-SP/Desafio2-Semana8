import { useState } from "react";

const PlantsFormPage = () => {
  const [values, setValues] = useState({
    plantName: "",
    plantSubtitle: "",
    plantEspecies: "",
    price: "",
    discountPercentage: "",
    plantLabel: "",
    features: "",
    description: "",
  });

  const validateForm = (e) => {
    e.preventDefault();
    // if(values.description == '')
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
    console.log(e.target.name);
  };

  return (
    <html>
      <body className="bg-lightgray min-w-screen ">
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
                    <label className="font-Inter-medium text-lg">
                      Plant name
                    </label>
                    <br />
                    <input
                      className="py-1.5 rounded-md max-w-100"
                      type="text"
                      name="plantName"
                      placeholder="Echinocereus Cactus"
                      onChange={onChange}
                      //onFocus={validateForm}
                    />
                  </div>

                  <div>
                    <label
                      className="font-Inter-medium text-lg"
                    >
                      Plant subtitle
                    </label>
                    <br />
                    <input
                      type="text"
                      name="plantSubtitle"
                      placeholder="A majestic addition to your plant collection"
                      onChange={onChange}
                    />
                  </div>

                  <div>
                    <label className="font-Inter-medium text-lg">
                      Plant type
                    </label>
                    <br />
                    <input
                      type="text"
                      name="plantEspecies"
                      placeholder="Cactus"
                      onChange={onChange}
                    />
                  </div>

                  <div className="flex flex-row max-w-100">
                    <div>
                      <label
                        className="font-Inter-medium text-lg"
                      >
                        Price
                      </label>
                      <br />
                      <input
                        type="number"
                        name="price"
                        placeholder="$139.99"
                        onChange={onChange}
                      />
                    </div>
                    <div>
                      <label
                        className="font-Inter-medium text-lg"
                      >
                        Discount percentage
                      </label>
                      <br />
                      <input
                        type="number"
                        name="discountPercentage"
                        placeholder="20%"
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="font-Inter-medium text-lg"
                    >
                      Label:{" "}
                    </label>
                    <div>
                      <div className="flex flex-row max-w-xl gap-3 justify-center items-center">
                        <div className=" font-Inter-medium text-base flex flex-row max-w-xl gap-1 justify-center items-center">
                          <input type="checkbox" name="plantLabel"/>
                          <label defaultChecked>
                            Indoor
                          </label>
                        </div>
                        <div className="font-Inter-medium text-base flex flex-row max-w-xl gap-1 justify-center items-center">
                          <input type="checkbox" name="plantLabel" />
                          <label htmlFor="outdoor">Outdoor</label>
                          onChange={onChange}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      className="font-Inter-medium text-lg"
                    >
                      Features
                    </label>
                    <br />
                    <input
                      type="text"
                      name="features"
                      placeholder="Species: Echinocereus..."
                      onChange={onChange}
                    />
                  </div>

                  <div>
                    <label
                      className="font-Inter-medium text-lg"
                    >
                      Description
                    </label>
                    <br />
                    <input
                      type="text"
                      name="description"
                      placeholder="Ladyfinger cactus..."
                      onChange={onChange}
                    />
                  </div>
                </div>
                <button onClick={validateForm}>Register</button>
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
