const router = require('express').Router();
const {CreateBlog,likeItem,
    updateBlog,getBlogs,getBlog,deleteBlog,pushComment,getComments
    } = require('../Controllers/BlogController.js');
var fileUpload = require('../Middleware/file-upload.js');
const {
	usersignup,
	usersignin,
	
} = require('../Controllers/usercontroller.js')

//add new request
router.post('/', CreateBlog); 
// router.put('/:id', updateBlog);
router.get('/', getBlogs);
router.get('/:id', getBlog);
router.put('/comment', pushComment);
router.get('/comment', getComments);
// router.delete('/:id', deleteBlog);
// router.put('/like/:id', likeItem);

router.post('/login', usersignin);
router.post('/signup', usersignup);

module.exports = router;   
//63ee420bae2cc935156c8e46
//63f203246b19e722ae4a7d1c  