import { createSlice } from '@reduxjs/toolkit';
import { GoodsType } from '../model/GoodsType';
import { CompanyFirebase } from '../service/CompanyFirebase';
import { codeActions } from './codeSlice';
export const company = new CompanyFirebase();
const initialState: { goods: GoodsType[] } = {
    goods : []
}
const GoodsSlice = createSlice({
    initialState,
    name: "goodsBox",
    reducers: {
        setGoods: (state, data) => {
            state.goods = data.payload;
        }
    }
})

export const goodsReducer = GoodsSlice.reducer;
export const {setGoods} = GoodsSlice.actions;
export const goodsActions: any = {
    addGoods: (empl: GoodsType) => {
        return async (dispatch: any) => {
            try {
                await company.addGoods(empl);
             
                dispatch(codeActions.setCode("OK"));
            } catch (error: any) {
                dispatch(codeActions.setCode("Authorization error"));
            }

        }
    },
    updateGoodsType: (empl: GoodsType) => {
        return async (dispatch: any) => {
            try {
                await company.updateGoods(empl);
              
                dispatch(codeActions.setCode("OK"));
            } catch (error: any) {
                dispatch(codeActions.setCode("Authorization error"));
            }

        }
    },
    removeGoods: (id: number) => {
        return async (dispatch: any) => {
            try {
                await company.removeGoods(id);
                
                dispatch(codeActions.setCode("OK"));
            } catch (error: any) {
                dispatch(codeActions.setCode("Authorization error"));
            }


        }
    },
    
    addBulkGoodss: (goodsAr: GoodsType[]) => {
        return async (dispatch: any) => {
            for(let i = 0; i < goodsAr.length; i++) {
                try{
                    await company.addGoods(goodsAr[i]);
                    dispatch(codeActions.setCode("OK"));
                }catch(error: any) {
                    dispatch(codeActions.setCode("Authorization error"));
                    return;
                } 
            }
            
               
            
           
            
           
        }
    }


}