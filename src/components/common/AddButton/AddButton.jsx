import React from 'react';
import addButtonImg from '../../../assets/plus-add.png';
import './AddButton.scss';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


const AddButton = () => {
  return (
      <Button color="primary" component={Link} to="/add-feed">
        <img src={addButtonImg} alt='add button' />
      </Button>
  )
}

export default AddButton;