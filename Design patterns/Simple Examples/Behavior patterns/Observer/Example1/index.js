const YouTubeChannel = require('.');

const codedojo = new YouTubeChannel();

const subscriber1 = {
    update(title) {
        console.log('Watching', title);
    }
};

codedojo.on('publish', subscriber1);

codedojo.publish('JavaScript Design Patterns');