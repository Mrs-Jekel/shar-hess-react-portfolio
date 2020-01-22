import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faSignOutAlt, faLock, faEdit, faCircleNotch, faFolderPlus, faPhone, faEnvelope, faMapPin } from "@fortawesome/free-solid-svg-icons";


const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faLock, faEdit, faCircleNotch, faFolderPlus, faPhone, faEnvelope, faMapPin);
};    


export default Icons;