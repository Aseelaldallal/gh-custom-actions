const core = require('@actions/core'); // utility methods and features
const github = require('@actions/github');
const exec = require('@actions/core');

function run() { // you see this in a lot of actions, but not required
    // Log msg to github actions workflow log
    core.notice('Hello from my custom JS action!');
}

run();