import React, {useContext} from 'react'
import {Menu} from 'semantic-ui-react'
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts/authContext";

function NavBar() {
    //const navigate = useNavigate();
    const authContext = useAuth();
  return (
    <Menu>
			<Menu.Item as={Link} to={"/"}>
				Ana Sayfa
			</Menu.Item>
			<Menu.Item as={Link} to={"/posts"}>
				Postlar
			</Menu.Item>
            {!authContext.isAuthenticated && (
				<Menu.Item as={Link} to={"/login"}>
					Giriş Yap
				</Menu.Item>
			)}
		</Menu>
  )
}

export default NavBar

// local storage
// global state management (redux,context API)