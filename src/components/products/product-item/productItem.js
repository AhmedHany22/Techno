import "bootstrap/dist/css/bootstrap.min.css";
import './productItem.css'
import productimg from '../../../assets/5.jpg'


export default function ProductItem(props) {
    const {product}=props;
    console.log(product);
    let discountPresent=10;
    if(product){
        discountPresent=Math.round((product.discount/product.price)*100)
    }
    
    return (
    
        <div class="col-4 col-lg-4 col-md-6 col-sm-6">
            <div class="card">
                <img class="card-img-top" src={productimg} alt="Card image"/>

                <div class="card-img-overlay image3">
                    <div class="present">{product?discountPresent:10}%</div>
                    <div class="show vImage3" data-toggle="modal" data-target="#myModal">
                        <a class="fas fa-eye"> QUICK VIEW</a>
                    </div>
                </div>

                <div class="card-body">
                    <a class="card-text">{product?product.data[0].name:'Name'}</a>, <a href="">Cat</a>
                    <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>

                    </div>
                    <hr />
                    <p>${product?product.price-product.discount:2000} <span>${product?product.price:2500}</span></p>
                </div>
            </div>
        </div>

    )
}