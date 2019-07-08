'use strict';

module.exports = {
  name: require('./package').name,

  contentFor(type, config) {
    let pluginConfig = config.cloudinaryUploadWidget || {};

    let excludeLibrary = pluginConfig.excludeLibrary;

    if (type === 'body' && !excludeLibrary) {
      return '<script type="text/javascript" src="https://widget.cloudinary.com/v2.0/global/all.js"></script>';
    }
  }
};
