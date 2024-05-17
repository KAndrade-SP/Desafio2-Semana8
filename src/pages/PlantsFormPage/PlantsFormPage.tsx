import { useRef, useState } from "react";
import {
  validName,
  validSubtitle,
  validFeatures,
  validDescription,
} from "./regex/RegexValidation";
import { PlantsType } from "./types/PlantsType";
import { PlantsError } from "./types/PlantsError";

const PlantsFormPage = () => {
  const [formData, setFormData] = useState<PlantsType>({
  plantName: "",
  plantSubtitle: "",
  price: 0,
  isInSale: false,
  discountPercentage: 0,
  plantLabel: [],
  features: "",
  description: "",
});

const plantNameRef = useRef<HTMLInputElement>(null);
const plantSubtitleRef = useRef<HTMLInputElement>(null);
const priceRef = useRef<HTMLInputElement>(null);
const isInSaleRef = useRef<HTMLInputElement>(null);
const discountPercentageRef = useRef<HTMLInputElement>(null);
const plantLabelRef = useRef<HTMLInputElement>(null);
const featuresRef = useRef<HTMLInputElement>(null);
const descriptionRef = useRef<HTMLInputElement>(null);

const [errors, setErrors] = useState<PlantsError>({ message: "", field: "" });
const [isInSale, setIsInSale] = useState(false)

const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  if (name === "plantLabel") {
    setFormData((prevFormData) => ({
      ...prevFormData,
      plantLabel: [...prevFormData.plantLabel, value],
    }));
  }
};

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  if (name === "plantLabel" || name === "plantRadioLabel") {
    setFormData((prevFormData) => ({
      ...prevFormData,
      plantLabel: [...prevFormData.plantLabel, value],
    }));
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

};

const validateForm = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  e.preventDefault();
  const plantNameValue = plantNameRef.current?.value || "";
  const plantSubtitleValue = plantSubtitleRef.current?.value || "";
  const priceValue = priceRef.current?.value || "";
  const discountPercentageValue = discountPercentageRef.current?.value;
  const plantLabelValue = plantLabelRef.current?.value || "";
  const featuresValue = featuresRef.current?.value || "";
  const descriptionValue = descriptionRef.current?.value || "";

  if (
    !plantNameValue ||
    !validName.test(plantNameValue) ||
    plantNameValue === ""
  ) {
    setErrors({
      message: `Plant name invalid: ${
        plantNameValue ? plantNameValue + "." : "This field is required."
      }`,
      field: "plantName",
    });
  } else if (
    !plantSubtitleValue ||
    !validSubtitle.test(plantSubtitleValue) ||
    plantSubtitleValue === ""
  ) {
    setErrors({
      message: `Plant subtitle invalid: ${
        plantSubtitleValue
          ? plantSubtitleValue + "."
          : "This field is required."
      }`,
      field: "plantSubtitle",
    });
  } else if (
    formData.plantLabel.length <= 1 ||
    formData.plantLabel.some((label) => label === "")
  ) {
    setErrors({
      message: `Plant label invalid: ${
        plantLabelValue ? plantLabelValue + "." : "This field is required."
      }`,
      field: "plantLabel",
    });
  } else if (!priceValue || priceValue === "") {
    setErrors({
      message: `Plant price invalid: ${
        priceValue ? priceValue + "." : "This field is required."
      }`,
      field: "price",
    }); 
  } 
else if (
    !featuresValue ||
    !validFeatures.test(featuresValue) ||
    featuresValue === ""
  ) {
    setErrors({
      message: `Plant features invalid: ${
        featuresValue ? featuresValue + "." : "This field is required."
      }`,
      field: "features",
    });
  } else if (
    !descriptionValue ||
    !validDescription.test(descriptionValue) ||
    descriptionValue === ""
  ) {
    setErrors({
      message: `Plant description invalid: ${
        descriptionValue ? descriptionValue + "." : "This field is required."
      }`,
      field: "description",
    });
  }

  if(discountPercentageValue?.trim() === '') {
    setIsInSale(false)
  }
  else {
    setIsInSale(true)
  }
  console.log(isInSale)
  console.log(discountPercentageValue)

  }

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
              <h1 className="">Plant registration</h1>
            </div>
            <form onSubmit={validateForm}>
              <div className="">
                <div>
                  <label className="">Plant name</label>
                  <br />
                  <input
                    className=""
                    type="text"
                    name="plantName"
                    placeholder="Echinocereus Cactus"
                    onChange={onChange}
                    ref={plantNameRef}
                  />
                  {errors && errors.field === "plantName" ? (
                    <span>{errors.message}</span>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <label>Plant subtitle</label>
                  <br />
                  <input
                    type="text"
                    name="plantSubtitle"
                    placeholder="A majestic addition to your plant collection"
                    onChange={onChange}
                    ref={plantSubtitleRef}
                  />
                  {errors && errors.field === "plantSubtitle" ? (
                    <span>{errors.message}</span>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <label>Plant type</label>
                  <br />
                  <input
                    type="text"
                    name="plantLabel"
                    placeholder="Cactus"
                    onBlur={onBlur}
                    ref={plantLabelRef}
                  />
                  {errors && errors.field === "plantLabel" ? (
                    <span>{errors.message}</span>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <div>
                    <label className="font-Inter-medium text-lg">Price</label>
                    <br />
                    <input
                      type="number"
                      name="price"
                      placeholder="$139.99"
                      onChange={onChange}
                      ref={priceRef}
                    />
                    {errors && errors.field === "price" ? (
                      <span>{errors.message}</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <label>Discount percentage</label>
                    <br />
                    <input
                      type="number"
                      name="discountPercentage"
                      placeholder="20%"
                      onChange={onChange}
                      ref={discountPercentageRef}
                    />
                    {errors && errors.field === "discountPercentage" ? (
                      <span>{errors.message}</span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div>
                  <label>Label: </label>
                  <div>
                    <div>
                      <div>
                        <input
                          type="radio"
                          name="plantRadioLabel"
                          onChange={onChange}
                          value="indoor"
                          ref={plantLabelRef}
                        />
                        <label>Indoor</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="plantRadioLabel"
                          onChange={onChange}
                          value="outdoor"
                          ref={plantLabelRef}
                        />
                        <label htmlFor="outdoor">Outdoor</label>
                      </div>
                    </div>
                  </div>
                  {errors && errors.field === "plantLabel" ? (
                    <span>{errors.message}</span>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <label>Features</label>
                  <br />
                  <input
                    type="text"
                    name="features"
                    placeholder="Species: Echinocereus..."
                    onChange={onChange}
                    ref={featuresRef}
                  />
                  {errors && errors.field === "features" ? (
                    <span>{errors.message}</span>
                  ) : (
                    ""
                  )}
                </div>

                <div>
                  <label>Description</label>
                  <br />
                  <input
                    type="text"
                    name="description"
                    placeholder="Ladyfinger cactus..."
                    onChange={onChange}
                    ref={descriptionRef}
                  />
                  {errors && errors.field === "description" ? (
                    <span>{errors.message}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <button type="submit">Register</button>
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
  )
};

export default PlantsFormPage;
