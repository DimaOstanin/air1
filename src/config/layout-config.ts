import { NavigatorProps } from "../model/NavigatorProps";
import process from "process";
export const layoutConfig: NavigatorProps = {
    routes: [
        { label: 'עמוד ראשי', path: '/', flAuth: true },
        { label: 'Yad2', path: '/Yad2' , flAuth: true, flAdmin: false},
        { label: 'עלינו', path: '/About',  flAuth: true, flAdmin: false },
         {label: 'Logout', path: '/logout', flAuth: true},
         {label: 'Login', path: '/login', flAuth: false}
         
    ]

}
// const developmentRoutes = [
//     { label: 'Generation', path: '/generation', flAuth: true, flAdmin: true},
// ];
// if (process.env.NODE_ENV == 'development') {
//     layoutConfig.routes.push(...developmentRoutes);
// }