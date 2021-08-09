import React from 'react';
import { useState } from 'react';

export default function Popup({actionType, selectedproperty,closePopup,saveproperty,createproperty}) {
  const [id,setId] = useState(selectedproperty.id);
  const [title,setTitle] = useState(selectedproperty.title);
  const [description,setDescription] = useState(selectedproperty.description);
  const [size,setsize] = useState(selectedproperty.size);
  const [status,setStatus] = useState(selectedproperty.status);

  console.log(id,title,description,size,status);

  const handleChange = (event) => {
    console.log(event.target.name);
    const elemName = event.target.name;
    const val = event.target.value;
    if (elemName === "title") {
      setTitle(val);
    }else if (elemName === "description") {
      setDescription(val);
    }
    else if (elemName === "size") {
      setsize(val);
  }else if (elemName === "status") {
    setStatus(val);
    }
  }

  const savepropertyClick = (event) => {
    event.preventDefault();
    saveproperty({id,title,description,size,status})
  }

  const createpropertyClick = (event) => {
    event.preventDefault();
    createproperty({title,description,size,status});
  }
  
  

  return (
    <div className='popup-block'>
          <div className='popup-card'>
            <div className='delete-symbol--large' onClick={closePopup}>x</div>
            <form>
                <div className='popup-details'>
                  <label>Name</label> <br />
                  <input type="text" name='title' value={title} onChange={handleChange}/> <br />
                  <label>Description</label><br />
                  <textarea name='description' cols="30" rows="10" value={description} onChange={handleChange}></textarea><br />
                  <label>size</label> <br />
                  <input type="number" name='size' value={size} onChange={handleChange}/> <br />
                  <label>Status</label><br />
                  <select name="status" value={status} onChange={handleChange}>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                  </select><br/>
                  {actionType === "create" ? (<button className='popup-button' onClick={createpropertyClick}>Create</button>) : (<button className='popup-button' onClick={savepropertyClick}>Save</button>)}
                </div>
            </form>
            
          </div>
        </div>
  )
}
