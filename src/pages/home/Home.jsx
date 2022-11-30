import { Button, Typography } from '@mui/material'
import React from 'react'
import HeadingA from '../../components/HeadingA'
import HeadingB from '../../components/HeadingB'

function Home() {
  return (
    <>
      <HeadingA content="13th" />
      <HeadingB content="December" />
      <Typography variant="body1">Would you like to celebrate Luciadagen with your colleagues? We'll be happy to make your day tastier, order lussikatter before 06.12.</Typography>
      <Button variant="contained">bestill her</Button>
    </>
  )
}

export default Home