import "bootstrap/dist/css/bootstrap.min.css";
import './productItem.css'
import productimg from '../../../assets/10.jpg'


export default function ProductItem(props){
    return(
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="card">
                <div class="co">
                    <img class="card-img-top" src={productimg} alt="Card image" />

                    <div class="card-img-overlay image1">
                        <div class="present">10%</div>
                        <button class="show vImage1">
                            <a > Add To Cart</a>
                        </button>
                    </div>
                </div>
                <div class="mx-3">
                <p class="pt-1 h4 fcolor">camera</p>
                <span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star"></span>
                </span>
                <a class="fas fa-edit float-right text-decoration-none m-0 text-secondary"></a>
                <a class="fas fa-eye  float-right text-decoration-none m-0 mr-2 text-secondary"></a>
                <hr style={{width:'95%'}} class="my-2"/>
                <div class="p-2 pb-3">
                    <span>$2000</span>
                    <span class="spa text-muted float-right">$100</span>
                </div>
                </div>
            </div>
        </div>
    )
}
