const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getProfile, setProfile, setAvatar, getMeProfile,
} = require('../controllers/users');

const auth = require('../middlewares/auth');

// Я
router.get('/users/me', auth, getMeProfile);

// Страница пользователей
router.get('/users', auth, getUsers);

// Страница пользователя по id
router.get('/users/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24),
  }),
}), auth, getProfile);

// Изменение профиля
router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), auth, setProfile);

// Изменение аватара
router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(/^https?:\/\/(www\.)?([a-zA-Z0-9-])+\.([a-zA-Z])+\/?([a-zA-Z0-9\-_~:/#[\]@!&â€™,;=]+)/),
  }),
}), auth, setAvatar);

module.exports = router;
