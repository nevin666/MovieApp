import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const Addmovies = () => {
  const [form,setForm] = useState (
    {
        name:'',
        url:'',
        description:'',
        director:''
    }
)

function display() {
    console.log(form)
}

function valueCapture(e) {
    console.log(e)
    setForm({...form, [e.target.name]:e.target.value})
}
  return (
    <div>
        <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        //id="outlined-required"
        label="Movie Name"
        name='name'
        variant='outlined'
        //defaultValue=""
      />
      </div>
      <div>
      <TextField
        required
        //id="outlined-required"
        label="Movie URL"
        name='image'
        variant='outlined'
        //defaultValue=""
      />
      </div>
      <div>
      <TextField
        required
        //id="outlined-required"
        label="Details of the movie"
        name='Details'
        variant='outlined'
        //defaultValue=""
      />
      </div>
      <div>
      <TextField
        required
        //id="outlined-required"
        label="Director of the Movie"
        name='Director'
        variant='outlined'
        //defaultValue=""
      />
      </div>
      <div>
      <Button style={{ backgroundColor:'black'}} variant="contained">
        Click Here
      </Button>
      </div>
    </Box>
    </div>
      
    
  )
}

export default Addmovies