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

        <div className="col-4 col-lg-4 col-md-6 col-sm-6">
            <div className="card">
                <img className="card-img-top" src={productimg} alt={product.data[0].name}/>

                <div className="card-img-overlay image3 imgHeight">
                    <div className="present">{product?discountPresent:10}%</div>
                    <div className="show vImage3" data-toggle="modal" data-target="#myModal">
                        <a className="fas fa-eye"> QUICK VIEW</a>
                    </div>
                </div>

                <div className="card-body">
                    <a className="card-text" href="/details">{product?product.data[0].name.toUpperCase():'Name'}</a>, <a href="/details">Cat</a>
                    <div>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <a className="fa fa-eye  float-right text-decoration-none m-0 mr-2 text-secondary"></a>

                    </div>
                    <hr />
                    <p>${product?product.price-product.discount:2000} <span>${product?product.price:2500}</span></p>
                </div>
            </div>
        </div>

    )
}
