import mongoose from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema=new mongoose.Schema({
    videoFile:{
        type:String,  //cloudinaryURL
        required:true
    },
    thumbnail:{
        type:string,
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String, //cloudinaryURL
        required:true
    },
    description:{
        type:String //cloudinaryURL
    },
    duration:{
        type:Number,  //cloudinaryURL
        required:[true,'password is required']
    },
    views:{
        type:Number,
        default:0
    },
    isPublic:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const video=mongoose.model("Video",videoSchema)