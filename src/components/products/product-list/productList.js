import { useEffect, useState } from "react";
import ProductItem from "../product-item/productItem";
import axios from "axios";

export default function ProductList(){
    const [products,setProducts]=useState([]);
    const [category,setCategory]=useState([]);
    const [loading,setloading]=useState(false);
    const [error,setError]=useState(false);
    const fetchData= async ()=>{
        try{

            setloading(true)
            const allProducts= await axios.get('/api/products');
            const allCategory=await axios.get('/api/category');
            setProducts(allProducts.data);
            setCategory(allCategory.data)
            setloading(false)
        } catch(err){
            setError(err.message)
            setloading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[]);
    
    console.log(products);

    let padgeNumpers=[];
    let pageSize=9;
    const [currentPage,setCurrentPage]=useState(0);

    const calculateNumberOfPages=(leng)=>{
        padgeNumpers=[]
        for (let index = 0; index < leng/9; index++) {
          padgeNumpers.push(index+1)
          
        }
      }
     
      const getSliceArrayOfProduct=()=>{
        calculateNumberOfPages(products.length)
        const start=pageSize*currentPage;
        return products.slice(start,start+pageSize);
      }

      console.log(getSliceArrayOfProduct());
    return(
        <>
        <hr/>

        <div className="container pt-5 pb-5">
        <div className="row">

            <div className="col-md-3 pt-1">
            <div className="pb-4">
                <input type="search" className="se p-3" placeholder="search product" />
                <i className="gh fas fa-search top-righ text-muted"></i>
            </div>
            <hr/>
            <div className="pt-3 pb-3">
                <h6 className="pb-3">Product categories</h6>
                {loading? (
                    <div>
                        <i className="fa fa-spinner fa-spin"></i>loading....
                    </div>
                )
                :error?(
                    <div className={`alert alert-${error|| 'info'} border border-danger`}>
                        {error}
                    </div>
                )
                :(
                    category.map((cat,index)=>{
                        return(
                            <h6 key={index}>{cat.name}</h6>
                        )
                    })
                )}
                
                
            </div>
            </div>

            <div className="col-md-9">
            <div className="container">
                <div className="row mb-3">
                <div className="col-12 col-lg-5 pb-5">
                    <select className="form-control" name="" id="">
                    <option value="1">Featured</option>
                    <option value="2" >Price low to high</option>
                    <option value="3">Price high to low</option>
                    <option value="4">Name</option>
                    </select>
                </div>
                </div>

                <div className="row">
                {loading? (
                    <div>
                        <i className="fa fa-spinner fa-spin"></i>loading....
                    </div>
                )
                :error?(
                    <div className={`alert alert-${error|| 'info'} border border-danger`}>
                        {error}
                    </div>
                )
                :(
                    getSliceArrayOfProduct().map((product,index)=>{
                        console.log(product);
                        return(
                            <ProductItem className="col-4 col-lg-4 col-sm-12 col-md-4 " key={index} product={product}/>
                        )
                    })
                )}
                
                </div>

                <div className="row">
                <div className="pagination pt-5">
                    <a href>&laquo;</a>
                    {padgeNumpers.map((padgeNumper,index)=>{
                        return(
                            <a href key={index} className="paging__number" classNameName={index===currentPage? 'active':''} onClick={()=>{setCurrentPage(index)}}>{padgeNumper} </a>
                        )
                    })}
                    <a href>&raquo;</a>
                </div>         

                </div>
                
            </div>
            </div>
        </div>
        </div>

        <hr/>
        </>
    )
}