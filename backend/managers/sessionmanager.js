class Session {
    constructor(username, expiresAt) {
        this.username =  username;
        this.expiresAt = expiresAt;
    }

    isValid() {
        return this.expiresAt > (Date.now()/1000);
    }

}
class SessionManager {
    constructor() {
        this.sessions = {};
    }

    createSession(username) {
        const sessionToken = Math.random().toString(36);
        console.log(this.sessions);
        this.sessions[sessionToken] = new Session(username, (Date.now() / 1000) + 3600);
        return sessionToken;
    }

    checkSession(token) {
        if (this.sessions[token] && this.sessions[token].isValid()) {
            return true;
        }
        if(this.sessions[token] && !this.sessions[token].isValid()) {
            this.destroySession(token);
        }
        return false;
    }

    destroySession(token) {
        delete this.sessions[token];
    }

}

const sessionManager = new SessionManager();
module.exports = sessionManager;


