import { NavigatorProps } from "../model/NavigatorProps";
import process from "process";
export const layoutConfig: NavigatorProps = {
    routes: [
        { label: 'עמוד ראשי', path: '/'  },
        { label: 'שוקיד', path: '/Yad2'  },
        { label: 'עלינו', path: '/About'  },
         {label: 'Logout', path: '/logout', flAuth:false},
         {label: 'Login', path: '/login', flAuth:true},
         { label: 'רנדום', path: '/Generate' }
         
    ]

}
// const developmentRoutes = [
//     { label: 'Generation', path: '/generation', flAuth: true, flAdmin: true},
// ];
// if (process.env.NODE_ENV == 'development') {
//     layoutConfig.routes.push(...developmentRoutes);
// }