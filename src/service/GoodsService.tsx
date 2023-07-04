import { GoodsType } from "../model/GoodsType"
import { getElement, getRandomDate, getRandomNumber } from "../utils/random";
import goodsConfig from "../config/goods-config.json";
import { useSelector } from "react-redux";

export function createRandomGoods(): GoodsType {
    const {goodsCategory,
          minPrice, maxPrice,goodsCondition,cities} = goodsConfig;
    const id = "name" +  Date.now();
    const name = "מוצר" + Date.now();
    const comp = "חברה" + Date.now();
    const category = getElement(goodsCategory); 
    const condition = getElement(goodsCondition);
    const price = getRandomNumber(minPrice, maxPrice);
    const image = "https://picsum.photos/200/300";
    const city = getElement(cities);
    const goods: GoodsType = {
        id, name, price, image, category,
        company:comp,
        condition,
        city,
        discription: "הכניס שמירת עמוקה בסד ידיים בצל רעמתו הזה עצי כנף כניסת מוח תמה שהם. נא אך כה של יש בי. =יחידת. אמן שיש נשק ממך חלה הלב רות לכל. דבר מדי במה שנת ועל כוח. הדף אוי לתת ומפזז חרתים לקח וגבבא התירו פרק פלא האב "
    }
    return goods;
}
