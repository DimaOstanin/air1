import { Box, Typography ,useMediaQuery} from "@mui/material";
import React from "react";
import { NavigatorProps } from "../../model/NavigatorProps";
import { NavigatorMobile } from "./NavigatorPortrait";
import { Navigator } from "./Navigator";

export const NavigatorDispatch: React.FC<NavigatorProps> = ({routes}) => {
    const noPortrait = useMediaQuery('(min-width:600px)');

    return <Box>
        {noPortrait ? <Navigator routes={routes}/>  :<NavigatorMobile routes={routes}/> }
    </Box>
}