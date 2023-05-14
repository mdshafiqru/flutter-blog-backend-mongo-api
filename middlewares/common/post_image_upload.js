const uploader = require("../../utils/single_uploader");

function postImageUpload(req, res, next) {
    const upload = uploader(
        "post_images",
        ["image/jpeg", "image/jpg", "image/png"],
        1000000,
        "only jpg, jpeg or png format is allowed"
    );

  

    upload.any()(req, res, (err) => {
        if(err){
            res.status(500).json({
                errors: {
                    avatar : {
                        msg: err.message
                    }
                }
            });
        } else {
            next();
        }
    });
    
}

module.exports = postImageUpload;