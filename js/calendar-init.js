var clndrTemplate =
  "<div class='clndr-controls'>" +
      "<div class='month'><%= month %> <%= year %></div>" +
      "<div class='clndr-control-buttons'>" +
          "<span class='clndr-previous-button clndr-button'></span>" +
          "<span class='clndr-next-button clndr-button'></span>" +
      "</div>" +
  "</div>" +
  "<table class='clndr-table' border='0' cellspacing='0' cellpadding='0'>" +
      "<thead>" +
          "<tr class='header-days'>" +
          "<% for(var i = 0; i < daysOfTheWeek.length; i++) { %>" +
              "<td class='header-day'><div class='day-contents'><%= daysOfTheWeek[i] %></div></td>" +
          "<% } %>" +
          "</tr>" +
      "</thead>" +
      "<tbody>" +
      "<% for(var i = 0; i < numberOfRows; i++){ %>" +
          "<tr>" +
          "<% for(var j = 0; j < 7; j++){ %>" +
          "<% var d = j + i * 7; %>" +
              "<td class='<%= days[d].classes %>'>" +
                  "<div class='day-contents'><%= days[d].day %></div>" +
              "</td>" +
          "<% } %>" +
          "</tr>" +
      "<% } %>" +
      "</tbody>" +
  "</table>";

//set language
moment.locale('ru_RU');

// clndr init
$clndr = $('.news-calendar').clndr({
  template: clndrTemplate,
  daysOfTheWeek: [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ],
    forceSixRows: true,
    ready: function(){

    },
    clickEvents: {
      onMonthChange: function(month){
        // console.log(month);
      },
      click: function(target){
        console.log(target);
        $('td.day').removeClass('--active');
        target.element.classList.add('--active');
      }
    }
});
