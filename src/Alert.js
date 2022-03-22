
class Alert{

  static danger(msg) {
    
    return `<p class="alert alert-danger d-flex justify-content-between">${msg} <button type="button" class="btn-close" data-dismiss="alert">&times;</button></p>`
  }

}

export default Alert ;