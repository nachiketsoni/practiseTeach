const Post  =  require("../model/postModel")



exports.createPost = async (req, res, next) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(501).json({ message: "create Post failed", error });
  }
};

exports.findPost = async (req, res, next) => {
  try {
    const Posts = await Post.findOne({
      _id: req.params.id,
    });
    res.status(200).json(Posts);
  } catch (error) {
    res.status(501).json({ message: "Delete Post failed", error });
  }
};
exports.findAllPost = async (req, res, next) => {
  try {
    const Posts = await Post.find();
     res.status(200).json(Posts);
  } catch (error) {
    res.status(501).json({ message: "Find All Post failed", error });
  }
};

exports.updatePost = async (req, res, next) => {
  console.log(req.body);
  try {
    try {
      var Posts = await Post.findOneAndUpdate(
        { _id: req.body._id },
        { ...req.body.updatedValues }
      );
      
    } catch (error) {
      console.log(error);
    }

    await Posts.save();

    res.status(200).json(Posts);
  } catch (error) {
    res.status(501).json({ message: "Update Post failed", error });
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const Posts = await Post.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).json(Posts);
  } catch (error) {
    res.status(501).json({ message: "Delete user failed", error });
  }
};
