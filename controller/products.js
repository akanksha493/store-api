const productModel = require("../models/product");

const getAllProducts = async (req, res) => {
    try {
        console.log("req.query : ",req.query);
        const queryObject = {};

        //search with featured, company, name
        const {featured, company, name, sort, fields, numericFields} = req.query;
        
        if(featured) queryObject.featured = featured==='true'?true: false;
        if(company) queryObject.company = company;
        if(name) queryObject.name = {$regex: name, $options: "i"};
        let sortBy = "createdAt";
        if(sort){
            sortBy = sort.split(",").join(" ");
        }
        let fieldSet = "";
        if(fields){
            fieldSet = fields.split(",");
        }
        if(numericFields){
            console.log(numericFields);
            const equivalent_op = {
                ">": "$gt",
                ">=": "$gte",
                "=": "eq",
                "<": "$lt",
                "<=": "$lte"
            }
            const op_regex = /\b(<|<=|=|>|>=)\b/g;
            let updated = numericFields.replace(op_regex, (match) => `-${equivalent_op[match]}-`);
            console.log("updated: ",updated);
            const options = ["price", "rating"];
            updated.split(",").forEach(item => {
                const [field, operator, value] = item.split("-");
                if(options.includes(field)){
                    queryObject[field] = {[operator]: value};
                }
            })
        }

        console.log("queryObject : ",queryObject);

        const products = await productModel.find(queryObject)
            .sort(sortBy)
            .select(fieldSet)
            .limit(req.query.limit || 10);

            
        res.status(200).json({products, length: products.length});
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getAllProducts,
}