const { exec } = require('child_process');
const util = require('util');

// Promisify the exec function
const execAsync = util.promisify(exec);

module.exports = {
    searchLog
}

async function searchLog(reqData) {
    const command = `cat ../../logger/logger.log | grep "${'83.149.9.216'}"`;
    let response = await log(command)
    return response
}

async function log(command) {
    try {
        const { stdout, stderr } = await execAsync(command)
        if (stdout != null){
            return stdout
        }
        console.log("response--->>>", stderr)
    } catch (err) {
        console.log("err", err.stderr)
        return err.stderr
    }
}