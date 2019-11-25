import React from "react"
import { Route, Redirect, Link } from 'react-router-dom';
import Homepage from "./Homepage"
import BodyService from "./BodyService"
import ShowDetails from "./ShowDetails";
import UpdateDetails from "./UpdateDetails"
import DeleteDetail from "./DeleteDetail";
import Contact from "./Contact";
import Facial from "./Facial"
import Admin from "./Admin";
import Adminpage from "./Adminpage";
import Deleteskin from "./Deleteskin";
import ShowDetailsskin from "./ShowDetailskin";
import Updateskin from "./Updateskin";


class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/body_service" component={BodyService} />
                <Route exact path="/user/show/:id" component={ShowDetails} />
                <Route exact path="/user/update/:id" component={UpdateDetails} />
                <Route path="/user/delete/:id" component={DeleteDetail} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/admin_logined" component={Adminpage} />
                <Route exact path="/facial" component={Facial} />
                <Route path="/user_skin/delete_skin/:id" component={Deleteskin} />
                <Route exact path="/user_skin/show_skin/:id" component={ShowDetailsskin} />
                <Route exact path="/user_skin/update_skin/:id" component={Updateskin} />
            </div>
        );
    }
}
export default App;