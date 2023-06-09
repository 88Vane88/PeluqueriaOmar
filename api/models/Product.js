import moongose from 'mongoose'

const ProductSchema = new moongose.Schema({

  name:String,
  marca:String,
  price:Number,
  img:String,
  description:String,
  available: {
    type: Boolean,
    default: true,
  },

})

ProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Product = moongose.model('Product', ProductSchema)

export default Product