// Copyright 2013 Google Inc. All Rights Reserved.


/**
 * Custom function for form "event_pub_all".
 *
 * Creates the HTML for a button that saves all events from a site.
 *
 * @param {Array.<Object.<string, string>>} values An array containing objects
 *     representing field ids to field values.
 * @return {string} The resulting HTML.
 */
formFunctions.processEventPubAll = function(values) {
  var url, btnNum;

  for (var i = 0; i < values.length; i++) {
    switch (values[i].name) {
      case 'cal_address_link':
        url = values[i].value;
        break;
      case 'ep_choose_button':
        btnNum = values[i].value;
        break;
    }
  }

  var resultHtml = '<a href="http://www.google.com/calendar/render?cid=' +
      encodeURIComponent(url) + '" target="_blank">' +
      '<img src="//www.google.com/calendar/images/ext/gc_' +
      btnNum + '.gif" border=0></a>';
  return resultHtml;
};


/**
 * Custom function for form "event_pub_individual".
 *
 * Creates the HTML for a button that saves an individual event.
 *
 * @param {Array.<Object.<string, string>>} values An array containing objects
 *     representing field ids to field values.
 * @return {string} The resulting HTML.
 */
formFunctions.processEventPubIndividual = function(values) {
  var what, allDay, startDateString, startTime, endDateString, endTime, where,
      description, showAs, guests, button, webName, webAddress;

  for (var i = 0; i < values.length; i++) {
    switch (values[i].name) {
      case 'ep_what':
        what = values[i].value;
        break;
      case 'ep_all_day_radio':
        allDay = values[i].value;
        break;
      case 'ep_when_start':
        startDateString = values[i].value;
        break;
      case 'ep_start_time':
        startTime = values[i].value;
        break;
      case 'ep_when_end':
        endDateString = values[i].value;
        break;
      case 'ep_end_time':
        endTime = values[i].value;
        break;
      case 'ep_where':
        where = values[i].value;
        break;
      case 'ep_description':
        description = values[i].value;
        break;
      case 'ep_show':
        showAs = values[i].value;
        break;
      case 'ep_add_guests':
        guests = values[i].value;
        break;
      case 'ep_choose_button':
        button = values[i].value;
        break;
      case 'ep_website_name':
        webName = values[i].value;
        break;
      case 'ep_website_address':
        webAddress = values[i].value;
        break;
    }
  }

  // Date calculations.
  var startDateArray = startDateString.split('/');
  var startTimeArray = startTime.split(':');
  var startString = formFunctions.generateDateString(startDateArray[2],
      startDateArray[0], startDateArray[1], startTimeArray[0],
      startTimeArray[1]);

  var endDateArray = endDateString.split('/');
  var endTimeArray = endTime.split(':');
  var endString = formFunctions.generateDateString(endDateArray[2],
      endDateArray[0], endDateArray[1], endTimeArray[0],
      endTimeArray[1]);

  var dateString = startString + '/' + endString;

  // Guests.
  var guestString = '';
  if (guests.length > 0) {
    var guestArray = guests.split(/[^~\w@\.]+/);
    for (var i = 0; i < guestArray.length; i++) {
      guestString += '&add=' + guestArray[i];
    }
  }

  // HTML assembly.
  var url = 'http://www.google.com/calendar/event?action=TEMPLATE';
  url += '&text=' + encodeURIComponent(what);
  url += '&dates=' + dateString;
  url += '&details=' + encodeURIComponent(description);
  url += '&location=' + encodeURIComponent(where);
  url += guestString;
  url += '&trp=' + (showAs === 'busy').toString();
  url += '&sprop=' + encodeURIComponent(webName);
  url += '&sprop=name:' + encodeURIComponent(webAddress);

  var buttonHtml = '<img src=\"//www.google.com/calendar/images/ext/gc_button' +
      button + '.gif\" border=0>';
  var html = '<a href=\"' + url + '\" target=\"_blank\">' + buttonHtml + '</a>';

  return html;
};


/**
 * Converts the given date/time into UTC, returns encoded string.
 *
 * @param {string} y Year.
 * @param {string} m Month.
 * @param {string} d Day.
 * @param {string} h Hour.
 * @param {string} min Minute.
 * @return {string} Encoded date and time stamp.
 */
formFunctions.generateDateString = function(y, m, d, h, min) {
  if (!y || !m || !d) {
    return;
  }

  var padZero = function(str) {
    str = str.toString();
    return (str.length === 1) ? '0' + str : str;
  };

  y = y.toString();
  y = (y.length === 2) ? '20' + y : y;

  var dateObj = (h && min) ? new Date(y, m - 1, d, h, min) :
      new Date(y, m - 1, d);
  var dateStr = '' + dateObj.getUTCFullYear();
  dateStr += padZero(dateObj.getUTCMonth() + 1);
  dateStr += padZero(dateObj.getUTCDate());
  if (h && min) {
    dateStr += 'T' + padZero(dateObj.getUTCHours());
    dateStr += padZero(dateObj.getUTCMinutes()) + '00Z';
  }
  return dateStr;
};

