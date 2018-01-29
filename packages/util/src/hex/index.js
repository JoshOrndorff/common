// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

const hexAddPrefix = require('./addPrefix');
const hexFixLength = require('./fixLength');
const hexFromBn = require('./fromBn');
const hexFromBuffer = require('./fromBuffer');
const hexFromNumber = require('./fromNumber');
const hexHasPrefix = require('./hasPrefix');
const hexStripPrefix = require('./stripPrefix');
const hexToBn = require('./toBn');
const hexToBuffer = require('./toBuffer');
const hexToNumber = require('./toNumber');

/**
  @summary Internal utilities to create and test for hex values
*/
module.exports = {
  hexAddPrefix,
  hexFixLength,
  hexFromBn,
  hexFromBuffer,
  hexFromNumber,
  hexHasPrefix,
  hexStripPrefix,
  hexToBn,
  hexToBuffer,
  hexToNumber
};