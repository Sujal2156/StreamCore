import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; 

const videoSchema = new Schema( 
    {
        videoFile: {
            type: String, //cloudinary url
            required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, 
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }

    }, 
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate) // adding pagination plugin to videoSchema .pagination means divide into pages

export const Video = mongoose.model("Video", videoSchema)


/*
Line: videoSchema.plugin(mongooseAggregatePaginate)

Is line ka matlab hai hum apne Video model ko ek Nayi Skill (Superpower) sikha rahe hain.

Normal Video Model: Sirf data save/find kar sakta hai.

With Plugin: Ab ye Calculations kar sakta hai.

Hum isse bolenge: "Bhai, Page 2 ka data de."

Ye Plugin khud calculate karega: "Achha, Page 1 pe 10 videos thi, toh mujhe 11 se 20 tak wali videos deni hain."

*/

/*
📝 Technical Note (Lifetime ke liye yaad rakhna)
MongoDB mein data laane ke 2 tareeke hote hain:

Simple Find: Video.find() -> Isme normal pagination aasan hai.

Aggregation: Video.aggregate() -> Ye complex queries hoti hain (Jahan hum Users, Likes, Views sab mix karke data laate hain).

Problem: Aggregation queries mein Pagination lagana BAHUT MUSHKIL hota hai (Maths lagani padti hai). Solution: Ye mongoose-aggregate-paginate-v2 plugin us mushkil maths ko handle karta hai.

🧠 Interview Question
Q: Frontend pe "Next Page" button kaise kaam karta hai Backend mein? Ans: Hum Backend mein Pagination use karte hain. Agar hum MongoDB Aggregation Pipelines (Complex Queries) use kar rahe hain, toh hum mongoose-aggregate-paginate plugin use karte hain taaki humein manually skip aur limit calculate na karna pade aur humein "Total Pages" ka count automatically mil jaye.
*/