import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import Orders from './order.tsx';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



// const cards = [{"title":"hello",
// "description":"myfavoritesongs","id":1},{"title":"hello",
// "description":"myfavoritesongs","id":2},{"title":"hello",
// "description":"myfavoritesongs","id":3}];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  const [isActive, setIsActive] = useState(false);
  const [num, setNum] = useState(4);
  const [isEdit, setIsedit] = useState(true);
  const DeleteStart = () =>{
    setIsActive(isActive => !isActive);
  };

  const [cards, setCards] = useState([{"title":"hello1",
  "description":"myfavoritesongs","id":1},{"title":"hello2",
  "description":"myfavoritesongs","id":2},{"title":"hello3",
  "description":"myfavoritesongs","id":3}])
  
  const deletecard= (id:number)=>{
    
    setCards(cards => cards.filter((card)=>(
      card.id !== id
    )))
  }

  const addstart = () =>{
    (document.getElementById('modal') as HTMLFormElement).showModal();
    
  }
  const cancelAdd= ()=>{
    (document.getElementById('modal') as HTMLFormElement).close();
  }
  const saveAdd = () =>{
    setNum(num => num+1)
    console.log(num)
    const musicModal = document.getElementById('modal') as HTMLFormElement;
    const addTitle = (musicModal.querySelector("input") as HTMLInputElement).value
    const addDesceiption = (musicModal.querySelector("textarea") as HTMLTextAreaElement).value
    const add = {"title":addTitle,
    "description":addDesceiption,"id":num}
    setCards(cards => [...cards,add])
    musicModal.close()
  }


  const editList = () =>{
    setIsedit(!isEdit)
  }

  return (
    

<>
    {isEdit?
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          
          <Typography variant="h6" color="inherit" noWrap>
            WP Music
          </Typography>
        </Toolbar>
      </AppBar>
      <dialog id="modal">
        <Typography
              component="h6"
              variant="h6"
              align="left"
              color="text.primary"
              gutterBottom
            >
              Title
        </Typography>
        <input type="text" />
        <Typography
              component="h6"
              variant="h6"
              align="left"
              color="text.primary"
              gutterBottom
            >
              Description
        </Typography>
        
        <textarea >

        </textarea>
        <div>
          <Button variant="contained" onClick={saveAdd}>Save</Button>
          <Button variant="outlined" onClick={cancelAdd}> Cancle</Button>
        </div>
        
      </dialog>
      <main>
      
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md" >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              style={{display:"inline-block"}}
            >
              My Playlists
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              style={{display:"inline-block", marginInlineStart:"20%"}}
            >
              <Button variant="contained" onClick={addstart}>Add</Button>
              <Button variant="outlined" onClick={DeleteStart}> {isActive ? "Done" : "Delete"}</Button>
            </Stack>
            
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <HighlightOffIcon  onClick={()=>{deletecard(card.id)}} style={{color:"red", display:isActive?"inline":"none"}} />
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={editList}>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>:< Orders />}
    </>

  );
}