import { notice } from '@actions/core'; // utility methods and features
import github from '@actions/github';
import exec from '@actions/core';

function run() { // you see this in a lot of actions, but not required
    // Log msg to github actions workflow log
    notice('Hello from my custom JS action!');
}

run();