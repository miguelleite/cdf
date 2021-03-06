/*!
 * Copyright 2002 - 2015 Webdetails, a Pentaho company. All rights reserved.
 *
 * This software was developed by Webdetails and is provided under the terms
 * of the Mozilla Public License, Version 2.0, or any later version. You may not use
 * this file except in compliance with the license. If you need a copy of the license,
 * please go to http://mozilla.org/MPL/2.0/. The Initial Developer is Webdetails.
 *
 * Software distributed under the Mozilla Public License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. Please refer to
 * the license for the specific language governing your rights and limitations.
 */

define(['../lib/jquery', './Dashboard', './Dashboard.ext', './Dashboard.context.ext'],
  function($, Dashboard, DashboardExt, DashboardContextExt) {
  
  /**
   * A module representing an extension to Dashboard module for the dashboards Context.
   * @module Dashboard.Context
   */
  Dashboard.implement({
    /**
     * Method used by the Dashboard constructor for context initialization
     * @method _initContext
     * @for Dashboard
     *
     * @private
     */
    _initContext: function() {
      var myself = this;
      if(!this.context) {
        this.context = {};
        $.extend(this.context, this.contextObj);
      }
    }
  });
});
