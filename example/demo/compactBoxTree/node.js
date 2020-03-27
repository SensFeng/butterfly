'use strict';

const Node = require('../../../index.js').TreeNode;
const $ = require('jquery');
require('./node.less');

class BaseNode extends Node {
  constructor(opts) {
    super(opts);
  }
  draw = (opts) => {
    let container = $('<div class="iot-node"></div>')
                    .css('top', opts.top + 'px')
                    .css('left', opts.left+ 'px')
                    .attr('id', opts.id);
    
    let titleDom = $(`<div class="title ${opts.options.color}">${opts.options.title}<div>`);
    let contentDom = $(`<div class="content">${opts.options.content}<div>`);

    container.append(titleDom);
    container.append(contentDom);
    this.showExpandBtn(container);
    return container[0];
  }
  showExpandBtn(container = this.dom) {
    let expandBtn = $(`<div class='expand-btn'>···</div>`);
    expandBtn.on('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (this.collapsed) {
        // 可以在这里向后端请求数据,把node穿进去expand里面
        this.expand();
      } else {
        this.collapse();
      }
    })
    expandBtn.appendTo(container);
  }
}

module.exports = BaseNode;
