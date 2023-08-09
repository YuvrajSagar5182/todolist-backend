const mongoose = require('mongoose');
const { Schema } = mongoose;

const todosSchema = new Schema({
    todo: String,
});

// todosSchema.post('findOneAndDelete', async function (doc) {
//     if (doc) {
//         await Review.deleteMany({
//             _id: {
//                 $in: doc.reviews
//             }
//         })
//     }
// })

module.exports = mongoose.model('Todo', todosSchema);