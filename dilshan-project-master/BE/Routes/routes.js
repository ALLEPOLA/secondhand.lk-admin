const express = require("express");
const router = express.Router();


const adminLogin = require('../Functions/adminLogin/adminLogin')
const adminPasswordUpdate = require('../Functions/adminPasswordUpdate/adminPasswordUpdate')
const getPendingAds = require('../Functions/getPendingAds/getPendingAds');
const getAdImage = require("../Functions/getAdImage/getAdImage");
const updateAdStatus = require("../Functions/updateAdStatus/updateAdStatus");
const getBlockedADs = require("../Functions/getBlockedAds/getBlockedAds");
const getAcceptdAds = require("../Functions/getAcceptAds/getAcceptAds");
const adCountByCategory = require("../Functions/adCountByCategory/adCountByCategory");
const getDailyAdCount = require("../Functions/getDailyAdCount/getDailyAdCount");
const adsAnalysisDataByStatus = require("../Functions/adsAnalysisDataByStatus/adsAnalysisDataByStatus.js");
const getAllUserComplaints = require("../Functions/getAllUserComplaints/getAllUserComplaints.js");
const getAdRatingStat = require("../Functions/AdRatingStat/AdRatingStat.js");
const adCountByLocation = require("../Functions/adCountByLocation/adCountByLocation.js");
const mailTest = require("../Functions/test/mailTest.js");
const forgotPasswordOtp = require("../Functions/forgotPasswordOtp/forgotPasswordOtp.js");
const verifyOtp = require("../Functions/verifyOtp/verifyOtp.js");
const resetPassword = require("../Functions/resetPassword/resetPassword.js");
const getAdminData = require("../Functions/getAdminData/getAdminData.js");
const changePassword = require("../Functions/changePassword/changePassword.js");
const adminDataChange = require("../Functions/adminDataChange/adminDataChange.js");


router.post('/admin/login', (req, res)=>{
    adminLogin(req, res);
});

router.post('/admin/change-password', (req, res)=>{
    adminPasswordUpdate(req, res);
});

router.get('/admin/get-pending-ads', (req, res)=>{
    getPendingAds(req,res)
})

router.get('/admin/get-ad-image/:ad_id', (req, res)=>{
    getAdImage(req, res)
})

router.put('/admin/update-ad-status/:ad_id', (req, res)=>{
    updateAdStatus(req,res)
})
router.get('/admin/get-blocked-ads',(req,res)=>{
getBlockedADs(req,res)
})

router.get('/admin/get-accept-ads',(req,res)=> {

    getAcceptdAds(req,res)
})

router.get('/ad-count-by-category', (req, res)=>{
    adCountByCategory(req, res)
})

router.get('/ads-status-analysis', (req, res)=>{
    adsAnalysisDataByStatus(req, res)
})

router.get('/daily-ad-count',(req, res)=>{
    getDailyAdCount(req, res)
})

router.get('/all-user-complaints', (req, res)=>{
    getAllUserComplaints(req, res)
})
router.get('/user-rating',(req, res)=>{
    getAdRatingStat(req, res)
} )
router.get('/ad-count-by-location', (req, res)=>{
    adCountByLocation(req, res)
})

router.post('/test-mail', (req, res)=>{
    mailTest(req,res)
})

router.post('/forget-password', (req, res)=>{
    forgotPasswordOtp(req, res)
})

router.post('/verify-otp', (req, res)=>{
    verifyOtp(req, res)
})

router.post('/reset-password', (req, res)=>{
    resetPassword(req, res)
})

router.get('/admin-data/:id', (req, res)=>{
    getAdminData(req, res)
})

router.put('/change-password', (req, res)=>{
    changePassword(req, res)
})
router.put('/admin-data-credentials',(req,res)=>{
    adminDataChange(req,res)
})
module.exports = router
