﻿/*!
 * changesets
 * A Changeset library incorporating operational transformation (OT)
 * Copyright 2012 by Marcel Klehr <mklehr@gmx.net>
 *
 * (MIT LICENSE)
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var Operation = require('../../Operation')

/**
 * Retain Operation
 * Defined by:
 * - length
 * - symbol
 *
 * @param length <Number> How many chars to retain
 */
function Retain(length) {
  this.length = length
  this.symbol = '='
}

// True inheritance
Retain.prototype = Object.create(Operation.prototype, {
  constructor: {
    value: Retain,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
module.exports = Retain

Retain.prototype.applyDry = function(pointers) {
  pointers.input += this.length
  return this.length
}

Retain.prototype.invert = function() {
  return this
}

Retain.prototype.apply = function(pointers, input) {
  return input.substr(pointers.input, this.applyDry(pointers))
}