import React from "react";
import {Box, TextField, Button, Alert} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import generationConfig from '../../config/generation-config.json';
import { goodsActions } from "../../redux/goodsSlice";
import { createRandomGoods } from "../../service/GoodsService";
import { GoodsType } from "../../model/GoodsType";
import { codeActions } from "../../redux/codeSlice";
import { CodeType } from "../../model/CodeType";
import { GoodsForm } from "../forms/GoodsForm";
export const Generation: React.FC = () => {
    const dispatch = useDispatch();
    const {defaultAmount, minAmount, maxAmount, alertTimeout} = generationConfig;
    const [amount, setAmount] = React.useState<number>(defaultAmount);
    const [flAlertSuccess, setAlertAccess] = React.useState<boolean>(false);
    const code: CodeType = useSelector<any, CodeType>(state=>state.errorCode.code );
    function handlerAmount(event: any): void {
        setAmount(+event.target.value);
    }
    function onSubmitFn(event: any) {
        event.preventDefault();
        const goodsAr: GoodsType[] = [];
        for (let i = 0; i < amount; i++) {
            goodsAr.push(createRandomGoods());
        }
         
         dispatch(goodsActions.addBulkGoods(goodsAr));
       alertAccess();
    }
    function alertAccess() {
        setTimeout(() => {if (code === "OK") setAlertAccess(true)}, 200)
        setTimeout(() => setAlertAccess(false), 5000);
    }


    return <Box>
        <form onSubmit={onSubmitFn} >
            <TextField label="amount of goods generated" fullWidth required 
            type="number" onChange={handlerAmount}
             value={amount}
              helperText={`enter amount of goods objects in range [${minAmount}-${maxAmount}]`}
              inputProps = {{
                min: `${minAmount}`,
                max: `${maxAmount}`
              }} />
              <Button type="submit">Generate Goods</Button>

        </form>
        {flAlertSuccess && code === "OK" && <Alert severity="success">Generated 
        {amount} random goods objects</Alert>}
        {code !== "OK" && <Alert severity='error'
             onClose={() => {
                dispatch(codeActions.setCode("OK"));
                setAlertAccess(false);
                }}>{code}</Alert>}

<GoodsForm onAdd={(goodss) => {dispatch(goodsActions.addGoods(goodss));return true }} />
               
    </Box>
}