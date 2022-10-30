import multer  from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../../../../storage`);
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop()
    const filename = `file-${Date.now()}.${ext}`
    cb(null, filename);
  },
});

export const upload = multer({ storage });

