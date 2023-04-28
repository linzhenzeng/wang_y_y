import { Icon,Button,Swipe, SwipeItem,Popup } from 'vant';
import 'vant/lib/index.css';

let pulginsArr=[
    Icon,Button,Swipe, SwipeItem,Popup
]

export default function getVant(app) {
    pulginsArr.forEach(item => {
        return app.use(item)
    });
}