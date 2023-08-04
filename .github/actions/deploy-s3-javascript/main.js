const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');


function run() { // you see this in a lot of actions, but not required
    // 1) Get some input values
    const bucket = core.getInput('bucket', { required: true }); 
    // required true means you have to return a value. I.e, if in the yaml file
    // you set required to false, and there was no default value for bucketRegion,
    // this call will throw
    const bucketRegion = core.getInput('bucket-region', { required: true});
    const distFolder = core.getInput('dist-folder', { required: true });
    core.notice('Hello from my custom JS action!');

    // 2) Upload Files
    const s3uri = `s3://${bucket}`
    // aws cli installed in ubunto-latest (see github actions documentation)
    exec.exec(`aws s3 sync ${distFolder} ${s3uri} -- region ${bucketRegion}`);
    // exec.exec is used to execute shell commands from within a actions workflow
    // here we are using exeucting the AWS cliecommand for synchronizing files with s3 bucket
}

run();