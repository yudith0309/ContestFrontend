import Sidebar from "../sidebar/sideBar";
import Menu from "../menu/menu";

export default function ContentAdmin() {

    return (
      
            <div className="flex">
                <div class="column1">
                    <Sidebar />
                </div>
                <div class="column1">
                    <Menu/>
                </div>
            </div>
    
    )
} 