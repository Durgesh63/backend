const { User } = require('../../models/user/user.models');
const ApiError = require('../../utils/ApiError');
const asyncHandler = require('../../utils/asyncHandler');
const { checkVaoidEmail } = require('../../utils/utils');


// @desc Regster User
// @route POST /api/v1/users/register
// @access Public
const register = asyncHandler(async (req, res) => {


    const { firstName, lastName, email, password } = req.body;

    if ([firstName, email, lastName, password].some((field) => field?.trim() === "") || !checkVaoidEmail(email)) {
        return new ApiError(400, "Please provide valid inputs")
    }

    // if (req.files && Array.isArray(req.files.avatar) && req.files.avatar.length > 0) {
    //    let avatorImage = req.files.avatar[0].path;
    //     await uploadOnCloudinary(avatorImage)
    // }

    const user = new User({
        firstName,
        email,
        password,
        lastName
    })

    await user.save()
    console.log(user);



    // avatar

    command: ~remote.forwardedPorts.focus

    // userType, image , group
    res.status(200).send({
        message: "response sucess"
    })

});






// @desc Login User
// @route POST /api/v1/users/login
// @access Public
const login = asyncHandler(async (req, res) => {
    res.status(200).send({
        message: "response sucess"
    })
});

//@desc Returning current logged in user
//@Route PUT /api/v1/users/profile
//@access Private
const updateProfile = asyncHandler(async (req, res) => {
    res.status(200).send({
        message: "response sucess"
    })

    // 409 user alrady exist 
});

module.exports = { register, login, updateProfile };