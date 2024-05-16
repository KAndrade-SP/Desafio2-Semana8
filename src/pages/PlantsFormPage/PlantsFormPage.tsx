import { useRef, useState } from "react";
import {validName, validSubtitle, validPrice, validLabel, validFeatures, validDescription} from './RegexValidation'
import { PlantsType } from "./PlantsType";
import { PlantsError } from "./PlantsError";

const PlantsFormPage = () => {
  
  const [formData, setFormData] = useState <PlantsType>({plantName: "",plantSubtitle:"", price: 0.00, isInSale: Boolean, discountPercentage: 0, plantLabel: ["", ""], features: "", description: ""})
  console.log(formData)

  const plantNameRef = useRef<HTMLInputElement>(null); 
  const plantSubtitleRef = useRef<HTMLInputElement>(null);  
  const priceRef = useRef<HTMLInputElement>(null); 
  const discountPercentageRef = useRef<HTMLInputElement>(null); 
  const plantLabelRef = useRef<HTMLInputElement>(null); 
  const featuresRef = useRef<HTMLInputElement>(null); 
  const descriptionRef = useRef<HTMLInputElement>(null); 


  const [errors, setErrors] = useState<PlantsError>({plantName: "",plantSubtitle:"", price: 0.00, isInSale: Boolean, discountPercentage: 0, plantLabel: ["", ""], features: "", description: ""})

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  

  const validateForm = (e) => {
    e.preventDefault();
    const plantNameValue = plantNameRef.current?.value || '';
    const plantSubtitleValue = plantSubtitleRef.current?.value || '';
    const priceValue = priceRef.current?.value || '';
    const discountPercentageValue = discountPercentageRef.current?.value || '';
    const plantLabelValue = plantLabelRef.current?.value || '';
    const featuresValue = featuresRef.current?.value || '';
    const descriptionValue = descriptionRef.current?.value || '';

    const errorsData: PlantsType = {plantName: "",plantSubtitle:"", price: Number, isInSale: Boolean, discountPercentage: Number, plantLabel: ["", ""], features: "", description: ""}

    if (!plantNameValue) {
      errorsData.plantName = 'This field is required';
    } else if (!validName.test(plantNameValue)) {
      errorsData.plantName = 'Your entrie is no valid';
    }

    if (!plantSubtitleValue) {
      errorsData.plantSubtitle = 'This field is required';
    } else if (!validSubtitle.test(plantSubtitleValue)) {
      errorsData.plantSubtitle = 'Your entrie is no valid';
    }

    if (!priceValue) {
      errorsData.price = 'This field is required';
    } else if (!validPrice.test(priceValue)) {
      errorsData.price = 'Your entrie is no valid';
    }

    if (!discountPercentageValue) {
      errorsData.discountPercentage = 'This field is required';
      //errorsData.isInSale = false
    } else if (discountPercentageValue <= 0 || discountPercentageValue >= 100) {
      errorsData.plantName = 'Your entrie is no valid';
    }

    if (!plantLabelValue) {
      // errorsData.plantLabel = 'This field is required';
    }

    if (!featuresValue) {
      errorsData.features = 'This field is required';
    } else if (!validFeatures.test(featuresValue)) {
      errorsData.features = 'Your entrie is no valid';
    }

    if (!descriptionValue) {
      errorsData.description = 'This field is required';
    } else if (!validDescription.test(descriptionValue)) {
      errorsData.description = 'Your entrie is no valid';
    }
    



    setErrors(errorsData);

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
                <h1 className="">
                  Plant registration
                </h1>
              </div>
              <form>
                <div className="">
                  <div>
                    <label className="">
                      Plant name
                    </label>
                    <br />
                    <input
                      className=""
                      type="text"
                      name="plantName"
                      placeholder="Echinocereus Cactus"
                      value={formData.plantName}
                      onChange={onChange}
                      ref={plantNameRef}
                    />
                    {errors.plantName && <span>{errors.plantName}</span>}
                  </div>

                  <div>
                    <label
                    >
                      Plant subtitle
                    </label>
                    <br />
                    <input
                      type="text"
                      name="plantSubtitle"
                      placeholder="A majestic addition to your plant collection"
                      value={formData.plantSubtitle}
                      onChange={onChange}
                      ref={plantSubtitleRef}
                    />
                    {errors.plantSubtitle && <span style={{ color: 'red' }}>{errors.plantSubtitle}</span>}
                  </div>

                  <div>
                    <label>
                      Plant type
                    </label>
                    <br />
                    <input
                      type="text"
                      name="plantLabel"
                      placeholder="Cactus"
                      value={formData.plantType}
                      onChange={onChange}
                      ref={plantLabelRef}
                    />
                    {errors.plantLabel && <span style={{ color: 'red' }}>{errors.plantLabel}</span>}
                  </div>

                  <div>
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
                        value={formData.price}
                        onChange={onChange}
                        ref={priceRef}
                      />
                      {errors.price && <span style={{ color: 'red' }}>{errors.price}</span>}
                    </div>
                    <div>
                      <label
                      >
                        Discount percentage
                      </label>
                      <br />
                      <input
                        type="number"
                        name="discountPercentage"
                        placeholder="20%"
                        value={formData.discountPercentage}
                        onChange={onChange}
                        ref={discountPercentageRef}
                      />
                      {errors.discountPercentage && <span style={{ color: 'red' }}>{errors.discountPercentage}</span>}
                    </div>
                  </div>

                  <div>
                    <label
                    >
                      Label:{" "}
                    </label>
                    <div>
                      <div className="flex flex-row max-w-xl gap-3 justify-center items-center">
                        <div className=" font-Inter-medium text-base flex flex-row max-w-xl gap-1 justify-center items-center">
                          <input type="checkbox" name="plantLabel" onChange={onChange} ref={plantLabelRef}/>
                          <label defaultChecked>
                            Indoor
                          </label>
                        </div>
                        <div className="font-Inter-medium text-base flex flex-row max-w-xl gap-1 justify-center items-center">
                          <input type="checkbox" name="plantLabel" onChange={onChange} ref={plantLabelRef}/>
                          <label htmlFor="outdoor">Outdoor</label>
                        </div>
                      </div>
                    </div>
                    {errors.plantLabel && <span style={{ color: 'red' }}>{errors.plantLabel}</span>}
                  </div>

                  <div>
                    <label>
                      Features
                    </label>
                    <br />
                    <input
                      type="text"
                      name="features"
                      placeholder="Species: Echinocereus..."
                      value={formData.features}
                      onChange={onChange}
                      ref={featuresRef}
                    />
                    {errors.features && <span style={{ color: 'red' }}>{errors.features}</span>}
                  </div>

                  <div>
                    <label>
                      Description
                    </label>
                    <br />
                    <input
                      type="text"
                      name="description"
                      placeholder="Ladyfinger cactus..."
                      value={formData.description}
                      onChange={onChange}
                      ref={descriptionRef}
                    />
                    {errors.description && <span style={{ color: 'red' }}>{errors.description}</span>}
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
