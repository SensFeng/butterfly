'use strict';

const Node = require('./base_node.jsx');
const $ = require('jquery');

class People extends Node {
  constructor(...args) {
    super(...args);
  }
  genLogo = () => {
    return $('<i class="newIconfont iconapplication"></i>');
  }
}

module.exports = People;
