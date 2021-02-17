import { useState } from "react";
import ProductItem from "../product-item/productItem";

export default function ProductList(){

    const products=[

        {id:1,data:[{name:'camera',description:"this is camera"}],price:2000,discount:200,categoryId:{id:1},imagesUrls:['../../../assets/images/1.jpg']},
        {id:2,data:[{name:'phone',description:"this is phone"}],price:1000,discount:100,categoryId:{id:2},imagesUrls:['../../../assets/images/2.jpg']},
        {id:3,data:[{name:'labtop',description:"this is labtop"}],price:800,discount:50,categoryId:{id:3},imagesUrls:['../../../assets/images/3.jpg']},
        {id:4,data:[{name:'camera',description:"this is camera"}],price:5000,discount:300,categoryId:{id:4},imagesUrls:['../../../assets/images/4.jpg']},
        {id:5,data:[{name:'labtop',description:"this is labtop"}],price:7000,discount:500,categoryId:{id:5},imagesUrls:['../../../assets/images/5.jpg']},
        {id:6,data:[{name:'phone',description:"this is camera"}],price:500,discount:20,categoryId:{id:6},imagesUrls:['../../../assets/images/6.jpg']},
        {id:7,data:[{name:'mouse',description:"this is mouse"}],price:9000,discount:1000,categoryId:{id:1},imagesUrls:['../../../assets/images/7.jpg']},
        {id:8,data:[{name:'keyboard',description:"this is keyboard"}],price:7000,discount:1000,categoryId:{id:2},imagesUrls:['../../../assets/images/8.jpg']},
        {id:9,data:[{name:'watch',description:"this is watch"}],price:600,discount:50,categoryId:{id:3},imagesUrls:['../../../assets/images/9.jpg']},
        {id:10,data:[{name:'iphone',description:"this is iphone"}],price:1000,discount:200,categoryId:{id:4},imagesUrls:['../../../assets/images/4.jpg']},
        {id:11,data:[{name:'dell',description:"this is labtop"}],price:200,discount:0,categoryId:{id:5},imagesUrls:['../../../assets/images/3.jpg']},
        {id:12,data:[{name:'tablet',description:"this is tablet"}],price:900,discount:50,categoryId:{id:6},imagesUrls:['../../../assets/images/2.jpg']},
        {id:13,data:[{name:'screen',description:"this is screen"}],price:2000,discount:300,categoryId:{id:1},imagesUrls:['../../../assets/images/1.jpg']}

    ];


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

                <h6 >cat.name</h6>

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
