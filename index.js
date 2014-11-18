var Github = require('./server/github_support');

var gs = new Github();
gs.get('phodal', function (result) {
    'use strict';
    var response = gs.on(result)
        .add_avatar()
        .add_connected_users()
        .add_name()
        .add_repositories()
        .add_languages()
        .add_events()
        .add_day_hours()
        .add_similar_users()
        .build();

    console.log(response);
});
