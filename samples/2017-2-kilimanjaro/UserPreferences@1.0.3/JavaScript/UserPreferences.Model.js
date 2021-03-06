// Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
// Licensed under the Universal Permissive License v 1.0 as shown at http://oss.oracle.com/licenses/upl.

define('UserPreferences.Model'
, [
    'Backbone'
  , 'underscore'
  ]
, function
  (
    Backbone
  , _
  )
{
  'use strict';

  return Backbone.Model.extend({
    urlRoot: _.getAbsoluteUrl('services/UserPreferences.Service.ss')

  , validation:
    {
      'type':
      {
        required: true
      , msg: 'Please select a type'
      }
    , 'value':
      {
        required: true
      , msg: 'Please enter a value'
      }
    }
  });
});