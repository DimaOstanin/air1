import { Button } from "@mui/material";
import { authActions } from "../../redux/authSlice";
import {useDispatch} from 'react-redux';
export const Logout: React.FC = ()=>{
    const dispatch = useDispatch<any>();
    return <Button onClick={() => dispatch(authActions.logout())}>התנתק מהפרופיל</Button>
}