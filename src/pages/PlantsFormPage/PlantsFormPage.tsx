const PlantsFormPage = () => {
  return (
    <div className="flex flex-col col-span-1 border-red-950">
      <div>
        <h1>Plant registration</h1>
      </div>
      <form>
        <div className="flex flex-col items-start border-2 border-red-950 max-w-lg">
          <label htmlFor="name" className="font-medium text-lg">
            Plant name
          </label>
          <input
            className="py-1.5 rounded-md max-w-100"
            type="text"
            name="name"
            id="name"
            placeholder="Echinocereus Cactus"
          />

          <label htmlFor="subtitle" className="font-medium text-lg">
            Plant subtitle
          </label>
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            placeholder="A majestic addition to your plant collection"
          />

          <label htmlFor="type" className="font-medium text-lg">
            Plant type
          </label>
          <input type="text" name="type" id="type" placeholder="Cactus" />

          <div className="flex flex-row max-w-100">
            <label htmlFor="price" className="font-medium text-lg">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="$139.99"
            />
            <label htmlFor="discountPercentage" className="font-medium text-lg">
              Discount percentage
            </label>
            <input
              type="number"
              name="discountPercentage"
              id="discountPercentage"
              placeholder="20%"
            />
          </div>

          <label htmlFor="label" className="font-medium text-lg">
            Label:{" "}
          </label>
          <input type="checkbox" name="label" id="label" />
          <label htmlFor="indoor" defaultChecked>
            Indoor
          </label>
          <input type="checkbox" name="label" id="label" />
          <label htmlFor="outdoor">Outdoor</label>

          <label htmlFor="features" className="font-medium text-lg">
            Features
          </label>
          <input
            type="text"
            name="features"
            id="features"
            placeholder="Species: Echinocereus..."
          />

          <label htmlFor="description" className="font-medium text-lg">
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Ladyfinger cactus..."
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default PlantsFormPage;
