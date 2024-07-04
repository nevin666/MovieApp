import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
    <AppBar style={{ backgroundColor:'black' }} position="static">
      <Toolbar>
        <Typography align='left' variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Movies
        </Typography>
        <Link style={{color:'white',background:'grey'}}  to='/view'> 
           <Button  color="inherit">View</Button>
       </Link>
       <Link style={{color:'white',background:'grey'}}  to='/Add'>
           <Button  color="inherit">Add</Button>
        </Link>
        {/* <Button color="inherit">Click</Button> */}
      </Toolbar>
    </AppBar>
  </Box></div>
  )
}

export default Navbar