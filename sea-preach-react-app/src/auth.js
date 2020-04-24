class auth {
  constructor() {
    this.auth = false;
  }
  logIn(cb) {
    this.auth = true;
    cb();
  }
  logOut(cb) {
    this.auth = false;
    cb();
  }
  getAuth() {
    return this.auth;
  }
}
export default new auth();
