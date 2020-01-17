import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt, faEdit, faCircleNotch, faFolderPlus, faFolder } from "@fortawesome/free-solid-svg-icons";


const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faCircleNotch, faFolderPlus);
};    


export default Icons;