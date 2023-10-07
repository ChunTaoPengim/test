import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title.tsx';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import React, { useState } from 'react';

// Generate Order Data








export default function Orders() {
  const  [rows,setRows] = useState([
    { "id": 1, "song": '2023-10-07', "singer": 'Item1', "link": "hello1", "checked": false },
    { "id": 2, "song": '2023-10-08', "singer": 'Item2', "link": "hello2", "checked": false }
  ]);
  const [int,setInt] = useState(3)

  const handleCheckboxChange = (id:number) =>{
    setRows((prevRows) =>
    prevRows.map((row) =>
      row.id === id ? { ...row, checked: !row.checked } : row
    )
    );
  }
  const [allChecked,setAllChecked] = useState(false)
  const handleAllCheckboxChange = () =>{
    setAllChecked(allChecked => !allChecked)
    setRows((prevRows) =>
    prevRows.map((row) => ({
      ...row,
      checked: !allChecked
    }))
  );
  }
  

  const addstart = () =>{
    (document.getElementById('modal') as HTMLFormElement).showModal();
    
  }
  const cancelAdd= ()=>{
    (document.getElementById('modal') as HTMLFormElement).close();
  }
  const saveAdd = () =>{
    setInt(int => int+1)
    const songs = document.getElementById('modal') as HTMLFormElement;
    const song = (songs.querySelector("input") as HTMLInputElement).value
    const singer = (document.getElementById('add-singer') as HTMLFormElement).value;
    const link = (songs.querySelector("textarea") as HTMLTextAreaElement).value
    const add = {"id": int,"song":song,
    "singer":singer,"link":link, "checked": false}
    setRows(rows => [...rows,add])
    songs.close()
  }
  const deletestart = () =>{
    (document.getElementById('delete-modal') as HTMLFormElement).showModal();
    
  }
  const canceldelete= ()=>{
    (document.getElementById('delete-modal') as HTMLFormElement).close();
  }
  const Delete = ()=>{
    setRows(rows => rows.filter((row)=>(
      row.checked === false
    )));
    (document.getElementById('delete-modal') as HTMLFormElement).close();
  }
  
  // const delete = () =>{

  // };

  return (
    <React.Fragment>
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
              song
        </Typography>
        <input type="text" />
        <Typography
              component="h6"
              variant="h6"
              align="left"
              color="text.primary"
              gutterBottom
            >
              singer
        </Typography>
        <input type="text" id = "add-singer"/>
        
        <textarea >

        </textarea>
        <div>
          <Button variant="contained" onClick={saveAdd}>Save</Button>
          <Button variant="outlined" onClick={cancelAdd}> Cancle</Button>
        </div>
        
      </dialog>
      <dialog id="delete-modal">
      <TableBody>
      {rows.map((row) => (
            row.checked === true ? (
              <TableRow key={row.id}>
                <TableCell>{row.song}</TableCell>
                <TableCell>{row.singer}</TableCell>
                <TableCell align="right">{`$${row.link}`}</TableCell>
              </TableRow>
            ) : null
          ))}
        </TableBody>
        <Typography>
          you sure you want to delete these?
        </Typography>
        <div>
          <Button variant="contained" onClick={Delete}>Sure</Button>
          <Button variant="outlined" onClick={canceldelete}> Cancle</Button>
        </div>
        
      </dialog>
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          component="img"
          sx={{
            height: 200,
            width: 300,
            maxHeight: { xs: 200, md: 167 },
            maxWidth: { xs: 300, md: 250 },
            margin: 4,
            flex: 1, // Make the image take up available space
          }}
          src="https://source.unsplash.com/random?wallpapers"
          alt="Random Wallpaper"
        />
        <Typography variant="h6" color="inherit" sx={{ flex: 1 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nam nisi perspiciatis voluptas tenetur, autem aperiam sint distinctio quis error asperiores? Sed aliquid quos et molestias ab esse, quasi veniam.
        </Typography>
        <div>
        <Button variant="contained" onClick={addstart}>Add</Button>
      <Button variant="outlined" onClick={deletestart}> Delete</Button>
        </div>
      </Container>
      
      <Title>Music </Title>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>
            <Checkbox  
              checked={allChecked}
              onChange={() => handleAllCheckboxChange()}/>
              Song</TableCell>
            <TableCell>Singer</TableCell>
            <TableCell align="right">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              
              <TableCell>
              <Checkbox  
              checked={row.checked}
              onChange={() => handleCheckboxChange(row.id)}/>{row.song}
              </TableCell>
              <TableCell>{row.singer}</TableCell>
              <TableCell align="right" >{`$${row.link}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#"  sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}