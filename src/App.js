import './App.css';
import {useState} from 'react';
import Card from './components/Card';
import Popup from './components/Popup';
import Particles from 'react-particles-js';

const particlesEffect = {
  particles: {
    number :{
      value: 10,
      density: {
        enable : true,
        value_area : 100
      }
    },
    color:{
      value:"#999999"
    },
    line_linked:{
      color:"#999999"
    },
    interactivity:{
      onclick:{
        enable:true,
      }
    }
    },
    
  }

function App() {
  const propertyFormat = {title:undefined,description:undefined,size:undefined,status:"ongoing"};
  const [propertys, setpropertys] = useState([]);
  const [selectedproperty,setSelectedproperty] = useState({...propertyFormat});
  const [popupBool,setPopupBool] = useState(false);
  const [actionType,setActionType] = useState("");

  const closePopup = () => {
    setPopupBool(false);
    setSelectedproperty({...propertyFormat});
  }

  const clickCard = (property) => {
    console.log("Hiii");
    console.log(property);
    setActionType("update");
    setSelectedproperty(property);
    setPopupBool(true);
  }

  const saveproperty = (property) => {
    const updatedpropertyList = propertys.map((arrproperty) => {
      if (arrproperty.id === property.id) {
        arrproperty.title = property.title;
        arrproperty.description = property.description;
        arrproperty.size = property.size;
        arrproperty.status = property.status;
      }
      return arrproperty;
    })

    setpropertys(updatedpropertyList);
    setPopupBool(false);
    setSelectedproperty({...propertyFormat});
  }

  const openPopupForCreate = () => {
    console.log("Hii");
    setSelectedproperty({...propertyFormat});
    setActionType("create");
    setPopupBool(true)
  }

  const createproperty = (property) => {
    const newproperty = {id:Date.now(), ...property};
    const newpropertyList = [...propertys, newproperty];
    // newpropertyList.push(newproperty);
    setpropertys(newpropertyList);
    setPopupBool(false);
  }

  const deleteproperty = (propertyId) => {
    const newproperty = propertys.filter((property) => property.id !== propertyId);
    setpropertys(newproperty);
  }     

  return (
    <>
        <Particles params={particlesEffect} className="particles"/>
        {popupBool ? <Popup actionType={actionType} selectedproperty={selectedproperty} closePopup={closePopup} saveproperty={saveproperty} createproperty={createproperty}/>  : ""}
        <h1 className='app-title'>Property Management System</h1>
        <ul>
          <li>Ongoing</li>
          <li>Completed</li>
        </ul>
        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
          
          <div className='property-block'>
              <div className='property-subblock'>
                {propertys.map((property) => {
                  if (property.status === "ongoing") {
                    return <Card key={property.id} property={property} clickCard={clickCard} deleteproperty={deleteproperty}/>
                  }
                })}

                <div className='property-card property-addCard' onClick={openPopupForCreate}>
                  <div className='property-title property-add-symbol'>+</div>
                </div>
              </div>
              <div className='property-subblock'>
              {propertys.map((property) => {
                  if (property.status === "completed") {
                    return <Card key={property.id} property={property} clickCard={clickCard} deleteproperty={deleteproperty}/>
                  }
                })}
              </div>
          </div>
        </div>
    </>
  );
}

export default App;
