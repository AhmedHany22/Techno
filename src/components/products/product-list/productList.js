import { useState } from "react";
import ProductItem from "../product-item/productItem";
import data from '../../../data'

export default function ProductList(){

    console.log(data);

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
        calculateNumberOfPages(data.products.length)
        const start=pageSize*currentPage;
        return data.products.slice(start,start+pageSize);
      }

      console.log(getSliceArrayOfProduct());
    return(
        <>
        <hr/>

        <div class="container pt-5 pb-5">
        <div class="row">

            <div class="col-md-3 pt-1">
            <div class="pb-4">
                <input type="search" class="se p-3" placeholder="search product" />
                <i class="gh fas fa-search top-righ text-muted"></i>
            </div>
            <hr/>
            <div class="pt-3 pb-3">
                <h6 class="pb-3">Product categories</h6>
                {data.category.map((cat,index)=>{
                    return(
                        <h6 key={index}>{cat.name}</h6>
                    )
                })}
                
            </div>
            </div>

            <div class="col-md-9">
            <div class="container">
                <div class="row mb-3">
                <div class="col-12 col-lg-5 pb-5">
                    <select class="form-control" name="" id="">
                    <option value="1">Featured</option>
                    <option value="2" >Price low to high</option>
                    <option value="3">Price high to low</option>
                    <option value="4">Name</option>
                    </select>
                </div>
                </div>

                <div class="row">
                {getSliceArrayOfProduct().map((product,index)=>{
                    console.log(product);
                    return(
                        <ProductItem class="col-4 col-lg-4 col-sm-12 col-md-4 " key={index} product={product}/>
                    )
                })}
                


                </div>

                <div class="row">
                <div class="pagination pt-5">
                    <a>&laquo;</a>
                    {padgeNumpers.map((padgeNumper,index)=>{
                        return(
                            <a key={index} class="paging__number" className={index===currentPage? 'active':''} onClick={()=>{setCurrentPage(index)}}>{padgeNumper} </a>
                        )
                    })}
                    <a>&raquo;</a>
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