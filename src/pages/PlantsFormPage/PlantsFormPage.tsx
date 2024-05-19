import React, { useState } from 'react'

import axios from 'axios';

import {
  validName,
  validSubtitle,
  validFeatures,
  validDescription,
  validType
} from "./regex/RegexValidation"

import { PlantsError } from "./types/PlantsError"

import { PlantsSucess } from './types/PlantsSucess';

import PlantImg from '../../assets/images/plant-form.png'

type PlantType = {
  id: number,
  plantName: string,
  plantSubtitle: string,
  plantType: string,
  price: number,
  isInSale: boolean,
  discountPercentage: number,
  plantLabel: string,
  features: string,
  description: string,
}

const PlantsFormPage = () => {
  const [plantData, setPlantData] = useState<PlantType>({
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

  const [errors, setErrors] = useState<PlantsError>({ message: "", field: "" })

  const [sucessMessage, setSucessMessage] = useState<PlantsSucess>({message: ""})

  const validate = () => {

    if (!plantData.plantName || !validName.test(plantData.plantName) || plantData.plantName === "") {

      setErrors({
        message: `Plant name invalid: ${
          plantData.plantName ? plantData.plantName + "." : "this field is required."
        }`,
        field: "plantName",
      })
      return false

    } else if (!plantData.plantSubtitle || !validSubtitle.test(plantData.plantSubtitle) || plantData.plantSubtitle === "") {
      
      setErrors({
        message: `Plant subtitle invalid: ${
          plantData.plantSubtitle
            ? plantData.plantSubtitle + "."
            : "this field is required."
        }`,
        field: "plantSubtitle",
      })
      return false

    } else if (!plantData.plantType || !validType.test(plantData.plantType) || plantData.plantType === "") {

      setErrors({
        message: `Plant type invalid: ${
          plantData.plantType ? plantData.plantType + "." : "this field is required."
        }`,
        field: "plantType",
      })
      return false

    } else if (plantData.price <= 0 || isNaN(plantData.price)) {
      
      setErrors({
        message: `Plant price invalid: ${
          plantData.price ? plantData.price + "." : "this field is required."
        }`,
        field: "price",
      })
      return false

    } else if (plantData.discountPercentage <= 0 || plantData.discountPercentage > 100) { 

      setErrors({
        message: `Plant discount invalid: ${
          plantData.discountPercentage ? plantData.discountPercentage + "." : "this field is required."
        }`,
        field: "discountPercentage",
      })
      return false

    } else if (!plantData.plantLabel) { 

      setErrors({
        message: `Plant label invalid: ${
          plantData.plantLabel ? plantData.plantLabel + "." : "this field is required."
        }`,
        field: "plantLabel",
      })
      return false

      // arrumar erro features
    } else if (!plantData.features || !validFeatures.test(plantData.features) || plantData.features === "") {

      setErrors({
        message: `Plant features invalid: ${
          plantData.features ? plantData.features + "." : "this field is required."
        }`,
        field: "features",
      })
      return false

    } else if (!plantData.description || !validDescription.test(plantData.description) || plantData.description === "") {

      setErrors({
        message: `Plant description invalid: ${
          plantData.description ? plantData.description + "." : "this field is required."
        }`,
        field: "description",
      })
      return false

    } else {
      
      if (plantData.discountPercentage > 0) {
        plantData.isInSale = true
      } 

      setErrors({message: '', field: ''})
      return true
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    setPlantData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const validation = validate()

    if (!validation) {
      console.log('Dados inválidos')
    } else {
      const plantDataComplete = {
        ...plantData,
        discountPercentage: plantData.discountPercentage ? Number(plantData.discountPercentage) : undefined
      }

      axios.get('http://localhost:3000/plants')
        .then(response => {
          const plants = response.data
          const lastId = plants.length > 0 ? plants[plants.length - 1].id : 0
          const newId = lastId + 1
          plantDataComplete.id = newId

          axios.post('http://localhost:3000/plants', plantDataComplete)
            .then((response) => {
              console.log('Dados enviados com sucesso:', response.data)
              setSucessMessage({message: "Plant registered successfully!"})
            })
            .catch((error) => {
              console.error('Erro ao enviar dados:', error)
            })
        })
          .catch(error => {
            console.error('Erro ao obter filmes:', error)
        })
      plantData.isInSale = false
      console.log(plantDataComplete)
    }
  }

  return (
    <section className="bg-lightgray">
      <div className="flex flex-row justify-center max-w-full 2xl:justify-between">
        <form className="2xl:pl-32 pt-36 pb-32" onSubmit={handleSubmit}>
          
          <div className="flex flex-col gap-6 justify-center">

            <div className="border-b-2 border-medgray border-opacity-35">
              <h2 className="text-lunargreen mb-2 pb-2 font-inter-semibold text-2xl">Plant registration</h2>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-almblack font-inter-semibold">
                Plant name
              </label>
              <input type="text" name="plantName" placeholder='Echinocereus Cactus' className="bg-lightgray py-2 px-2 rounded-md border-2 border-darkgray border-opacity-60 font-inter-medium" value={plantData.plantName} onChange={handleChange} />
              {errors && errors.field === "plantName" ? (
                <span className="text-red-600 text-base font-inter-regular">{errors.message}</span>
              ) : (
                <></>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-almblack font-inter-semibold text-lg">
                Plant subtitle
              </label>
              <input type="text" name="plantSubtitle" placeholder='A majestic addition to your plant collection' className="bg-lightgray py-2 px-2 rounded-md border-2 border-darkgray border-opacity-60 font-inter-medium" value={plantData.plantSubtitle} onChange={handleChange} />
              {errors && errors.field === "plantSubtitle" ? (
                <span className="text-red-600 text-base font-inter-regular">{errors.message}</span>
              ) : (
                <></>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-almblack font-inter-semibold text-lg">
                Plant type
              </label>
              <input type="text" name="plantType" placeholder='Cactus' className="bg-lightgray py-2 px-2 text-lg rounded-md border-2 border-darkgray border-opacity-60 font-inter-medium" value={plantData.plantType} onChange={handleChange} />
              {errors && errors.field === "plantType" ? (
                <span className="text-red-600 text-base font-inter-regular">{errors.message}</span>
              ) : (
                <></>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-almblack font-inter-semibold text-lg">
                  Price
                </label>
                <input type="number" name="price" placeholder='$139.99' className="bg-lightgray py-2 px-2 text-lg rounded-md border-2 border-darkgray border-opacity-60 font-inter-medium" value={plantData.price || ''} onChange={handleChange} />
                {errors && errors.field === "price" ? (
                  <span className="text-red-600 text-base font-inter-regular">{errors.message}</span>
                ) : (
                  <></>
                )}
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-almblack font-inter-semibold text-lg">
                  Discount percentage
                </label>
                <input type="number" name="discountPercentage" className="bg-lightgray py-2 px-2 rounded-md border-2 border-darkgray border-opacity-60 font-inter-medium" placeholder="20" value={plantData.discountPercentage || 0} onChange={handleChange} />
                {errors && errors.field === "discountPercentage" ? (
                  <span className="text-red-600 text-base font-inter-regular">{errors.message}</span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-almblack font-inter-semibold text-lg">
                Label:
              </label>

              <div className="flex flex-row gap-2 ">
                <input 
                  type="radio" 
                  name="plantLabel" 
                  value="indoor" 
                  checked={plantData.plantLabel === 'indoor'} 
                  onChange={handleChange} 
                />
                <span className="text-almblack text text-base font-inter-medium">Indoor</span>
                <input 
                  type="radio" 
                  name="plantLabel" 
                  value="outdoor" 
                  checked={plantData.plantLabel === 'outdoor'} 
                  onChange={handleChange} 
                />
                <span className="text-almblack text text-base font-inter-medium">Outdoor</span>
              </div>
              {errors && errors.field === "plantLabel" ? (
                <span className="text-red-600 text-base font-inter-regular">{errors.message}</span>
              ) : (
                <></>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-almblack font-inter-semibold text-lg">
                Features
              </label>
              <textarea name="features" placeholder='Species: Echinocereus...' className="bg-lightgray h-32 py-2 px-2 rounded-md border-2 border-darkgray border-opacity-60 font-inter-medium" value={plantData.features} onChange={handleChange} />
              {errors && errors.field === "features" ? (
                <span className="text-red-600 text-base font-inter-regular">{errors.message}</span>
              ) : (
                <></>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-almblack font-inter-semibold text-lg">
                Description
              </label>
              <textarea name="description" placeholder='Ladyfinger cactus...' className="bg-lightgray h-32 py-2 px-2 rounded-md border-2 border-darkgray border-opacity-60 font-inter-medium" value={plantData.description} onChange={handleChange} />
              {errors && errors.field === "description" ? (
                <span className="text-red-600 text-base font-inter-regular">{errors.message}</span>
              ) : (
                <></>
              )}
            </div>  
            
            <button className="bg-lunargreen text-almwhite font-inter-semibold mt-6 py-3.5 rounded-md hover:bg-avacado transition-all" type="submit">Register</button> 
            {sucessMessage && sucessMessage.message ? (
                <span className="text-flaggreen text-lg font-inter-regular">{sucessMessage.message}</span>
              ) : (<></>)}
          </div>

        </form>

        <div className="hidden 2xl:block 2xl:w-7/12">
          <img src={PlantImg} className="2xl:object-cover h-full w-full filter grayscale" alt="Plant photo" />
        </div>
        
      </div>
    </section>
  )
}

export default PlantsFormPage
