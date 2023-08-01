import { GoodsType } from "../model/GoodsType";
import GoodsConfig from "../config/goods-config.json";
import { getRandomNumber } from "../utils/random";
import {app} from '../config/firebase-config';
import {collection,  getFirestore, getDocs, setDoc, doc, deleteDoc, DocumentSnapshot} from 'firebase/firestore';
import { Observable } from "rxjs";
import { collectionData} from "rxfire/firestore";
const GoodS = "Goods";

export class CompanyFirebase {
    public goodsCol = collection(getFirestore(app), GoodS);
    async addGoods(goods: GoodsType): Promise<void> {
        goods.id = getRandomNumber(GoodsConfig.minId, GoodsConfig.maxId);
       await this.updateGoods(goods);
    }
    async updateGoods(goods: GoodsType): Promise<void> {
        await setDoc(doc(this.goodsCol, goods.id.toString()), goods);
        
    }
    
    async removeGoods(id: number): Promise<void> {
        await deleteDoc(doc(this.goodsCol, id.toString()));
    }
     getAllGoods():Observable<GoodsType[]> {
        return collectionData(this.goodsCol) as Observable<GoodsType[]>
    }
    
}