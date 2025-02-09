"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// تنظیم ذخیره‌سازی فایل‌ها
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    // مسیر ذخیره عکس‌های آپلود‌شده
    cb(null, 'uploads/profile-pics');
  },
  filename: function filename(req, file, cb) {
    // نام یکتای فایل (با زمان و پسوند اصلی)
    var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, "".concat(file.fieldname, "-").concat(uniqueSuffix).concat(_path["default"].extname(file.originalname)));
  }
});

// فیلتر کردن نوع فایل‌ها
var fileFilter = function fileFilter(req, file, cb) {
  var allowedFileTypes = /jpeg|jpg|png/; // فرمت‌های مجاز
  var extName = allowedFileTypes.test(_path["default"].extname(file.originalname).toLowerCase()); // بررسی پسوند فایل
  var mimeType = allowedFileTypes.test(file.mimetype); // بررسی نوع فایل

  if (extName && mimeType) {
    cb(null, true); // فایل معتبر است
  } else {
    cb(new Error('Only .jpeg, .jpg, or .png files are allowed!')); // فایل نامعتبر
  }
};

// تنظیمات Multer
var upload = (0, _multer["default"])({
  storage: storage,
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  // حداکثر اندازه فایل: ۲ مگابایت
  fileFilter: fileFilter
});
var _default = exports["default"] = upload;