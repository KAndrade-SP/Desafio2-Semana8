import { useRef, useState } from "react"
import {
  validName,
  validSubtitle,
  validFeatures,
  validDescription,
  validType
} from "./regex/RegexValidation"
 
import { PlantsType } from "./types/PlantsType"
import { PlantsError } from "./types/PlantsError"
 
const PlantsFormPage = () => {
 
  const [formData, setFormData] = useState<PlantsType>({
    id: 0,
    plantName: "",
    plantSubtitle: "",
    plantType: "",
    price: 0,
    isInSale: false,
    discountPercentage: 0,
    plantLabel: "",
    features: "",
    description: "",
  })
 
  const plantNameRef = useRef<HTMLInputElement>(null)
  const plantSubtitleRef = useRef<HTMLInputElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)
  const discountPercentageRef = useRef<HTMLInputElement>(null)
  const plantTypeRef = useRef<HTMLInputElement>(null)
  const plantRadioLabelRef = useRef<HTMLInputElement>(null)
  const featuresRef = useRef<HTMLInputElement>(null)
  const descriptionRef = useRef<HTMLInputElement>(null)

  const plantNameValue = plantNameRef.current?.value || ""
    const plantSubtitleValue = plantSubtitleRef.current?.value || ""
    const priceValue = priceRef.current? parseInt(priceRef.current.value) : 0;
    const discountPercentageValue = discountPercentageRef.current? parseInt(discountPercentageRef.current.value) : 0;
    const plantTypeValue = plantTypeRef.current?.value || ""
    const plantRadioLabelValue = plantRadioLabelRef.current?.value || ""
    const featuresValue = featuresRef.current?.value || ""
    const descriptionValue = descriptionRef.current?.value || ""
 
  const [errors, setErrors] = useState<PlantsError>({ message: "", field: "" })
  const [isInSale, setIsInSale] = useState(false)
  const [isValidated, setIsValidated] = useState(false)
 
  const [lastId, setLastId] = useState<number>(0);

  const validateForm = () => {
    
    if (!plantNameValue || !validName.test(plantNameValue) || plantNameValue === "") {
 
      setErrors({
        message: `Plant name invalid: ${
          plantNameValue ? plantNameValue + "." : "This field is required."
        }`,
        field: "plantName",
      })
      setIsValidated(false)
      
      
 
    } else if (!plantSubtitleValue || !validSubtitle.test(plantSubtitleValue) || plantSubtitleValue === "") {
 
      setErrors({
        message: `Plant subtitle invalid: ${
          plantSubtitleValue
            ? plantSubtitleValue + "."
            : "This field is required."
        }`,
        field: "plantSubtitle",
      })
      setIsValidated(false)

 
    } else if (!plantTypeValue || !validType.test(plantTypeValue) || plantTypeValue === "") {
 
      setErrors({
        message: `Plant type invalid: ${
          plantTypeValue ? plantTypeValue + "." : "this field is required."
        }`,
        field: "plantType",
      })
      setIsValidated(false)
 
    } else if (!priceValue || priceValue === null || typeof priceValue != 'number') {
      setErrors({
        message: `Plant price invalid: ${
          priceValue ? priceValue + "." : "This field is required."
        }`,
        field: "price",
      })
      setIsValidated(false)
 
    } else if (!featuresValue || !validFeatures.test(featuresValue) || featuresValue === "") {
 
      setErrors({
        message: `Plant features invalid: ${
          featuresValue ? featuresValue + "." : "This field is required."
        }`,
        field: "features",
      })
      setIsValidated(false)
 
    } else if (!descriptionValue || !validDescription.test(descriptionValue) || descriptionValue === "") {
       
      setErrors({
        message: `Plant description invalid: ${
          descriptionValue ? descriptionValue + "." : "This field is required."
        }`,
        field: "description",
      })
      setIsValidated(false)
    } else {
      // if(discountPercentageValue === null) {
      //   setIsInSale(false)
      // }
      // else {
      //   setIsInSale(true)
        
      // }
      setIsValidated(true)
      setErrors({message: '', field:''})
      return isValidated
    }

  }

  const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    validateForm()

    if (isValidated) {
      setFormData({
        id: lastId + 1,
        plantName: plantNameValue,
        plantSubtitle: plantSubtitleValue,
        plantType: plantTypeValue,
        price: priceValue,
        isInSale: isInSale,
        discountPercentage: discountPercentageValue,
        plantLabel: plantRadioLabelValue,
        features: featuresValue,
        description: descriptionValue,
      })
      setLastId(lastId + 1);
      console.log(formData)
      console.log(isInSale)
      console.log(discountPercentageValue)
    }
    
    
    
  } 
  
  return (
      <section className="bg-lightgray max-w-screen ">
 
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
 
              <form onSubmit={submitForm}>
                <div className="">
 
                  <div>
                    <label className="">Plant name</label>
                    <br />
                    <input
                      className=""
                      type="text"
                      name="plantName"
                      placeholder="Echinocereus Cactus"
                      ref={plantNameRef}
                      defaultValue={formData.plantName}
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
                      ref={plantSubtitleRef}
                      defaultValue={formData.plantSubtitle}
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
                      name="plantType"
                      placeholder="Cactus"

                      ref={plantTypeRef}
                      defaultValue={formData.plantType}
                    />
                    {errors && errors.field === "plantType" ? (
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
                        ref={priceRef}
                        defaultValue={formData.price}
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
                        ref={discountPercentageRef}
                        defaultValue={formData.discountPercentage}
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
                            value="indoor"
                            ref={plantRadioLabelRef}
                          />
                          <label>Indoor</label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="plantRadioLabel"
                            value="outdoor"
                            ref={plantRadioLabelRef}
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
                      ref={featuresRef}
                      defaultValue={formData.features}
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
                      ref={descriptionRef}
                      defaultValue={formData.description}
                    />
                    {errors && errors.field === "description" ? (
                      <span>{errors.message}</span>
                    ) : (
                      ""
                    )}
                  </div>
 
                </div>
                <button >Register</button>
              </form>
 
            </div>
           
            <div>image</div>
 
          </div>
        </main>
 
        <footer>
          <p>footer</p>
        </footer>
      </section>
  )
}
export default PlantsFormPage