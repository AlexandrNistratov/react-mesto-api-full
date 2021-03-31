const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');
const ConflictError = require('../errors/conflict-err');

const SALT_ROUNDS = 10;
const MONGO_DUPLICATE_ERROR_CODE = 11000;

// Все пользователи
const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(next);
};

// Конкретный пользователь
const getProfile = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if(!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId'){
        next(new BadRequestError('Некорректные данные'));
      }
      next(err)
    })
};

//Я
const getMeProfile = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if(!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId'){
        next(new BadRequestError('Некорректные данные'));
      }
      next(err)
    })
}

// Создание пользователя
const createProfile = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new NotFoundError('Не передан емейл или пароль');
  }
  bcrypt
    .hash(password, SALT_ROUNDS)
    .then(hash => {
      return User.create({ email, password: hash })
    })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        next(new BadRequestError('Некорректные данные'));
      }
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Некорректные данные'));
      }
      if (err.code === MONGO_DUPLICATE_ERROR_CODE) {
        next(new ConflictError('Такой пользователь уже существует'));
      }
      next(err)
    })
};


// Изменение профиля
const setProfile = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { runValidators: true, new: true }).orFail(new Error('Пользователь не найден'))
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
        // res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        next(new BadRequestError('Некорректные данные'));
      }
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Некорректные данные'));
      }
      next(err)
    });
};

// Изменение аватара
const setAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { runValidators: true, new: true }).orFail(new Error('Пользователь не найден'))
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
        // res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        next(new BadRequestError('Некорректные данные'));
      }
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Некорректные данные'));
      }
      next(err)
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then(user => {
      const token = jwt.sign(
        { _id: user._id },
        'some-secret-key',
        { expiresIn: '7d' }
    )
      res.send({ token }, { email })
    })
    .catch(err => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Некорректные данные'));
      }
      next(err)
    })
}

module.exports = {
  getUsers, getProfile, createProfile, setProfile, setAvatar, login, getMeProfile
};
