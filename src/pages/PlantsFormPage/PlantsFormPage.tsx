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

  const validate = () => {

    if (!plantData.plantName || !validName.test(plantData.plantName) || plantData.plantName === "") {
 
      setErrors({
        message: `Plant name invalid: ${
          plantData.plantName ? plantData.plantName + "." : "This field is required."
        }`,
        field: "plantName",
      })
      return false

    } else if (!plantData.plantSubtitle || !validSubtitle.test(plantData.plantSubtitle) || plantData.plantSubtitle === "") {
      
      setErrors({
        message: `Plant subtitle invalid: ${
          plantData.plantSubtitle
            ? plantData.plantSubtitle + "."
            : "This field is required."
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
          plantData.price ? plantData.price + "." : "This field is required."
        }`,
        field: "price",
      })
      return false
 
    } else if (plantData.discountPercentage < 0) { 

      setErrors({
        message: `Plant discount invalid: ${
          plantData.discountPercentage ? plantData.discountPercentage + "." : "This field is required."
        }`,
        field: "discountPercentage",
      })
      return false
      
      // arrumar validação do label
    } else if (plantData.plantLabel === null) { 

      setErrors({
        message: `Plant label invalid: ${
          plantData.plantLabel ? plantData.plantLabel + "." : "This field is required."
        }`,
        field: "plantLabel",
      })
      return false

    } else if (!plantData.features || !validFeatures.test(plantData.features) || plantData.features === "") {
 
      setErrors({
        message: `Plant features invalid: ${
          plantData.features ? plantData.features + "." : "This field is required."
        }`,
        field: "features",
      })
      return false
 
    } else if (!plantData.description || !validDescription.test(plantData.description) || plantData.description === "") {
       
      setErrors({
        message: `Plant description invalid: ${
          plantData.description ? plantData.description + "." : "This field is required."
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
    <section className="bg-lightgray h-screen w-screen">
      <form className='flex flex-col md:flex-row items-center md:justify-around' onSubmit={handleSubmit}>
        
        <div className="flex flex-col gap-6 justify-center">

          <div className="border-b-2 border-medgray border-opacity-35">
            <h2 className="text-lunargreen mb-2 pb-2 font-inter-semibold text-xl">Plant registration</h2>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lunargreen font-inter-semibold">
              Plant name
            </label>
            <input type="text" name="plantName" value={plantData.plantName} onChange={handleChange} />
            {errors && errors.field === "plantName" ? (
              <span>{errors.message}</span>
            ) : (
              <></>
            )}
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-lunargreen font-inter-semibold">
              Plant subtitle
            </label>
            <input type="text" name="plantSubtitle" value={plantData.plantSubtitle} onChange={handleChange} />
            {errors && errors.field === "plantSubtitle" ? (
              <span>{errors.message}</span>
            ) : (
              <></>
            )}
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-lunargreen font-inter-semibold">
              Plant type
            </label>
            <input type="text" name="plantType" value={plantData.plantType} onChange={handleChange} />
            {errors && errors.field === "plantType" ? (
              <span>{errors.message}</span>
            ) : (
              <></>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-lunargreen font-inter-semibold">
                Price
              </label>
              <input type="number" name="price" placeholder="$139.99" value={plantData.price || ''} onChange={handleChange} />
              {errors && errors.field === "price" ? (
                <span>{errors.message}</span>
              ) : (
                <></>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-lunargreen font-inter-semibold">
                Discount percentage
              </label>
              <input type="number" name="discountPercentage" placeholder="20%" value={plantData.discountPercentage || 0} onChange={handleChange} />
              {errors && errors.field === "discountPercentage" ? (
                <span>{errors.message}</span>
              ) : (
                <></>
              )}
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-lunargreen font-inter-semibold">
              Label:
            </label>

            <div className="flex flex-row gap-2">
              <input 
                type="radio" 
                name="plantLabel" 
                value="indoor" 
                checked={plantData.plantLabel === 'indoor'} 
                onChange={handleChange} 
              />
              <span>Indoor</span>
              <input 
                type="radio" 
                name="plantLabel" 
                value="outdoor" 
                checked={plantData.plantLabel === 'outdoor'} 
                onChange={handleChange} 
              />
              <span>Outdoor</span>
            </div>
            {errors && errors.field === "plantLabel" ? (
              <span>{errors.message}</span>
            ) : (
              <></>
            )}
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-lunargreen font-inter-semibold">
              Features
            </label>
            <textarea name="features" value={plantData.features} onChange={handleChange} />
            {errors && errors.field === "features" ? (
              <span>{errors.message}</span>
            ) : (
              <></>
            )}
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-lunargreen font-inter-semibold">
              Description
            </label>
            <textarea name="description" value={plantData.description} onChange={handleChange} />
            {errors && errors.field === "description" ? (
              <span>{errors.message}</span>
            ) : (
              <></>
            )}
          </div>  
          
          <button className="bg-lunargreen text-almwhite font-inter-semibold mt-6" type="submit">Register</button>
        </div>

        <div className="w-full md:w-1/3 h-64 md:h-auto">
          <img src={PlantImg} className="object-cover h-full w-full filter grayscale" alt="Plant photo" />
        </div>
      </form>
    </section>
  )
}

export default PlantsFormPage
