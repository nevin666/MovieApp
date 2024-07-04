import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Viewmovie = () => {
  const [row,setrows] = useState ([])

  useEffect (() => {
    axios.get('https://dummyapi.online/api/movies').then((res) => {
      console.log(res.data)
      setrows(res.data)
    })
  }, [])

  return (
    <div>
       <h1>
                Movie List
              </h1>
              <Grid container spacing={3}>
      {row.map((rowItem) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={rowItem.id}>
          <Card sx={{ minWidth: 275, backgroundColor: 'gray' }}>
         {/* // <h3>Sl no</h3> */}
            <CardContent>
            
              <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                {rowItem.id}
              </Typography>
              <Typography variant="h5" component="div">
                {rowItem.movie}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {rowItem.rating}
              </Typography>
              <Typography variant="body2">
                {rowItem.image}
                <br />
                {rowItem.imdb_url}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
          </div>
  )
}

export default Viewmovie