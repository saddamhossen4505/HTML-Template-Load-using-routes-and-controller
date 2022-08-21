const express = require('express');
const path = require('path');
const { showHomePage, showBlogPage, showGalleyPage, showLocationPage, showMenuPage, showNewsPage, showReservationPage, showStaffPage, showFormData } = require('../controllers/pageController');



// Init router.
const router = express.Router();


// HomePage Router.
router.get('/', showHomePage);
router.get('/blog', showBlogPage);
router.get('/gallery', showGalleyPage);
router.get('/location', showLocationPage);
router.get('/menu', showMenuPage);
router.get('/news', showNewsPage);
router.get('/reservation', showReservationPage);
router.get('/staff', showStaffPage);
router.post('/form-data', showFormData);



// Exports Router.
module.exports = router;