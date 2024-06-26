import React from 'react'
import { addRoom } from '../utils/ApiFunctions'

const AddRoom = () => {
  const [newRoom, setNewRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: ""
  })

   const [imagePreview, setImagePreview] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleRoomInputChange = (e) => {
     const name = e.target.name
      let value = e.target.value
      if(name === "roomPrice") {
        if (!isNaN(value))  {
          value.parseInt(value)
        } else {
          value = ""
        }
      } 
      setNewRoom({...newRoom, [name]: value})
  }


  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]
    setNewRoom({...newRoom, photo: selectedImage})
    setImagePreview(URL.createObjectURL(selectedImage))
  }

  const handleSubmit =  async (e) => {
     e.preventDefault()
     try {
          const success = await addRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice)
          if(success !== undefined) {
            setSuccessMessage("A new room was added to the database!")
            setNewRoom({photo: null, roomType: "", roomPrice : " "})
            setImagePreview("")
            setErrorMessage("")
          }else {
            setErrorMessage("Error adding room")
          }
        } catch (e) {
          setErrorMessage(e.message)
     }
  }

  return (
      <>
            
      </>
  )
}

export default AddRoom