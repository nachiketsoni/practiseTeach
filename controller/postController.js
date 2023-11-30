const Post  =  require("../model/postModel")
const User = require("../model/userModel")


exports.createPost = async (req, res, next) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    const user =  await User.findOne({_id : req.body.user}) // user find kr rahe hai through req.body.user
    user.posts.push(newPost._id) // user m jo posts ka array tha usme newPost ki id daal di
    await user.save() // user ko save kr diya
    res.status(201).json(newPost);
  } catch (error) {
    res.status(501).json({ message: "create Post failed", error });
  }
};

exports.findPost = async (req, res, next) => {
  try {
    const Posts = await Post.findOne({
      _id: req.params.id,
    }).populate('user')
    res.status(200).json(Posts);
  } catch (error) {
    res.status(501).json({ message: "Delete Post failed", error });
  }
};
exports.findAllPost = async (req, res, next) => {
  try {
    const Posts = await Post.find().populate("user");
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
exports.likePost = async (req, res, next) => {
  try {
    const posts = await Post.findOne({
      _id: req.params.postid,
    });
    posts.likes.push(req.params.userid);
    await posts.save()
    
    res.status(200).json(posts);
  } catch (error) {
    res.status(501).json({ message: "Delete user failed", error });
  }
};
