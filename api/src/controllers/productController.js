import Product from "../models/Product.js";


const getProducts = (req, res) => {
    const { nombre } = req.query;
    if (nombre) {
        Product.find({ name: nombre })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
    } else {
        Product.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
    }
}

const createProduct = (req,res) => {
    const {name,marca,category,price,img,description,available} = req.body;

    if(!name || !marca || !category || !price || !img || !description || available === undefined) return res.status(400).json({message:'Client has not sent all parameters'});

    const product = Product({name,marca,category,price,img,description,available});
    product.save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
}

const updateProduct = (req, res) => {

    if (!req.params || !req.body) return res.status(400).json({ message: 'Client has not sent params' });

    const { id } = req.params;

    Product.findByIdAndUpdate(id, req.body)
        // .then(data=>{
        //     res.json(data);
        // })
        .catch(error=>{
            return res.status(409).json({message:error});
        });
    
    Product.findById(id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
}

const deleteProduct = (req, res) => {
    if (!req.params) return res.status(400).send({ message: 'Client has not sent params' });

    const { id } = req.params;

    Product.findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
}


export  {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
}