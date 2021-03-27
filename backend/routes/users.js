const router = require('express').Router();
const {
  getUsers, getProfile, setProfile, setAvatar, createProfile, login, getMeProfile
} = require('../controllers/users');

const auth = require('../middlewares/auth');
const { celebrate, Joi } = require('celebrate');

//Я
router.get('/users/me',auth, getMeProfile);

// Страница пользователей
router.get('/users',auth, getUsers);

// Страница пользователя по id
router.get('/users/:userId',celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24),
  }),
  }), auth, getProfile);

// Изменение профиля
router.patch('/users/me',celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}),auth, setProfile);

// Изменение аватара
router.patch('/users/me/avatar',celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(/^https?:\/\/(www\.)?([a-zA-Z0-9-])+\.([a-zA-Z])+\/?([a-zA-Z0-9\-_~:/#[\]@!&â€™,;=]+)/)
  }),
}),auth, setAvatar);

// Регистрация
router.post('/signup',celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), createProfile);

// Авторизация
router.post('/signin',celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), login);
module.exports = router;
