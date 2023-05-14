const Product = require('../models/product')


const getAllProducts = async (req, res) => {

    const { company,name , featured,sort,select} = req.query;
    const queryObject = {};

    if(company) {
        queryObject.company = company;
        console.log(queryObject.company)
    }

    if(featured) {
        queryObject.featured = featured;
    }

    if(name) {
        queryObject.name = { $regex: name, $options : "i"};
      
    }

    let apiData = Product.find(queryObject);

    if(sort) {
        let sortFix = sort.replace(",", " ");
       // queryObject.sort = sortFix;
       apiData = apiData.sort(sortFix);
    }

   // (select = name), company;


   if(select) {
  //  let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
   // queryObject.sort = sortFix;
   apiData = apiData.select(selectFix);
}


let page = Number(req.query.page) || 1;
let limit = Number(req.query.limit) || 10;

let skip = (page-1) * limit;

// page = 2;
// limit = 3;
// skip = 1 * 3 = 3

apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);

    const Products = await apiData;
   // console.log("file: product.js- line2 ", req.query);
    res.status(200).json({ Products, nbHits: Products.length });
};


const getAllProductsTesting = async(req, res) => {
    console.log(req.query);
    const myData = await Product.find(req.query).skip(2);
   // console.log("file: product.js- line2 ", req.query);
    res.status(200).json({myData, nbHits : myData.length});
};


module.exports = {getAllProducts, getAllProductsTesting};