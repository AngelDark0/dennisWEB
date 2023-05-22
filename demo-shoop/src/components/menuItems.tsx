import { Dropdown } from "react-bootstrap";
import { FiUser } from "react-icons/fi";


export function MenuItemsUser(){
    return(

      <Dropdown style={{alignItems:"center", height:"40px", width:"100px"}}>
         <Dropdown.Toggle id="dropdown-autoclose-outside" >
          
          <FiUser></FiUser>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{width:"2px"}}>

          <Dropdown.Item href= "/login">
         Login
                       
          </Dropdown.Item>
          <Dropdown.Item href= "/register">Register</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item ></Dropdown.Item>
        </Dropdown.Menu>

      </Dropdown>
           

       
        

    )
}