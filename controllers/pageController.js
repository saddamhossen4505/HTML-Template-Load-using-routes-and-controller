const path = require('path');

// HomePage Controller.
const showHomePage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
};

// BlogPage Controller.
const showBlogPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/archive.html'));
};


// GalleryPage Controller.
const showGalleyPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/gallery.html'));
};


// LocationPage Controller.
const showLocationPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/location.html'));
};

// MenuPage Controller.
const showMenuPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/menu.html'));
};


// MenuPage Controller.
const showNewsPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/news.html'));
};


// ReservationPage Controller.
const showReservationPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/reservation.html'));
};


// StaffPage Controller.
const showStaffPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/staff.html'));
};

// StaffPage Controller.
const showFormData = (req, res) => {
    res.status(200).send(req.body);
};


// Exports Controller.
module.exports = {
    showHomePage,
    showBlogPage,
    showGalleyPage,
    showLocationPage,
    showMenuPage,
    showNewsPage,
    showReservationPage,
    showStaffPage,
    showFormData
};