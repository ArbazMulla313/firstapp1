import { Avatar, AvatarGroup,  Button, Card, CardContent, Grid,  ThemeProvider, Chip, Icon, TextField,   } from '@mui/material'
import { red } from '@mui/material/colors'

import React from 'react'

export const Meta = () => {
const arr=[
    {image_url:"./1.webp",name:"SAMSUNG Galaxy S23 Ultra 5G (Cream, 512 GB) (12 GB RAM)",R:"Rs.1,34,999/-"},
    {image_url:"./2.webp" ,name:"SAMSUNG Galaxy A03 Core (Green, 32 GB)  (2 GB RAM)",R:"Rs.10,000/-"},
    {image_url:"./3.webp",name:"SAMSUNG Galaxy F04 (Jade Purple, 64 GB)  (4 GB RAM)",R:"Rs.10,499/-"},
    {image_url:"./4.webp",name:"SAMSUNG Galaxy F22 (Denim Black, 64 GB)  (4 GB RAM)",R:"Rs.11,499/-"},
    {image_url:"./5.webp",name:"SAMSUNG Galaxy F13 (Waterfall Blue, 64 GB)  (4 GB RAM)",R:"Rs.11,999/-"},
    {image_url:"./6.webp",name:"SAMSUNG Galaxy F23 5G (Copper Blush, 128 GB)  (6 GB RAM)",R:"Rs.16,999/-"},
    
    
]
const arr1=[
    {image_url:"./9.webp",name:"vivo T1 44W (Starry Sky, 128 GB)  (4 GB RAM)",R:"Rs.14,999/-"},
    {image_url:"./10.webp",name:"vivo Y22 (Starlit Blue, 64 GB) Vivo  (4 GB RAM)",R:"Rs.14,999/-"},
    {image_url:"./11.webp",name:"vivo Y21G (Diamond Glow, 64 GB)  (4 GB RAM)",R:"Rs.13,499/-"},
    {image_url:"./12.webp",name:"vivo T1X (Space Blue, 64 GB) Vivo  (4 GB RAM)",R:"Rs.11,999/-"},
    {image_url:"./13.webp",name:"vivo T1 5G (Rainbow Fantasy, 128 GB)  (8 GB RAM)",R:"Rs.19,990/-"},
    {image_url:"./14.webp",name:"vivo T1 Pro 5G (Turbo Cyan, 128 GB)  (6 GB RAM)",R:"Rs.23,999/-"},
    
    
]
const arr2=[
    {image_url:"./15.webp",name:"OPPO K10 5G (Ocean Blue, 128 GB)  (8 GB RAM)",R:"Rs.16,999/-"},
    {image_url:"./16.webp",name:"OPPO Reno8 5G (Shimmer Gold, 128 GB)  (8 GB RAM)",R:"Rs.29,999/-"},
    {image_url:"./17.webp",name:"OPPO Reno7 Pro 5G (Starlight Black, 256 GB)  (12 GB RAM)",R:"Rs.34,999/-"},
    {image_url:"./18.webp",name:"OPPO Reno8T 5G (Sunrise Gold, 128 GB)  (8 GB RAM)",R:"Rs.29,999/-"},
    {image_url:"./19.webp",name:"OPPO A57 (Glowing Green, 64 GB) OPPO  (4 GB RAM)",R:"Rs.13,999/-"},
    {image_url:"./20.webp",name:"OPPO A17 (Sunlight Orange, 64 GB) OPPO  Oppo (4 GB RAM)",R:"Rs.12,999/-" },
    
    
]



  return (
    <div>
        <nav>
            
        <h1><TextField className='AAA' label='Search Mobiles' type="text" /></h1>
        
            <AvatarGroup max={4}>
  <Avatar alt="Remy Sharp" src="1.webp" />
  <Avatar alt="Travis Howard" src="" />
  <Avatar alt="Cindy Baker" src="" />
  <Avatar alt="Agnes Walker" src="" />
  <Avatar alt="Trevor Henderson" src="" />
</AvatarGroup>
</nav>


  
        <Grid item xs={12}>
           <Card>
            <CardContent>
            <h3 className='Hi'>Latest Samsung mobiles <b className='H'><Button variant="contained">VIEW ALL</Button></b>  </h3>
            </CardContent>
           </Card>
          </Grid><br />
        
        <Grid container spacing={3}>
            {arr.map((item)=>{
                return(
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                     <img src={item.image_url}  alt="" height={200}  />
                     <h4>{item.name}</h4>
                     <b>{item.R}</b>
                     <br />
                     <Button variant="contained"color='success'> <b> Add-kart</b></Button>
                    </CardContent>
                </Card>
            </Grid>
            )
          })}
        
          <Grid item xs={12}>
           <Card>
            <CardContent>
            <h3 className='Hi'>Latest Vivo mobiles <b className='H'><Button variant="contained">VIEW ALL</Button></b>  </h3>
            </CardContent>
           </Card>
          </Grid>
          <br />
          <Grid container spacing={3}>
          <Grid item xs={12}></Grid>

            {arr1.map((item)=>{
                return(
                  
            <Grid item xs={4}>
                
                <Card>
                    <CardContent>
                     <img src={item.image_url} alt="" height={200} />
                     <h4>{item.name}</h4>
                     <b>{item.R}</b>
                     <br />
                     <Button variant="contained"color='success'><b>Add-kart</b> </Button>
                    </CardContent>
                </Card>
            </Grid>
            
            )
          })}
          <Grid item xs={12}>
           <Card>
            <CardContent>
            <h3 className='Hi'>Latest Oppo Mobiles<b className='H'><Button variant="contained">VIEW ALL</Button></b>  </h3>
            </CardContent>
           </Card>
          </Grid>
          <Grid container spacing={3}>
          <Grid item xs={12}></Grid>

            {arr2.map((item)=>{
                return(
                  
            <Grid item xs={4}>
                
                <Card className='AS'>
                    <CardContent>
                     <img src={item.image_url} alt="" height={200} />
                     <h4>{item.name}</h4>
                     <b>{item.R}</b>
                     <br />
                     <Button variant="contained" color='success'><b>Add-kart</b></Button>
                    </CardContent>
                </Card>
            </Grid>
            
            )
        })}

        </Grid>
        </Grid>
        </Grid>
    </div>
  )
}
