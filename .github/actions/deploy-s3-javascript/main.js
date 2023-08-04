const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');


function run() { // you see this in a lot of actions, but not required
    // Log msg to github actions workflow log
    core.notice('Hello from my custom JS action!');
}

run();