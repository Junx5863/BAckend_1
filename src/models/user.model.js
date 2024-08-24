import mongoose from "mongoose";
import paginate  from "mongoose-paginate-v2";

const videoGameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

videoGameSchema.plugin(paginate);

const VideoGame = mongoose.model('VideoGame', videoGameSchema);
export default VideoGame;


