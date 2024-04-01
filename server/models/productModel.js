import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    Name: { type: String, required: true },
    Price : {type : Number , required: true},
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);