const express = require('express');
const passport = require('passport');

const CategoryService = require('./../services/category.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { checkRoles } = require('./../middlewares/auth.handler');
const { createCategoryDto, updateCategoryDto, getCategoryDto } = require('../dtos/category.dto');

const router = express.Router();
const service = new CategoryService();

router.get('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin', 'seller', 'customer'),
  async (req, res, next) => {
  try {
    const categories = await service.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin', 'seller', 'customer'),
  validatorHandler(getCategoryDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin'),
  validatorHandler(createCategoryDto, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin', 'seller'),
  validatorHandler(getCategoryDto, 'params'),
  validatorHandler(updateCategoryDto, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  checkRoles('admin', 'seller'),
  validatorHandler(getCategoryDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
